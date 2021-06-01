async function displayPhotographerData() {
	const { media, photographers } = await getData();
	const id = window.location.search.split("id=")[1];
	console.log(media.index)
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
	mediaGallery.forEach((media) => {
		let medias = new MediaFactory(media);
		$elementGalery.innerHTML += medias.createHtml();
	});
    const reloadMediaQuery = () => {
        switch (dropdown.value) {
            case "popularity":
                mediaGallery.sort((a, b) => {
                    return b.likes - a.likes;
                });
                break;
            case "date":
                mediaGallery.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
                break;
            case "title":
                mediaGallery.sort((a, b) => a.alt.localeCompare(b.alt));
                break;
        }
    }
}

const dropdown = document.getElementById("dropdownMenu");
/* 
function reloadMediaQuery(type, query) {


};

function reloadFilters() {
	switch (dropdown.value) {
		case "popularity":
			mediaGallery.sort((a, b) => {
				return b.likes - a.likes;
			});
			break;
		case "date":
			mediaGallery.sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			});
			break;
		case "title":
			mediaGallery.sort((a, b) => a.alt.localeCompare(b.alt));
			break;
	}
} */


const main = async () => {
	await displayPhotographerData();
	reloadMediaQuery()
	Lightbox.init();
};

main();
