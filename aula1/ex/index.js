// Dados primitivos String, number, undefined, null, bolean, symbol
const name = 'Adriano'; //string 
const nome1 = "Adriano" //string
const nome2 = `Adriano`; //string
const num1 = 10; // number
const num2 = 10.20; // number
let nomeAluno; //undefined -> nao aponta pra local nenhum na memoria
const sobrenomeAluno = null; // nulo -> nao aponta pra local nenhum na memoria
const aprovado = true // valor booleano verdadeiro (logico)
const reprovado = false // valor booleano falso (logico)

let a = 2;
let b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2