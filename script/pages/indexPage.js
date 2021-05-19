// GET 
const getData = async () => await fetch("../data/photographers.json", {mode: 'no-cors'})
  .then(res => res.json())
  .catch(err => console.log("An error occurs when fetching photographers", err))

const displayData = async () => {
  const { media, photographers } = await getData();
  const element = document.querySelector('.photographer__section');
  photographers.forEach(photographer => {
    let photographerModel = new Photographer(photographer);
    element.innerHTML += photographerModel.userCard;
  })
}

displayData()