/*
Object.value (valores)
Object.entries (key + value)
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spreed)

// ja vimos 
Object.key (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty  (define uma propriedade)
*/
const produto = {nome: 'Caneca', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'});

caneca.nome = 'Adriano'
caneca.preco = 2.5

console.log(produto);
console.log(caneca);

