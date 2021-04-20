// GET 
const getData = async () => await fetch("../data/photographers.json", {mode: 'no-cors'})
  .then(res => res.json())
  .catch(err => console.log("An error occurs when fetching photographers", err))

const displayData = async () => {
  const { media, photographers } = await getData();
  const element = document.querySelector('.photographer');
 /*  const tagsList = document.querySelector('.photographer__tags');
  const node = document.createElement("LI");
  node.appendChild(tagsList); */

  photographers.forEach( photographer => element.innerHTML += `
  <div class="photographer">
  <img class="photographer__img" src="./assets/photographers/${photographer.portrait}">
  <h2 class="photographer__name">${photographer.name}</h2>
  <p class="photographer__localization">${photographer.city}, ${photographer.country}</p>
  <p class="photographer__tagline">${photographer.tagline}</p>
  <ul class="photographer__tags">
  </ul>
  </div>`
  )
  
  photographers.forEach( tags => createTags())
}

displayData()

function createTags(){
  const tagList = document.querySelector(".photographer__tags");
  const li = document.createElement('li');
  li.textContent = photographers.tags;
  tagList.appendChild(li);
}