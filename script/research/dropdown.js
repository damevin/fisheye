const dropdown = document.getElementById("dropdownMenu")
const findByPopularity = document.querySelector("#findByPopularity")
const findByDate = document.querySelector("#findByDate")
const findByTitle = document.querySelector("#findByTitle")
console.log(dropdown, findByDate)


function reloadFilters(dropdown) {
 const value = dropdown.options[dropdown.selectedIndex].value
 console.log(value)
}

