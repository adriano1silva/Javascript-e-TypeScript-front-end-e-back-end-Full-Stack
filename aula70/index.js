function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

//p1 = (ENDEREÇOMEMORIA) -> 'Valor'
//p1.ENDEREÇOMEMORIA = {nome: 'Outra coisa'}
//p1 = (NOVOENDERECOMEMORIA)
const p1 = new Pessoa ('Luiz', 'Otavio');
p1.nome = 'Outra coisa';
const p2 = new Pessoa ('Adriano', 'Silva');

console.log(p1);
console.log(p2);