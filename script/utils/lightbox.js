/**
 * @property {HTMLElement} element
 */
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
  this.element = this.buildDOM(url)
  this.loadMedia(url)
  document.body.appendChild(this.element)
 }

 /**
  * @param {*string} url Media URL
  */
 loadMedia(url){
  const image = new Image()
  const container = this.element.querySelector('.lightbox__container')
  const loader = document.createElement("div")
  loader.classList.add('lightbox__loader')
  container.appendChild(loader)
  image.onload = () => {
   container.removeChild(loader)
   container.appendChild(image)
  }
  image.src = url

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
  </div>`
  return dom
 }
}

/**
 * TO DO: Find a better way to do that 
 */
setTimeout(function(){ Lightbox.init(); }, 1000);
