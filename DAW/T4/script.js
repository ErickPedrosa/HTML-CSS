const form = document.querySelector("form")
const bot_limpar = document.querySelector(".limpar")
const inputs = document.querySelectorAll("input")
const bot_submit = document.querySelector("input#submit")
const textarea = document.querySelector("textarea")


form.addEventListener("submit", (event) => {
    //event.preventDefault();

    alert("Obrigado pelo envio do formulário!")
})

function limpar(){
    inputs.forEach(input => {
        input.checked = false;
        input.value = "";

    });
    
    textarea.value = ""
    bot_submit.value = "Enviar"
}

bot_limpar.addEventListener("click", (event) => {
    event.preventDefault();

    limpar();
})