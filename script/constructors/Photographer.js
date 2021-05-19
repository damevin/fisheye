class Photographer {
    /**
     * @param data
     */
    constructor(data) {
        this._id = data.id
        this._city = data.city
        this._country = data.country
        this._name = data.name
        this._picture = data.portrait
        this._price = data.price
        this._tagline = data.tagline
        this._tags = data.tags
    }
    /**
     * Get full URL link for photographer profile picture
     * @returns {string}
     */
    get picture() {
        return `../assets/photographers/${this._picture}`
    }

    /**
     * Get full localization of the photographer
     * @returns {string}
     */
    get localization() {
        return `${this._city}, ${this._country}`
    }

    /**
     * Create photographer card 
     * @returns {string} - Return user card
     */
    get userCard() {
        return `
            <article class="photographer">
                <a href="pages/photographer-page.html?id=${this._id}">
                    <img class="photographer__img" src="${this.picture}">
                    <h2 class="photographer__name">${this._name}</h2>
                </a>
                <p class="photographer__localization">${this.localization}</p>
                <p class="photographer__tagline">${this._tagline}</p>
                <p class="photographer__price">${this._price}€/jour</p>
                <ul class="photographer__taglist">${this._tags.map(tag => `<li class="photographer__tag">#${tag}</li>`).join('')}</ul>
            </article>`
    }

    /**
     * Create photographer header on his page
     * @returns {string} Return user header
     */
    get userHeader() {
       return  `
       <div class="photographer-page__header">
            <div class="photographer-page__header__content">
                <h1 role="header" class="photographer-page__header__content__title">${this._name}</h1>
                <p class="photographer-page__header__content__localization">${this.localization}</p>
                <p class="photographer-page__header__content__tagline">${this._tagline}</p>
                <ul class="photographer-page__header__content__taglist">${this._tags.map(tag => `<li href="../index.html" class="photographer-page__header__content__tags">#${tag}</li>`).join(" ")}</ul>
            </div>
            <img src="${this.picture}" class="photographer-page__header__photo">
        </div> 
        `
    }

}