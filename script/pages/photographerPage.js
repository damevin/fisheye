async function displayPhotographerData() {
    const { media, photographers } = await getData()
    /* const Photographers = photographers.map(photographer => new Photographer(photographer)) */
    const urlParams = new URLSearchParams(window.location.search);
    const photographerID = urlParams.get('id');
    const index = parseInt(photographerID);
    if (isNaN(index)) {
        console.log("******Cassé*****")
    } else {    
        let getThisPhotographer = photographers[index]
        console.log(getThisPhotographer)
    }  
}

displayPhotographerData()