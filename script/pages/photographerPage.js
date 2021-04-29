async function displayPhotographerData() {
    const { media, photographers } = await getData()
    const id = window.location.search.split('id=')[1];
    const photographer = !id ? photographers : photographers.filter(photographer => photographer.id == id);
    const $photographerHeader = document.querySelector('.photographer-page')
    $photographerHeader.innerHTML += `
        <h1>${photographer[0].name}</h1>
        <p>${photographer[0].city}, ${photographer[0].country} </p>
        <img src="../assets/photographers/${photographer[0].portrait}">
        `
    console.log(photographer[0])
 
}

displayPhotographerData()