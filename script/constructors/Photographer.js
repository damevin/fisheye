class Photographer {
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

    get picture() {
        return `../assets/photographers/${this._picture}`
    }

    get localization() {
        return `${this._city} ${this._country}`
    }

    get userCard() {
        return `
            <div class="photographer">
                <a href="pages/photographer-page.html?id=${this._id}">
                <img class="photographer__img" src="${this.picture}">
                <h2 class="photographer__name">${this._name}</h2>
                </a>
                <p class="photographer__localization">${this.localization}</p>
                <p class="photographer__tagline">${this._tagline}</p>
            </div>`

    }

    /* userTags() {
        const tagList = document.createElement("ul");
        element.appendChild(tagList);
        tagList.classList.add('photographer__tags');
        this._tags.forEach( tag => {
            const li = document.createElement('li');
            li.classList.add("photographer__tag")
            li.textContent += this._tags
            tagList.appendChild(li);
        })
        
    } */
}