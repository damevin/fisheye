// GET 
const getPhotographers = async function () {
  let response = await fetch("../data/photographers.json", {mode: 'no-cors'})
  if (response.ok) {
    let data = await response.json()
    console.log(data)
  } else {
    console.error(response.status)
  }
}

getPhotographers()


 