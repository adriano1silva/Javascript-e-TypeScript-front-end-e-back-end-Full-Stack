const pessoa = {
    nome: 'Adriano',
    sobrenome: 'Silva',
    idade: 25,
    endereco: {
        rua: 'Sao Paulo',
        numero: 320
    }
};

// atribuição via desestruturação 

const {
    endereco: { rua: r, numero},
    endereco 
} = pessoa;

console.log(r, numero, endereco);