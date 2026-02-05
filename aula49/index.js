// Declaração de função (function hoisting)
falaOi();


function falaOi(){
    console.log('Oi')

};

// First-class objects (objetos de primeira classe)
// Function express

const souUmDado = function () {
    console.log('Sou um dado')
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo')
    funcao();
};

executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou Falando...')
    }
}

obj.falar();
