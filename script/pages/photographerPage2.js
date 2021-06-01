async function getPhotographerData() {
	const { media, photographers } = await getData();
	const id = window.location.search.split("id=")[1];
	const selectedPhotographerData = photographers.find(
		(photographer) => photographer.id == id
	);
	const $photographerHeader = document.querySelector(
		".photographer-page__header"
	);
	$photographerHeader.innerHTML += new Photographer(
		selectedPhotographerData
	).userHeader;
	const mediaGallery = media.filter((media) => media.photographerId == id);
	const $elementGalery = document.querySelector(".photographer-page__gallery");
	document.addEventListener(
		"change",
		function (event) {
			if (event.target.value === "popularity") {
				mediaGallery.sort((a, b) => {
					return b.likes - a.likes;
				});
			}
			if (event.target.value === "date") {
				mediaGallery.sort((a, b) => {
					return new Date(b.date) - new Date(a.date);
				});
				console.log(media);
			}
			if (event.target.value === "title") {
				mediaGallery.sort((a, b) => a.title.localeCompare(b.title));
				console.log(media);
			}
		},
		false
	);
	mediaGallery.forEach((media) => {
		let medias = new MediaFactory(media);
		$elementGalery.innerHTML += medias.createHtml();
	});
}

async function displayPhotographerData() {
	const currentId = window.location.search.split("id=")[1];
}

const main = async () => {
	await getPhotographerData();
};

main();
