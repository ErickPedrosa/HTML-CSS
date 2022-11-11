var noturno = true;

function cookieModo(){
    modo = document.cookie.split(';');
    modo = modo[modo.length - 1];
    modo = modo.split("=")[1];

    if("false" == modo){
        body.classList.toggle("noturno");

        for(let counter = 0; counter < linkBotao.length; counter++){
            linkBotao[counter].classList.toggle("noturno");
        }
        noturno = false;

    }
    
}

function trocaSite(){
    if(noturno == true){
        noturno = false;
        document.cookie = `modoNoturno=${noturno}`;
    }else{
        noturno = true;
        document.cookie = `modoNoturno=${noturno}`;
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
