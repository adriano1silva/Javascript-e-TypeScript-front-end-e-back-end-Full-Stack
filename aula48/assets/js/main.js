const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const listaTarefa = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = ' ';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
    
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    listaTarefa.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
     el.parentElement.remove();
    }
    salvarTarefas();
});

function salvarTarefas() {
    const liTarefas = listaTarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let  listaTarefa of liTarefas) {
        let tarefaTexto = listaTarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log(listaDeTarefas);
    localStorage.setItem('listaTarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const listaTarefa = localStorage.getItem('listaDeTarefas')
    const listaDeTarefas = JSON.parse(listaTarefa)
}
adicionaTarefasSalvas()