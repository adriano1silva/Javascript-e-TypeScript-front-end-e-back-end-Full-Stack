// Factory Function (Função Fabrica)
// Construtor function (Função Construtora)
function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        
        // Setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor)
        },


        fala: function (assunto = 'Falando sobre NADA'){
            return `${nome} esta ${assunto}.`;
        },
        
        altura: altura,
        peso: peso,
        
        // Getter
        get imc (){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Adriano', 'Silva', 1.8, 80)
const p2 = criaPessoa('Xavier', 'Augusto', 1.3, 90)
const p3 = criaPessoa('Lucas', 'Daniel', 1.7, 60)
// console.log(p2.fala('falando sobre JS'))
// console.log(p1.imc());
p1.nomeCompleto = 'Jonas Bonfadini Silva'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())
console.log(p3.imc)
