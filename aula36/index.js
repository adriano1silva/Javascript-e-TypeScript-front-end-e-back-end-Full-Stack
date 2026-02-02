// For in -> lê os indices ou chaves do objeto.

const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i ++){
//     console.log(frutas[i]);
// }

// for (let i in frutas) {
//     console.log(i)
// }

const pessoa = {
    nome: 'Adriano',
    sobrenome: 'Silva',
    idade: 23
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}