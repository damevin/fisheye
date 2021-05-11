class Lightbox {
 static init () {
  const links = document.querySelectorAll('img[src$=".jpg"]')
  .forEach(link => link.addEventListener('click', e => {
     e.preventDefault()
     new Lightbox(e.currentTarget.getAttribute("src"))
   }))
   
 }

 /**
  * 
  * @param {*string} url Media URL
  */
 constructor (url) {
  const element = this.buildDOM(url)
  document.body.appendChild(element)
 }

 /**
  * 
  * @param {*string} url Media URL
  * @return {HTMLElement}
  */
 buildDOM(url) {
  const dom = document.createElement('div')
  dom.classList.add('lightbox')
  dom.innerHTML = `
  <button class="lightbox__close">Fermer</button>
  <button class="lightbox__next">Suivant</button>
  <button class="lightbox__previous">Précédent</button>
  <div class="lightbox__container">
      <img src="${url}" alt="">
  </div>`
  return dom
 }
}

/**
 * TO DO: Find a better way to do that 
 */
setTimeout(function(){ Lightbox.init(); }, 1000);
