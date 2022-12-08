const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");

const form = document.querySelector(".form");
const input = document.querySelector(".input__search");

const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
    
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = "Loading ...";

    const data = await fetchPokemon(pokemon);
    
    if(data){
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        console.log(data.sprites.versions);
        pokemonImage.style.display = 'block';
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = '';
        
    }else{
        pokemonName.innerHTML = "Not Found!";
        pokemonNumber.innerHTML = "XX";
        pokemonImage.style.display = 'none';
    }
    

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

next.addEventListener("click", (event) => {
    const pokeIndex = parseInt(pokemonNumber.innerHTML);
    renderPokemon( pokeIndex + 1 );
})

prev.addEventListener("click", (event) => {
    const pokeIndex = parseInt(pokemonNumber.innerHTML);
    if(pokeIndex > 1){
        renderPokemon( pokeIndex - 1 );
    }
    
})


renderPokemon(1);
