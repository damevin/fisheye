async function displayPhotographerData() {
    const { media, photographers } = await getData()
    const id = window.location.search.split('id=')[1];
    const photographer =  photographers.find(photographer => photographer.id == id);
    const $photographerHeader = document.querySelector('.photographer-page')
    $photographerHeader.innerHTML += `
        <h1>${photographer.name}</h1>
        <p>${photographer.city}, ${photographer.country} </p>
        <img src="../assets/photographers/${photographer.portrait}">
        <p >${photographer.tags.map(tag => `<a href="../index.html">#${tag}</a>`).join(" ")}</p>
        `
    console.log(photographer[0])
 
}

displayPhotographerData()