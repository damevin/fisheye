/**
 * Lightbox for show photographers medias
 * @constant {HTMLElement} gallerySection - Get elements in gallery
 * @constant {string []} links - Get all elements who contains img and video
 * @constant {string []} gallery - Get attributes src of all medias
 */
class Lightbox {
	static init() {
		const gallerySection = document.querySelector(".photographer-page__gallery");
		const links = Array.from(gallerySection.querySelectorAll('img[src$=".jpg"],source[src$=".mp4"]'));
		const gallery = links.map((link) => link.getAttribute("src"));
		links.forEach(link => {
			link.addEventListener("click", (e) => {
				e.preventDefault();
				new Lightbox(e.currentTarget.getAttribute("src"), gallery);
			});
		});
	}

	/**
	 *
	 * @param {string} url Media URL
	 * @param {string[]} gallery Array of medaid
	 * @param {string} alt Alt media text
	 */
	constructor(url, gallery, alt) {
		this.element = this.buildDOM(url, alt);
		this.gallery = gallery;
		this.loadMedia(url, alt);
		this.formatSrcForMediaLightbox(url)
		this.onKeyUp = this.onKeyUp.bind(this);
		document.body.appendChild(this.element);
		document.addEventListener("keyup", this.onKeyUp);
	}


	formatSrcForMediaLightbox(src){
		let lightboxMediaLink = src.split('/')
		lightboxMediaLink.splice(4, 0, "lightbox")
		const formatedLightboxMediaLink = lightboxMediaLink.join("/")
		return formatedLightboxMediaLink
	}

	/**
	 * @param {string} url Media URL
	 * @param {string} alt Media alt text
	 */
	loadMedia(url, alt) {
		this.url = url;
		this.alt = alt;
		if (url.endsWith(".mp4")) {
			const video = document.createElement("video");
			const container = this.element.querySelector(".lightbox__container");
			const legend = document.createElement("p");
			legend.innerHTML += this.getFormatedTitle(url);
			container.innerHTML = "";
			container.appendChild(video);
			container.appendChild(legend);
			video.setAttribute("controls", "");
			video.src = url;
		} else if (url.endsWith(".jpg")) {
			const image = new Image();
			const container = this.element.querySelector(".lightbox__container");
			const legend = document.createElement("p");
			legend.innerHTML += this.getFormatedTitle(url);
			container.innerHTML = "";
			container.appendChild(image);
			container.appendChild(legend);
			image.alt = this.getFormatedTitle(url);
			image.src = this.formatSrcForMediaLightbox(url);
			image.classList.add("lightbox__container__img");
		}
	}

	/**
	 * Return a formated title based on media src
	 * @param {string} path
	 * @returns {string} formatedTitle -
	 */
	getFormatedTitle(path) {
		const splitedPath = path.split("/");
		const string = splitedPath[splitedPath.length - 1].split(".")[0];
		const formatedTitle = string.replaceAll("_", " ");
		return formatedTitle;
	}

	/**
	 * @param {KeyboardEvent} e
	 */
	onKeyUp(e) {
		if (e.key === "Escape") {
			this.close(e);
		} else if (e.key === "ArrowLeft") {
			this.next(e);
		} else if (e.key === "ArrowRight") {
			this.previous(e);
		}
	}

	/**
	 * Close modal
	 * @param {MouseEvent | KeyboardEvent} e
	 */
	close(e) {
		e.preventDefault();
		this.element.classList.add("fadeOut");
		window.setTimeout(() => {
			this.element.parentElement.removeChild(this.element);
		}, 500);
		document.removeEventListener("keyup", this.onKeyUp);
	}

	/**
	 * Switch to the next media
	 * @param {MouseEvent | KeyboardEvent} e
	 */
	next(e) {
		e.preventDefault();
		let i = this.gallery.findIndex((image) => image === this.url);
		if (i === this.gallery.length - 1) {
			i = -1;
		}
		this.loadMedia(this.gallery[i + 1]);
	}

	/**
	 * Switch to the previous media
	 * @param {MouseEvent | KeyboardEvent} e
	 */
	previous(e) {
		e.preventDefault();
		let i = this.gallery.findIndex((image) => image === this.url);
		if (i === 0) {
			i = this.gallery.length;
		}
		this.loadMedia(this.gallery[i - 1]);
	}

	/**
	 *
	 * @return {HTMLElement}
	 */
	buildDOM() {
		const dom = document.createElement("div");
		dom.classList.add("lightbox");
		dom.innerHTML = `
    <button class="lightbox__close" aria-label="Close dialog">Fermer</button>
    <button class="lightbox__next" aria-label="Next image">Suivant</button>
    <button class="lightbox__previous" aria-label="Previous image">Précédent</button>
    <div class="lightbox__container" role="dialog" aria-label="image closeup view">
    <p class="lightbox__container__img-title"></p>
    </div>`;
		dom.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
		dom.querySelector(".lightbox__next").addEventListener("click", this.next.bind(this));
		dom.querySelector(".lightbox__previous").addEventListener("click", this.previous.bind(this));
		return dom;
	}
}
