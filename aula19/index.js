const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Sergio',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);

    },

    incrementaIdade() {
        this.idade++;
    }


    


};

pessoa1.fala();
pessoa1.incrementaIdade()
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();








// function criaPessoa (nome, sobrenome, idade){
//     return { nome, sobrenome, idade };
// };

// const pessoa1 = criaPessoa('Adriano', 'Silva', 23)
// const pessoa2 = criaPessoa('Juliano', 'Cabral', 31)
// const pessoa3 = criaPessoa('Danilo', 'Matos', 22)
// const pessoa4 = criaPessoa('Luiz', 'Silva', 25)
// const pessoa5 = criaPessoa('Kelvin', 'Souza', 20)

// console.log(pessoa1.idade, pessoa4.sobrenome);