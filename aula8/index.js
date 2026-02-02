/*
Adriano Rafael Silva tem 23 anos, pesa 80 kg
tem 1.7 de altura e seu IMC é de 25.925925925925924
Adriano Rafael Silva nasceu em 2001
*/
const nome = 'Adriano Rafael';
const sobrenome = 'Silva';
const idade = 24
const peso = 80
const alturaEmM = 1.70 
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento; // idade - o ano que esta 
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

anoNascimento = (2025 - idade);

//  template strings

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg ');
console.log(`tem ${alturaEmM} De altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} .`);





