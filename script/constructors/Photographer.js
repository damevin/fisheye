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
        return `${this._city} ${this._country}`
    }

    /**
     * Create photographer card 
     * @returns {string}
     */
    get userCard() {
        return `
            <div class="photographer">
                <a href="pages/photographer-page.html?id=${this._id}">
                    <img class="photographer__img" src="${this.picture}">
                    <h2 class="photographer__name">${this._name}</h2>
                </a>
                <p class="photographer__localization">${this.localization}</p>
                <p class="photographer__tagline">${this._tagline}</p>
                <ul>${this._tags.map(tag => `<li class="tag">#${tag}</li>`).join('')}</ul>
            </div>`

    }

    /**
     * Create photographer header on his page
     * @returnns {string}
     */
    get userHeader() {
       return  `
        <div class="photographer-page__header__content>
            <h1 role="header">${this._name}</h1>
            <p>${this.localization}</p>
            <p >${this._tags.map(tag => `<a href="../index.html">#${tag}</a>`).join(" ")}</p>
        </div>
            <img src="${this.picture}" class="photographer-page__header__photo">
            
        `
    }

}