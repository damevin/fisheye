function displayPhotographerData() {
 const urlParams = new URLSearchParams(window.location.search);
 const photographerID = urlParams.get('id');
 console.log("*************");
 console.log(photographerID);
 console.log("*************");
}

displayPhotographerData()