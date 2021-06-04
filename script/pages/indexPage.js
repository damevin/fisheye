// GET

const getData = async () =>
	await fetch("../data/photographers.json", { mode: "no-cors" })
		.then((res) => res.json())
		.catch((err) => console.log("An error occurs when fetching photographers", err));

const displayData = async (photographers) => {
	const element = document.querySelector(".photographer__section");
	element.innerHTML = "";
	photographers.forEach((photographer) => {
		let photographerModel = new Photographer(photographer);
		element.innerHTML += photographerModel.userCard;
	});
};

const filterByTag = (tag, photographers) => {
	if (tag === 'all') {
		return photographers
	} else {
		return photographers.filter((photographer) => photographer.tags.includes(tag))
	}
}

const init = async () => {
	const $filterList = document.querySelector(".header__filters__navigation");
	const $tags = $filterList.querySelectorAll("li");
	const { photographers } = await getData();
	$tags.forEach((tag) => {
		tag.addEventListener("click", function () {
			const filteredPhotographers = filterByTag(tag.textContent.replace(/(\s|\#)+/g, '').toLowerCase(), photographers)
			displayData(filteredPhotographers);
		});
	});
	displayData(photographers);

}

init();