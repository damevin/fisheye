
let html = "";

for (let i = 0; i < photographers.length; i++) {
  let photographer = photographers[i];
  html += `
  <div class="photographer">
    <a href="${photographer.profile}" class="photographer__profile">
      <img class="photographer__img" src="${photographer.portrait}" alt="">
      <h2 class="photographer__name">${photographer.name}</h2>
      <p class="photographer__localization">${photographer.city}, ${photographer.country}</p>
      <p class="photographer__tagline">${photographer.tagline}</p>
      <p class="photographer__price">${photographer.price}€ /jour</p>
      <div class="photographer__tags">`
        for (let j = 0; j < photographer.tags.length; j++) {
          html += `
          <a class="photographer__tags-link">${photographer.tags[j]}</a>
          `
        }
      html += 
      `</div>
    </a>
  </div>
  `
}

document.querySelector('main').insertAdjacentHTML('beforeend', html);