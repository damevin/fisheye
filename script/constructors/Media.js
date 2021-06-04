class MediaFactory {
    constructor(data) {     
        console.log(data)   
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
        this._imgLikes = data.likes
    }

    createHtml() {
        return `
        <a class="photographer-page__gallery__card" tabindex="-1" aria-label="${this._imgTitle} closeup view">
            <img class="photographer-page__gallery__media" loading="lazy" tab-index="-1" src="../assets/medias/${this._imgPhotographerId}/${this._imgSrc}" alt="${this._imgAlt}" />
            <footer class="photographer-page__gallery__media__footer">
                <p>${this._imgTitle}</p>
                <div class="photographer-page__gallery__media__footer__like-section">
                    <p class="photographer-page__gallery__media__footer__like-section-counter">${this._imgLikes}</p>
                    <button class="photographer-page__gallery__media__footer__like-section-button" aria-label="likes">Like</button>
                </div>
            </footer>
        </a>
        `
    }
}

class Video {
    constructor(data) {
        this._videoSrc = data.video
        this._videoTitle = data.title
        this._videoPhotographerId = data.photographerId
        this._videoLikes = data.likes
    }

    createHtml() {
        return `
        <a class="photographer-page__gallery__card" tabindex="-1">
            <video controls class="photographer-page__gallery__media">
                <source src="../assets/medias/${this._videoPhotographerId}/${this._videoSrc}" />
            </video>
            <footer class="photographer-page__gallery__media__footer">
                <p>${this._videoTitle}</p>
                <div class="photographer-page__gallery__media__footer__like-section">
                    <p class="photographer-page__gallery__media__footer__like-section-counter">${this._videoLikes}</p>
                    <button  class="photographer-page__gallery__media__footer__like-section-button">Like</button>
                </div>
            </footer>
        </a>
        `
    }
}



