async function displayPhotographerData() {
    const { media, photographers } = await getData()

    const Photographers = photographers.map(photographer => new Photographer(photographer))

    console.log("====")
    console.log(photographers)
    console.log("====")

 const urlParams = new URLSearchParams(window.location.search);
 const photographerID = urlParams.get('id');
 console.log("*************");
 console.log(photographerID);
 console.log("*************");
}

displayPhotographerData()