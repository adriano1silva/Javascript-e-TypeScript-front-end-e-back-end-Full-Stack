//defineProperty - defineProperties -> Getters e Setters
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque; 
    Object.defineProperty(this,'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor != 'number'){
                throw new TypeError('Nao é um numero valido');
        
            }
            estoquePrivado = valor;        
        }
    });

}

function criaProduto (nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }

}

// const p1 = new Produto ('Camiseta', '20', '3');
// p1.estoque = 'a' ;
// console.log(p1.estoque);
const produtoNovo = criaProduto('Carro')
console.log(produtoNovo);
console.log(produtoNovo.nome);