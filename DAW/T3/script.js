const prova = document.querySelector(".prova");
const gabarito = document.querySelector(".gabarito");
const BotaoProva = document.querySelector(".botao-prova");
const BotaoGabarito = document.querySelector(".botao-gabarito");


function show(){
    prova.classList.toggle("escondido")
    gabarito.classList.toggle("escondido")
}


BotaoProva.addEventListener("click", show)
BotaoGabarito.addEventListener("click", show)