const pokemonName = document.querySelector(".namePokemon");
const pokemonNumber = document.querySelector(".idPokemon");
const pokemonImage = document.querySelector(".pokemonImage");

const height = document.querySelector(".height-text");
const weight = document.querySelector(".weight-text");
const id = document.querySelector(".id-text");
const abilities = document.querySelector(".abilities-text");

const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const search = document.querySelector(".search-icon");
const searchAll = document.querySelectorAll(".search-ic");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

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
        console.log(data);
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        id.innerHTML = data.id;

        const heg = data.height;
        height.innerHTML = heg / 10; //Convertendo de decímetros para metros;

        const weg = data.weight;
        weight.innerHTML = weg / 10; //Convertendo de hectogramas para kg;

        pokemonImage.style.display = 'block';
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        abilities.innerHTML = ""
        data.abilities.forEach( (ability) => {
            if(!ability.is_hidden){
                abilities.innerHTML +=  "/ " + ability.ability.name;
            }
        } );
        abilities.innerHTML +=  " / ";

        renderType(data);
        renderWeakAndAdv(data);


        input.value = '';
        
        //getType(data);

        
    }else{
        pokemonName.innerHTML = "Not Found!";
        pokemonNumber.innerHTML = "XX";
        pokemonImage.style.display = 'none';
    }
    
    
}

const renderType = (pokemon) => {
    const typesContainer = document.querySelector(".typesContainer");

    typesContainer.innerHTML = '';

    pokemon.types.forEach( (tipo) => {

        const div = document.createElement("div");
        const span = document.createElement("span");

        div.classList.add("type");
        span.classList.add("type-text");

        span.innerHTML = tipo.type.name;

        div.appendChild(span);
        typesContainer.appendChild(div);
    })

}
const renderWeakAndAdv = async (pokemon) => {
    const weaknessContainer = document.querySelector(".weakness");
    const advantagesContainer = document.querySelector(".advantages");
    
    weaknessContainer.innerHTML = '';
    advantagesContainer.innerHTML = '';
    

    const dano = await getType(pokemon);
    const [danoR, danoC] = dano;

    

    danoR.forEach( (tipo, i) => {
        if(tipo >= 1){
            
            

            const div = document.createElement("div");
            const span = document.createElement("span");

            div.classList.add("type");
            span.classList.add("type-text");

            span.innerHTML = tipo[i - 1];

            div.appendChild(span);
            weaknessContainer.appendChild(div);

        }
    })

    danoC.forEach( (tipo, i) => {
        if(tipo >= 1.5){

            const div = document.createElement("div");
            const span = document.createElement("span");

            div.classList.add("type");
            span.classList.add("type-text");

            span.innerHTML = tipo[i - 1];

            div.appendChild(span);
            advantagesContainer.appendChild(div);

            
        }
    })

}













form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());

    searchAll.forEach( (element) => {
        element.classList.toggle("hid");
    } )

    form.classList.toggle("show");

    input.value = '';

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


search.addEventListener("click", (event) => {
    searchAll.forEach( (element) => {
        element.classList.toggle("hid");
    } )

    form.classList.toggle("show");
});

















renderPokemon(1);

