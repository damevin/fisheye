async function displayPhotographerData() {
    const { media, photographers } = await getData()
    const id = window.location.search.split('id=')[1];
    const photographer =  photographers.find(photographer => photographer.id == id);
    const $photographerHeader = document.querySelector('.photographer-page__header')
    $photographerHeader.innerHTML += `
        <div class="photographer-page__header__content>
            <h1 role="header">${photographer.name}</h1>
            <p>${photographer.city}, ${photographer.country} </p>
            <p >${photographer.tags.map(tag => `<a href="../index.html">#${tag}</a>`).join(" ")}</p>
        </div>
            <img src="../assets/photographers/${photographer.portrait}" class="photographer-page__header__photo">
            
        `
    const galery = media.filter(media => media.photographerId == id)
    const $elementGalery = document.querySelector('.photographer-page__gallery')
    galery.forEach(image => {
        console.log(image)
        $elementGalery.innerHTML += `<img class="photographer-page__gallery__photography" src='../assets/medias/${photographer.name}/${image.image}'>`
        
    }); 
}

displayPhotographerData()