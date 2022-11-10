var noturno = false;


function trocaSite(){
    if (noturno == false) {
        noturno = true;


        icone.src = "../../../HTML-CSS/icons/lua.png";

    }else{
        noturno = false;

        icone.src = "../../../HTML-CSS/icons/sol.png";

    }

    body.classList.toggle("noturno");

    for(let counter = 0; counter < linkBotao.length; counter++){
        linkBotao[counter].classList.toggle("noturno");
    }
    
}



const botao = document.querySelector("#botao");
const body = document.querySelector("body");
const linkBotao = document.querySelectorAll(".link-botao");
const icone = document.querySelector(".icone");

botao.onclick = function () { trocaSite() }
