// Some todos os numeros (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor){
    acumulador += valor
    return acumulador;
}, 0)
console.log(total);

// const numerosPar = numeros.filter(valor => valor % 2 === 0);
// console.log(numerosPar);

// const arrayDobro = numeros.map(array => array * 2);
// console.log(arrayDobro);




//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64 },
    {nome: 'Wallace', idade: 47},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(pessoaMaisVelha);