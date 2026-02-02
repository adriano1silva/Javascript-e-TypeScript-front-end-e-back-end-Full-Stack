const verdadeira = true;

// let tem escopo de bloco {... bloco}
// var so tem escopo de função

let nome = 'Adriano'; // criando
var nome2 = 'Rafael'; //criando

if (verdadeira){
    let nome = 'Adriano'; // criando
    var nome2 = 'Rogerio'; //redeclarando

    if (verdadeira){
        var nome2 = 'Ronaldo'; //redeclarando
        let nome = 'Outra coisa';

    }

}
console.log(nome,nome2);
