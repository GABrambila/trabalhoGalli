$(document).ready(function() {
    // Elementos do DOM
    const taskForm = $('#taskForm');
    const taskInput = $('#taskInput');
    const taskList = $('#taskList');

    // Função para adicionar uma nova tarefa à lista
    function addTask(description) {
        const li = $('<li>').text(description);
        li.click(function() {
            $(this).toggleClass('completed');
        });
        const removeButton = $('<button>').text('Remover');
        removeButton.click(function() {
            $(this).parent().remove();
        });
        li.append(removeButton);
        taskList.append(li);
        alert('Tarefa adicionada com sucesso! Clique na tarefa para marcá-la como concluída.');
    }

    // Evento de submissão do formulário para adicionar tarefas
    taskForm.submit(function(event) {
        event.preventDefault();
        const taskDescription = taskInput.val().trim();
        if (taskDescription !== '') {
            addTask(taskDescription);
            taskInput.val('');
        } else {
            alert('Por favor, insira uma descrição para a tarefa.');
        }
    });

    // Alerta de boas-vindas com instruções sobre como usar a lista de tarefas
    alert('Bem-vindo à Lista de Tarefas! Para adicionar uma nova tarefa, insira o texto no campo de entrada e clique no botão "Adicionar".');
});
