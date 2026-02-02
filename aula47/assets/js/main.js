const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function formatarTempo(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'})
};

function iniciarRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = formatarTempo(segundos);
    }, 1000);
};

iniciar.addEventListener('click', function(event){
    clearInterval(timer); 
    relogio.classList.remove('pausado');
    iniciarRelogio();
});

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearTimeout(timer);
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
});