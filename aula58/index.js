// função construtora -> objetos
// função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa (nome, sobrenome) {
    // Privados
    const ID = 123456;
    const metodoInterno = function() {

    };
    
    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Adriano', 'Silva');
const p2 = new Pessoa('Juliano', 'Cabral');

p2.metodo();