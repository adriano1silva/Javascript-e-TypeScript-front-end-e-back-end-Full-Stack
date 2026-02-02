const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.getElementById('container');

for (let el of elementos) {
    let tag = document.createElement(el.tag);
    tag.innerHTML = el.texto;
    container.appendChild(tag); 
}      