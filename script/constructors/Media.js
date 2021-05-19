class MediaFactory {
    constructor(data, type) {

        console.log("====")
        console.log(type)
        console.log("====")
        
        if (type === 'image') {
            return new Photography(data)
        } else if (type === 'video') {
            return new Video(data)
        } else {
            throw 'Unknown Media Type'
        }
    }
}

class Photography {
    constructor(data) {
        this._imgSrc = data.image
        this._imgAlt = data.alt
    }

    createHtml() {
        return `<img src="${this._imgSrc}" alt="${this._imgAlt}" />`
    }
}

class Video {
    constructor(data) {
        this._src = data.src
        this._title = data.title
    }

    createHtml() {
        return `
            <video controls>
                <source src="${this._src}" />
            </video>
        `
    }
}

const PhotographyTest = new MediaFactory({ src: "sdsdsds", alt: "sdsddsd" }, 'photography')
console.log(PhotographyTest.createHtml())
