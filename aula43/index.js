// Escreva uma função que recebe um numero e
// retorne o seguinte :
// Numero divisivel por 3 = Fizz
// Numero divisivel por 5 = Buzz
// Numero divisivel por 3 e 5 = FizzBuzz
// Numero NÃO é divisivel por 3 e 5 = retorna o proprio numero
// Checar se o numero é realmente um numero
// Use a função com numeros de 0 a 100

function recebeNum (num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    
    if (num % 3 === 0) return 'Fizz';
    
    if (num % 5 === 0) return 'Buzz';
    
    if (typeof numero !== 'number') return num;
    
    return num;
    
}

for( let i = 0; i <= 100; i++ ){

    console.log(i, recebeNum(i));
}

