// IIFE -> Immediately invoked function expression 

(function(idade, peso, altura) {
    
    const sobrenome = 'Silva'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome () {
        console.log(criaNome('Adriano'))
    }

    falaNome()
    console.log(idade, peso, altura);

}) (25, 85, 1.71);
