const $elementGallery = document.querySelector(".photographer-page__gallery");

/**
 * Filter media gallery with select option params
 * @param {Array} mediaGallery
 * @param {String} option
 * @returns {Array} - return a sorted media array
 */
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
};

/**
 * @async Display photogrrapher data, based on his ID
 */
async function displayPhotographerData() {
	const { media, photographers } = await getData();

	const params = new URLSearchParams(document.location.search.substring(1));
	const identifier = params.get("id");

	const selectedPhotographerData = photographers.find(
		(photographer) => photographer.id == identifier
	);

	const PhotographerConstructor = new Photographer(selectedPhotographerData);
	PhotographerConstructor.updateDocumentTitle;

	const mediaGallery = media.filter((media) => media.photographerId == identifier);

	updateMediaGallery(mediaGallery);

	document.addEventListener("change", function (event) {
		$elementGallery.innerHTML = "";
		const option = filterByOption(mediaGallery, event.target.value);
		updateMediaGallery(option);
		Lightbox.init()
	});

	const $photographerHeader = document.querySelector(".photographer-page__header-section");
	const $photographerFooter = document.querySelector(".photographer-page__footer-section");
	$photographerHeader.innerHTML += new Photographer(selectedPhotographerData).userHeader;
	$photographerFooter.innerHTML += new Photographer(selectedPhotographerData).userFooter;
}

/**
 * Update media gallery
 * @param {Array} gallery
 */
function updateMediaGallery(gallery) {
	gallery.forEach((media) => {
		let medias = new MediaFactory(media);
		$elementGallery.innerHTML += medias.createHtml();
	});
}

function getAndUpdateLikes() {
	const $likesSection = document.querySelectorAll(
		".photographer-page__gallery__media__footer__like-section"
	);

	function reloadLikes() {
		let $likeCounter = document.querySelector('.photographer-page__footer__aside__total-likes')
		let $totalLikesElements = document.querySelectorAll(
			".photographer-page__gallery__media__footer__like-section-counter"
		);
		let likeSum = 0
		$totalLikesElements.forEach(function (like) {
			let likeUnit = Number(like.textContent)
			likeSum += likeUnit
		});
		$likeCounter.innerHTML = likeSum
		return likeSum
	}

	$likesSection.forEach(function (i) {
		i.addEventListener("click", function () {
			let elementCounter = i.querySelector(
				".photographer-page__gallery__media__footer__like-section-counter"
			);
			let elementButton = i.querySelector(".fa-heart");
			let likeSum = Number(elementCounter.textContent);
			const liked = i.dataset.liked === "true";
			i.dataset.liked = !liked;
			elementCounter.innerHTML = likeSum + (!liked ? 1 : -1);
			if (liked) {
				reloadLikes();
				elementButton.classList.add("far");
				elementButton.classList.remove("fas");
			} else if (!liked) {
				reloadLikes();
				elementButton.classList.add("fas");
				elementButton.classList.remove("far");
			}
		});
	});
}

/**
 * Function for initialized page
 */
const init = async () => {
	await displayPhotographerData();
	getAndUpdateLikes();
	Lightbox.init();
};

init();
