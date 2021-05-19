/**
 * @property {HTMLElement} element
 * @property {string[]} gallery
 * @property {string} src image affichée
 */
class Lightbox {
 static init () {
  const links = Array.from(document.querySelectorAll('.photographer-page__gallery__photography','img', "video"))
  const gallery = links.map(link => link.getAttribute('src'))
  console.log(links)
  links.forEach(link => link.addEventListener('click', e => {
     e.preventDefault()
     new Lightbox(e.currentTarget.getAttribute("src"), gallery)
   }))
   
 }

 /**
  * 
  * @param {string} url Media URL
  * @param {string[]} gallery Tableau d'url des médias
  */
 constructor (url, gallery) {
  this.element = this.buildDOM(url)
  this.gallery = gallery
  this.loadMedia(url)
  this.onKeyUp = this.onKeyUp.bind(this)
  document.body.appendChild(this.element)
  document.addEventListener('keyup', this.onKeyUp)
 }

 /**
  * @param {*string} url Media URL
  */
 loadMedia(url){
  this.url = null
  const image = new Image()
  const container = this.element.querySelector('.lightbox__container')
  const loader = document.createElement("div")
  loader.classList.add('lightbox__loader')
  container.innerHTML = ''
  container.appendChild(loader)
  image.onload = () => {
   container.removeChild(loader)
   container.appendChild(image)
   this.url = url
  }
  image.src = url

 }

 /**
  * @param {KeyboardEvent} e
  */
 onKeyUp(e) {
  if (e.key === 'Escape') {
   this.close(e)
  } else if (e.key === 'ArrowLeft') {
   this.next(e)
  } else if (e.key === 'ArrowRight') {
   this.previous(e)
  }
 }

/**
 * Ferme la modal
 * @param {MouseEvent | KeyboardEvent} e 
 */
 close(e) {
  e.preventDefault()
  this.element.classList.add('fadeOut')
  window.setTimeout(() => {
   this.element.parentElement.removeChild(this.element)
  }, 500)
  document.removeEventListener('keyup', this.onKeyUp)
 }


/**
 * Navigue vers l'image suivante
 * @param {MouseEvent | KeyboardEvent} e 
 */
 next(e){
  e.preventDefault()
  let i = this.gallery.findIndex(image => image === this.url)
  if (i === this.gallery.length - 1) {
   i = -1
  }
  this.loadMedia(this.gallery[i + 1])
 }

 /**
 * Navigue vers l'image précédente
 * @param {MouseEvent | KeyboardEvent} e 
 */
 previous(e) {
  e.preventDefault()
  let i = this.gallery.findIndex(image => image === this.url)
  if (i === 0) {
   i = this.gallery.length
  }
  this.loadMedia(this.gallery[i - 1])

 }

 /**
  * 
  * @param {string} url Media URL
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
  dom.querySelector('.lightbox__close').addEventListener('click', 
  this.close.bind(this))
  dom.querySelector('.lightbox__next').addEventListener('click', 
  this.next.bind(this))
  dom.querySelector('.lightbox__previous').addEventListener('click', 
  this.previous.bind(this))
  return dom
 }
}
