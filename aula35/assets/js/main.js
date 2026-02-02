// capturar evento de submit do formulario
const form = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const peso = Number(e.target.querySelector("#peso").value);
  const altura = Number(e.target.querySelector("#altura").value);

  if (isNaN(peso) || isNaN(altura)) {
    setResultado("Peso ou altura não é um numero");
    return;
  }

  const imc = getImc(peso, altura);
  const classificacao = obterClassificacao(imc);
  let mensagem = ` Seu imc é ${imc} e sua classificação é ${classificacao} `;
  setResultado(mensagem);
});

function criaElemento(className, elemento) {
  const el = document.appendChild(elemento);
  return el;
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = msg;
}

function getImc(peso, altura) {
  const calculo = peso / (altura * altura);
  return calculo.toFixed(2);
}

function obterClassificacao(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  }

  if (imc >= 18.6 && imc <= 24.9) {
    return "Peso normal";
  }

  if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  }

  if (imc >= 30 && imc <= 34.9) {
    return "Obesidade grau 1";
  }

  if (imc >= 35 && imc <= 39.9) {
    return "Obesidade grau 2";
  }

  return "Obesidade grau 3";
}
