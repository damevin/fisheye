 /**
		* Fetch photographers data
		* @constant getData @async 
		* @returns {Array | Object}
		* @description Return an array of photographers
	 */
	const getData = async () =>
	await fetch("../data/photographers.json", { mode: "no-cors" })
		.then((res) => res.json())
		.catch((err) => console.log("An error occurs when fetching photographers", err));
 
/**
	* Update and create photographer section with photographers cards
	* @param {*} photographers - 
	*/
const displayData = async (photographers) => {
	const element = document.querySelector(".photographer__section");
	element.innerHTML = "";
	photographers.forEach((photographer) => {
		let photographerModel = new Photographer(photographer);
		element.innerHTML += photographerModel.userCard;
	});
};

/** 
	* Sort photographers array with tags
	* @param tag - Selected tag
	* @param photographers - Array of photographers
	* @param - Return all photographers, or an array of photographers that includes selected tag
 */
const filterByTag = (tag, photographers) => {
	if (tag === "all") {
		return photographers;
	} else {
		return photographers.filter((photographer) => photographer.tags.includes(tag));
	}
};

/**
	* Main function for display photographers cards
	*/
const init = async () => {
	const $filterList = document.querySelector(".header__filters__navigation");
	const $tags = $filterList.querySelectorAll("li");
	const { photographers } = await getData();
	$tags.forEach((tag) => {
		tag.addEventListener("click", function () {
			const filteredPhotographers = filterByTag(
				tag.textContent.replace(/(\s|\#)+/g, "").toLowerCase(),
				photographers
			);
			displayData(filteredPhotographers);
		});
		tag.addEventListener("keypress", function (e) {
			if (e.key === "Enter") {
				const filteredPhotographers = filterByTag(
					tag.textContent.replace(/(\s|\#)+/g, "").toLowerCase(),
					photographers
				);
				displayData(filteredPhotographers);
			}
		});
	});
	displayData(photographers);
};

init();
