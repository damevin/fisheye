const $elementGallery = document.querySelector(".photographer-page__gallery");

async function displayPhotographerData() {
	const { media, photographers } = await getData();
	const params = new URLSearchParams(document.location.search.substring(1));
	let identifier = params.get("id");
	const selectedPhotographerData = photographers.find(
		(photographer) => photographer.id == identifier
	);
	const mediaGallery = media.filter((media) => media.photographerId == identifier);
	const $photographerHeader = document.querySelector(".photographer-page__header-section");
	$photographerHeader.innerHTML += new Photographer(selectedPhotographerData).userHeader;
	updateMediaGallery(mediaGallery);
	document.addEventListener("change", function (event) {
		$elementGallery.innerHTML = "";
		switch (event.target.value) {
			case "popularity":
				mediaGallery.sort((a, b) => {
					return b.likes - a.likes;
				});
				updateMediaGallery(mediaGallery);
				break;
			case "date":
				mediaGallery.sort((a, b) => {
					return new Date(b.date) - new Date(a.date);
				});
				updateMediaGallery(mediaGallery);
				break;
			case "title":
				mediaGallery.sort((a, b) => a.title.localeCompare(b.title));
				updateMediaGallery(mediaGallery);
				break;
			default:
				updateMediaGallery(mediaGallery);
		}
	});
}


function updateMediaGallery(gallery) {
	gallery.forEach((data) => {
		let media = new MediaFactory(data);
		$elementGallery.innerHTML += media.createHtml();
  let mediaLikes = document.getElementById(`${media._id}`)
		mediaLikes.addEventListener('click', function() {
			console.log("-----")
		}, false)
		console.log(mediaLikes)
		console.log(media._id)
	});
}

function like() {
	console.log("=======")
	console.log("Etape suivante")
	console.log("=======")
}

const main = async () => {
	await displayPhotographerData();
	Lightbox.init();
};

main();
