// GET 
const getData = async () => await fetch("../data/photographers.json", {mode: 'no-cors'})
  .then(res => res.json())
  .catch(err => console.log("An error occurs when fetching photographers", err))

const displayData = async () => {
  const { media, photographers } = await getData();

  const element = document.querySelector('.photographer');

  // Méthode à la papa
  for (const photographer of photographers) {
    element.innerHTML += `${photographer.name} ${photographer.id} ${photographer.city}`
  }

  // Méthode de jeuns
  // photographers.forEach(photographer => element.innerHTML += `${photographer.name} ${photographer.id} ${photographer.city}`)
}

displayData()