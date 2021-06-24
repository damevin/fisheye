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
 *	@constant {Array | Objects} media & photographers
 * @constant params - Get params in URL
 * @constant identifier - Get id in params
 * @constant selectedPhotographerData - return
 * @constant $photographerHeader {HTMLElement} - Get html for place photographer header
 * @constant mediaGallery - Return array of medias, based on photographer identifier
 * @function updateMediaGallery
 * @event listen when user change select state
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

/**
 * Get and Update likes on medias
 */
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
			let button = i.querySelector('.photographer-page__gallery__media__footer__like-section-button')
			let iconButton = i.querySelector(".fa-heart");
			let likeSum = Number(elementCounter.textContent);
			const liked = i.dataset.liked === "true";
			i.dataset.liked = !liked;
			elementCounter.innerHTML = likeSum + (!liked ? 1 : -1);
			if (liked) {
				reloadLikes();
				iconButton.classList.add("far");
				iconButton.classList.remove("fas");
				button.ariaLabel = "J'aime pas"
			} else if (!liked) {
				reloadLikes();
				iconButton.classList.add("fas");
				iconButton.classList.remove("far");
				button.ariaLabel = "J'aime"
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
