// Escreva uma função chamada  ePaisagem 
// que recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

// function ePaisagem (lar, alt) {
//     if(lar > alt){
//         return true
//     }

//     else {
//         return false
//     }

// }

// console.log(ePaisagem(1080, 1920));

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1080, 1920));
