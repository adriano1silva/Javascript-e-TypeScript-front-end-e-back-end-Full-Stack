//defineProperty - defineProperties
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;
    
    Object.defineProperty(this,'estoque', {
        enumerable: true, // mostra a chave
        value: estoque,  // valor
        writable: false, // pode alterar o valor ou nao
        configurable: false, // configuravel
    });

    Object.defineProperties(this, {
        nome: {
        enumerable: true, // mostra a chave
        value: nome,  // valor
        writable: true, // pode alterar o valor ou nao
        configurable: true, // configuravel
        },
        preco: {
        enumerable: true, // mostra a chave
        value: preco,  // valor
        writable: true, // pode alterar o valor ou nao
        configurable: true, // configuravel
        },
    })
}

const p1 = new Produto ('Camiseta', '20', '3');
console.log(p1);