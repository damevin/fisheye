class Tag {
    constructor(tagName) {
        this._tagName = tagName
    }

    get tagName() {
        return `<li>${this._tagName}</li>`
    }
}