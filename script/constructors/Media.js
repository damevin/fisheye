class Media {
  /**
   * @constructor
   * @param {number} data.id
   * @param {string} data.photographerId
   * @param {string} data.filename
   * @param {array | string} data.tags
   * @param {number} data.likes
   * @param {number} data.price
   * @param {string} data.altText
   */
 constructor(data){
  this.id = data.id
  this.photographerId = data.photographerId
  this.filename = data.filename
  this.tags = data.tags
  this.price = data.price
  this.altText = data.altText
 }
}

class Photography extends Media {
  /**
   * Récupère le bon chemin pour la source de la photographie
   * @returns {string}
   */
  createSource() {
    return `
    src='../assets/medias/${this._name}/${this._image}'`
  }

  /**
   * Créer l'élément HTML de la photographie
   * @returns {HTMLElement}
   */
  createHTML() {
    let elementPhotography = document.createElement('img')
    elementPhotography.setAttribute('alt', this.alt)
    elementPhotography.setAttribute('role', 'button')
    elementPhotography.setAttribute('src', this.createSource)
    elementPhotography.className = 'photographer-page__gallery__photography'
    return elementPhotography;
  }

}
