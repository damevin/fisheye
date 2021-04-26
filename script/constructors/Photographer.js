class Photographer {
    constructor(data) {
        this._id = data.id
        this._city = data.city
        this._country = data.country
        this._name = data.name
        this._picture = data.portrait
        this._price = data.price
        this._tagline = data.tagline
    }

    get photographerPicture() {
        return `./assets/photographers/${this._picture}`
    }

    get profileDescription() {
        return `<p>
            ${this._name}
            <br />
            ${this._tagline}
        </p>`
    }
}