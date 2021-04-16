// GET 
const getData = async function () {
  let response = await fetch("../data/photographers.json", {mode: 'no-cors'})
  if (response.ok) {
    let data = await response.json()
    return data;
  } else {
    console.error(response.status)
  }
}

const displayData = async function() {
  const data = await getData();
  const element = document.querySelector('.photographer');
  for (const photographer of data.photographers) {
    element.innerHTML = `${photographer.name} ${photographer.id} ${photographer.city}`
  }
}

displayData()