const inputTarefa = document.querySelector('.input-tarefa');
const btntarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// função para criar a lista
function criali (){
    const li = document.createElement('li');
    return li;
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

// botão apagar 
function criaBotaoapagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar item';
    botaoApagar.setAttribute('class','apagar');
    li.appendChild(botaoApagar);
}

// cria tarefa da lista
function criaTarefa(textoInput){
    const li  = criali();
    li.innerText= textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoapagar(li);
    salvartarefa();
}

// função do botão tarefa
btntarefa.addEventListener('click', function(){
    if (! inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

// botão apaga tarefa
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvartarefa();
    }
});

// Não deixa apagar tarefa
function salvartarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listadeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar item', '').trim();
        listadeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listadeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listadeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listadeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();














