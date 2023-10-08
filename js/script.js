let nome = document.querySelector("#nome").value;
let dataNascimento = document.querySelector("#dataNascimento").value;
let cpf = document.querySelector("#cpf").value;

let cep = document.querySelector("#cep").value;
let bairro = document.querySelector("#bairro").value;
let rua = document.querySelector("#rua").value;
let numero = document.querySelector("#numero").value;

let sexo = document.querySelector("input[name='sexo']:checked");

let metodoPagamento = document.querySelector("input[name='metodoPagamento]:checked'");

let numCartao = '';
let validade = '';
let codigoSeguranca = '';

if (metodoPagamento === "Cartão de Crédito") {
    numCartao = document.querySelector("#numeroCartao");
    validade = document.querySelector("#validade");
    codigoSeguranca = document.querySelector("#codigoSeguranca")
}

function mostrarCampoCartao(exibir) {
    if (exibir) {
        campoCartao.style.display = "block"
    } else {
        campoCartao.style.display = "none"
    }
}