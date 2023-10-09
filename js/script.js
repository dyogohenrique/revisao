// Aqui estamos selecionando o formulário no HTML pelo seu elemento "form" e a lista de cadastros pelo elemento "ul#cadastros".
const formulario = document.querySelector("form");
const listaDeCadastro = document.querySelector("ul#cadastros")

// Adicionamos um evento "submit" ao formulário, que é acionado quando o usuário clica no botão "Enviar".
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página.
    salvarCadastro(); // Chama a função para salvar o cadastro.
    formulario.reset(); // Reseta o formulário, limpando todos os campos.
    mostrarCampoCartao(false); // Esconde o campo do cartão de crédito se necessário.
});

// Esta função é responsável por salvar os dados do formulário.
function salvarCadastro() {
    // Aqui, estamos pegando os valores dos campos do formulário usando seus IDs.
    const nome = document.querySelector("#nome").value;
    const dataNascimento = document.querySelector("#dataNascimento").value;
    const cpf = document.querySelector("#cpf").value;

    const cep = document.querySelector("#cep").value;
    const bairro = document.querySelector("#bairro").value;
    const rua = document.querySelector("#rua").value;
    const numero = document.querySelector("#numero").value;

    // Pegamos o valor do sexo selecionado.
    const sexo = document.querySelector("input[name='sexo']:checked").value;

    // Pegamos o método de pagamento selecionado.
    const metodoPagamento = document.querySelector("input[name='metodoPagamento']:checked").value;

    // Inicializamos algumas variáveis vazias para os campos do cartão de crédito.
    let numCartao = '';
    let validade = '';
    let codigoSeguranca = '';

    // Se o método de pagamento for "Cartão de Crédito", pegamos os valores dos campos do cartão.
    if (metodoPagamento === "Cartão de Crédito") {
        numCartao = document.querySelector("#numeroCartao").value;
        validade = document.querySelector("#validade").value;
        codigoSeguranca = document.querySelector("#codigoSeguranca").value;
    }

    // Calculamos a idade do usuário a partir da data de nascimento.
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const idade = hoje.getFullYear() - nascimento.getFullYear();

    // Criamos um objeto com os dados do cadastro.
    const cadastro = {nome, dataNascimento, idade, cpf, sexo, cep, bairro, rua, numero, metodoPagamento, numCartao, validade, codigoSeguranca};

    // Chamamos a função para formatar e exibir o cadastro na lista.
    formatarCadastro(cadastro);
}

// Esta função recebe o objeto de cadastro e o formata para exibição na lista.
function formatarCadastro(cadastro) {
    // Criamos um elemento de lista (li) para o cadastro.
    const itemLista = document.createElement("li");

    // Preenchemos o conteúdo do item da lista com os dados do cadastro.
    itemLista.innerHTML = `<h4>Nome: ${cadastro.nome}</h4> 
    <p>Data de nascimento: ${cadastro.dataNascimento}</p> 
    <p>Idade: ${cadastro.idade}</p> 
    <p>CPF: ${cadastro.cpf}</p>
    <p>Endereço: Rua ${cadastro.rua}, ${cadastro.numero}. Bairro ${cadastro.bairro} - ${cadastro.cep}</p>
    <p>Sexo: ${cadastro.sexo}</p>
    <p>Forma de Pagamento: ${cadastro.metodoPagamento}</p>`;

    // Se o método de pagamento for "Cartão de Crédito", adicionamos informações adicionais.
    if (cadastro.metodoPagamento === "Cartão de Crédito") {
        itemLista.innerHTML += `<p>Número do Cartão: ${cadastro.numCartao}</p>
        <p>Data de Validade: ${cadastro.validade}</p>
        <p>Código de Segurança: ${cadastro.codigoSeguranca}</p>`;
    }

    // Adicionamos o item à lista de cadastros.
    listaDeCadastro.appendChild(itemLista);
}

// Aqui selecionamos o campo onde os cadastros serão exibidos e o botão para mostrar/ocultar essa seção.
const campoCadastro = document.querySelector("div#campo-cadastros-salvos");
const btnMostrarCadatro = document.querySelector("button#mostrarCadastro")

// Adicionamos um evento de clique ao botão para mostrar/ocultar a lista de cadastros.
btnMostrarCadatro.addEventListener("click", (event) => {
    if (campoCadastro.style.display === "none" || campoCadastro.style.display === "") {
        campoCadastro.style.display = "block"; // Mostra a lista de cadastros.
    } else {
        campoCadastro.style.display = "none"; // Oculta a lista de cadastros.
    }
})

// Esta função é responsável por mostrar ou ocultar o campo do cartão de crédito
function mostrarCampoCartao(exibir) {
    if (exibir) {
        campoCartao.style.display = "block"; // Mostra o campo do cartão.
    } else {
        campoCartao.style.display = "none"; // Oculta o campo do cartão.
    }
}