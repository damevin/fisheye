// GET 
const getData = async () => await fetch("../data/photographers.json", {mode: 'no-cors'})
  .then(res => res.json())
  .catch(err => console.log("An error occurs when fetching photographers", err))

const displayData = async () => {
  const { media, photographers } = await getData();
  const element = document.querySelector('.photographer');
  console.log(media)
  
  photographers.forEach( item => {
    let photographer = new Photographer(item);
    element.innerHTML += photographer.userCard;
    /* photographer.userTags */
  })
}

displayData()