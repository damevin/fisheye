class MediaFactory {
    constructor(data) {

        console.log("====")
        console.log(data)
        console.log("====")
        
        if (data.type === 'image') {
            return new Photography(data)
        } else if (data.type === 'video') {
            return new Video(data)
        } else {
            throw 'Unknown Media Type'
        }
    }
}

class Photography {
    constructor(data) {
        this._imgSrc = data.image
        this._imgAlt = data.description
        this._imgTitle = data.title
        this._imgPhotographerId = data.photographerId
    }

    createHtml() {
        return `<img class="photographer-page__gallery__photography" loading="lazy" src="../assets/medias/${this._imgPhotographerId}/${this._imgSrc}" alt="${this._imgAlt}" />`
    }
}

class Video {
    constructor(data) {
        this._videoSrc = data.video
        this._videoTitle = data.title
        this._videoPhotographerId = data.photographerId
    }

    createHtml() {
        return `
            <video controls class="photographer-page__gallery__photography">
                <source src="../assets/medias/${this._videoPhotographerId}/${this._videoSrc}" />
            </video>
        `
    }
}



