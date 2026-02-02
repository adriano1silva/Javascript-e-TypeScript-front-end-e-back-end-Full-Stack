const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para proxima iteração
// Break sai do laço 

let i = 0

while (i < numeros.length){
    
    let numero = numeros[i];

    if (numero === 2 || numero === 5){
        i++;
        continue;
    }
    
    if(numero === 7){
        i++;
        break;
    }
    console.log(numero);
    i++;
}