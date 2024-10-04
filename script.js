// Contagem Regressiva
function iniciarContagem() {
    let numeroInicial = parseInt(document.getElementById('inicioContagem').value);
    let exibir = document.getElementById('exibirContagem');
    exibir.innerHTML = '';

    let contador = numeroInicial;
    while (contador >= 0) {
        exibir.innerHTML += contador + '<br>';
        contador--;
    }
}

function gerarTabuada() {
    let numero = document.getElementById('numeroTabuada').value;
    let exibir = document.getElementById('exibirTabuada');
    exibir.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        exibir.innerHTML += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
}

let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinharNumero() {
    let adivinhar = document.getElementById('entradaAdivinhacao').value;
    let resultado = document.getElementById('resultadoAdivinhacao');

    if (adivinhar == numeroSecreto) {
        resultado.innerHTML = 'Parabéns! Você acertou!';
    } else if (adivinhar < numeroSecreto) {
        resultado.innerHTML = 'O número secreto é maior!';
    } else {
        resultado.innerHTML = 'O número secreto é menor!';
    }
}
