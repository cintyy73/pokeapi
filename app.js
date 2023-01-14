const $ = (selector) => document.querySelector(selector)

const URL = "https://pokeapi.co/api/v2"
const $input = $("#input")
let pokemonSelect;
const container = $(".card")
const $btn = $("#btn") 

const printData = (pokemonSelect = "") =>{
fetch(`${URL}/pokemon/${pokemonSelect}`)
.then((resp)=>resp.json())
.then((data)=>{
//    console.log(data)
   printPokemon(data)})

// .catch((error)=>console.log(error))
}
printData(pokemonSelect)
// printData("bulbasaur")


printPokemon = (data) =>{
  
   container.innerHTML =`
    <div class="card-image">
  
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="${data.sprites.front_default}" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">${data.species.name}</p>
        <p class="subtitle is-6"></p>
      </div>
    </div>  
  </div>`

}

const search = () =>{
    printData(pokemonSelect)
    pokemonSelect = $input.value
}
$btn.addEventListener("click", search)