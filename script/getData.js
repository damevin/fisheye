// GET 
const getData = async () => await fetch("../data/photographers.json", {mode: 'no-cors'})
  .then(res => res.json())
  .catch(err => console.log("An error occurs when fetching photographers", err))

const displayData = async () => {
  const { media, photographers } = await getData();
  const element = document.querySelector('.photographer');
 

  photographers.forEach( photographer => {
    const tags = photographer.tags
    console.log(photographer)
    element.innerHTML += `
      <div class="photographer">
      <a href="pages/photographer-page.html?id=${photographer.id}">
      <img class="photographer__img" src="./assets/photographers/${photographer.portrait}">
      <h2 class="photographer__name">${photographer.name}</h2>
      </a>
      <p class="photographer__localization">${photographer.city}, ${photographer.country}</p>
      <p class="photographer__tagline">${photographer.tagline}</p>
      </div>`;
    const tagList = document.createElement("ul");
    element.appendChild(tagList);
    tagList.classList.add('photographer__tags');
    tags.forEach( tag => {
        const li = document.createElement('li');
        li.classList.add("photographer__tag")
        li.textContent += tag
        tagList.appendChild(li);
    })
  })
}

displayData()

