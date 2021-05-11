async function displayPhotographerData() {
    const { media, photographers } = await getData()
    const id = window.location.search.split('id=')[1];
    const photographer =  photographers.find(photographer => photographer.id == id);
    const $photographerHeader = document.querySelector('.photographer-page__header')
    const template = new Photographer(photographer);
    $photographerHeader.innerHTML += template.userHeader
    const galery = media.filter(media => media.photographerId == id)
    const $elementGalery = document.querySelector('.photographer-page__gallery')
    galery.forEach(image => {
        console.log(image)
        $elementGalery.innerHTML += `<img class="photographer-page__gallery__photography" src='../assets/medias/${photographer.name}/${image.image}'>`
    }); 
}

displayPhotographerData()