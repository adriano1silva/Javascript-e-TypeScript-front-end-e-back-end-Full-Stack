// global

function retornaFuncao(nome) {
    return function() {
        return nome;
    }
};

const funcao = retornaFuncao('Adriano');
const funcao2 = retornaFuncao('Silva');

console.dir(funcao, funcao2);
console.log(funcao(),funcao2());
