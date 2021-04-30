async function displayPhotographerData() {
    const { media, photographers } = await getData()
    const id = window.location.search.split('id=')[1];
    const photographer =  photographers.find(photographer => photographer.id == id);
    const $photographerHeader = document.querySelector('.photographer-page')
    $photographerHeader.innerHTML += `
        <div class="photographer-page__header>
            <h1 role="header">${photographer.name}</h1>
            <p>${photographer.city}, ${photographer.country} </p>
            <img src="../assets/photographers/${photographer.portrait}" class="photographer-page__header__photo">
            <p >${photographer.tags.map(tag => `<a href="../index.html">#${tag}</a>`).join(" ")}</p>
        </div>
        `
    const galery = media.filter(media => media.photographerId == id)
    const $elementGalery = document.querySelector('.photographer-galery')
    console.log(galery)
    galery.forEach(image => {
        console.log(image)
        $elementGalery.innerHTML += `<img src='../assets/medias/${photographer.name}/${image.image}'>`
        
    });

   
}

displayPhotographerData()