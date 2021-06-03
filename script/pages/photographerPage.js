const $elementGallery = document.querySelector(".photographer-page__gallery");


const filterByOption = (mediaGallery, option) => {
	switch (option) {
		case "popularity":
			return mediaGallery.sort((a, b) => {
				return b.likes - a.likes;
			});
		case "date":
			return mediaGallery.sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			});
		case "title":
			return mediaGallery.sort((a, b) => a.title.localeCompare(b.title));
		default:
			return mediaGallery.sort((a, b) => {
				return b.likes - a.likes;
			});
	}
}

async function displayPhotographerData() {
	const { media, photographers } = await getData();
	const params = new URLSearchParams(document.location.search.substring(1));
	let identifier = params.get("id");
	const selectedPhotographerData = photographers.find(
		(photographer) => photographer.id == identifier
	);
	const $photographerHeader = document.querySelector(
		".photographer-page__header-section"
	);
	$photographerHeader.innerHTML += new Photographer(
		selectedPhotographerData
	).userHeader;
	const mediaGallery = media.filter(
		(media) => media.photographerId == identifier
	);
	updateMediaGallery(mediaGallery);
	document.addEventListener("change", function (event) {
		$elementGallery.innerHTML = "";
		
		const option = filterByOption(mediaGallery, event.target.value)
		updateMediaGallery(option)

	});
}

function updateMediaGallery(gallery) {
	gallery.forEach((media) => {
		let medias = new MediaFactory(media);
		$elementGallery.innerHTML += medias.createHtml();
	});
}

function getUrlParams() {}

const main = async () => {
	await displayPhotographerData();
	Lightbox.init();
};

main();
