const form = document.getElementById('form-agenda');
let linhas = '';
const nomes = [];
const numeros = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('numero-telefone');

    if (nomes.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} jà foi inserido`);
    } else {
        nomes.push(inputNome.value);
        numeros.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    };

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

