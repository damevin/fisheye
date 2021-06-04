// GET
const getData = async () =>
	await fetch("../data/photographers.json", { mode: "no-cors" })
		.then((res) => res.json())
		.catch((err) => console.log("An error occurs when fetching photographers", err));

const displayData = async (data) => {
	const { photographers } = data || await getData();

	const element = document.querySelector(".photographer__section");

	photographers.forEach((photographer) => {
		let photographerModel = new Photographer(photographer);
		element.innerHTML += photographerModel.userCard;
	});
};

const $filterList = document.querySelector(".header__filters__navigation");
const $tags = $filterList.querySelectorAll("li");

function reloadSearch() {
	$tags.forEach((tag) => {

		tag.addEventListener("click", function () {
			console.log(tag.textContent);
      displayData(photographers[0])
		});
	});
}

displayData();
reloadSearch();
