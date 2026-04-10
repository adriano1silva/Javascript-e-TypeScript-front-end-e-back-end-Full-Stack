/*
JavaScript é baseado em prototipos para passar propriedades e métodos de um 
objeto para outro.

Definição de prototipo 
Prototipo é o termo usado para se referir ao que foi criado pela primeira
vez, servindo de modelo ou molde para futuras produçoes.

Todos os objetos tem uma referencia interna para um prototipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia
de prototipos é usada ate o topo (null) ate encontrar (ou não) tal membro
*/

function Pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pesso1.__proto__

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

// instancia 
const pessoa1 = new Pessoa ('Adriano', 'S.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa ('Daniela', 'S.'); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = função construtora

console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2);
console.dir(data);
