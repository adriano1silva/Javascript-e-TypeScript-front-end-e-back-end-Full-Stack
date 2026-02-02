const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const nomeTexto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; 
    
nomeTexto.innerHTML += `<p> Seu numero é ${numero}. </p>`;
nomeTexto.innerHTML += `<p> Raiz quadrada: ${(numero ** 0.5)}. </p>`;
nomeTexto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}. </p>`;
nomeTexto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}. </p>`;
nomeTexto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}. </p>`;
nomeTexto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}. </p>`;
nomeTexto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}. </p>`;
        
    