//
const nome = 'Adriano Silva';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// };

// for (let i in nome) {
//     console.log(nome[i]);
//}

for (let valor of nome) {
    console.log(valor)
};

// for classico -> Geralmente com iteraveis (array e strings)
// for in -> Retorna o indice ou chave (string, array ou objetos)
// for of -> Retorna o valor em si (iteraveis, arrays ou strings)