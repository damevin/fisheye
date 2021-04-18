// GET 
const getData = async () => await fetch("../data/photographers.json", {mode: 'no-cors'})
  .then(res => res.json())
  .catch(err => console.log("An error occurs when fetching photographers", err))

const displayData = async () => {
  const { media, photographers } = await getData();
  console.log(photographers)
  const element = document.querySelector('.photographer');  

  photographers.forEach( photographer => element.innerHTML += `
  <article>
  <img class="photographer__img" src="./assets/photographers/${photographer.portrait}">
  <h2 class="photographer__name">${photographer.name}</h2>
  <p class="photographer__localization">${photographer.city}, ${photographer.country}</p>
  <p class="photographer__tagline">${photographer.tagline}</p>
  <ul>
  <li></li>
  </ul>
  </article>`
  )}

displayData()