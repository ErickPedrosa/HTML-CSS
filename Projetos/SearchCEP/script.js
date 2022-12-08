const input = document.querySelector("input");
const form = document.querySelector("form");
const button = document.querySelector(".search");
const div = document.querySelector("div");

const limpar = document.querySelector(".limpar")

const buscarCep = async (cep) => {

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)

    const dados = await response.json();

    console.log(dados);

    return dados;
}

const renderCep = async (Cep) => {

    let dados = await buscarCep(Cep);

    const h2 = document.createElement("h2");
    const logradouro = document.createElement("p");
    const complemento = document.createElement("p");
    const bairro = document.createElement("p");
    const cidade = document.createElement("p");
    const uf = document.createElement("p");

    h2.textContent = `Cep: ${Cep}`;
    logradouro.textContent = `Logradouro: ${dados.logradouro}`;
    complemento.textContent = `Complemento: ${dados.complemento}`;
    bairro.textContent = `Bairro: ${dados.bairro}`;
    cidade.textContent = `Cidade: ${dados.localidade}`;
    uf.textContent = `UF: ${dados.uf}`;
    

    div.appendChild(h2);
    div.appendChild(logradouro);
    div.appendChild(complemento);
    div.appendChild(bairro);
    div.appendChild(cidade);
    div.appendChild(uf);


    const voltar = document.createElement("button");
    voltar.textContent = "Limpar resultados";
    voltar.classList.add("limpar");

    div.appendChild(voltar);

    clear(limpar)

}


form.addEventListener("submit", (event) => {
    event.preventDefault();

    renderCep(input.value);

})

button.addEventListener("click", (event) => {
    event.preventDefault();

    renderCep(input.value);

})

const clear = (limpar) => {
    limpar = document.querySelector(".limpar");

    limpar.addEventListener("click", (event) => {
        event.preventDefault();
    
        div.innerHTML = "";
    
    })
}

clear(limpar);