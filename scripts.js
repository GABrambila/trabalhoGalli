$(document).ready(function() {
    // Selecionando os elementos do DOM
    const taskInput = $('#taskInput');
    const taskDescription = $('#taskDescription');
    const taskList = $('#taskList');
    const taskForm = $('#taskForm');

    // Função para adicionar uma nova tarefa
    function addTask(description, taskDesc) {
        // Criando um novo item de lista com titulo e descricao
        const li = $('<li>').html(`<strong>${description}</strong><br>${taskDesc}`);
       
        // Adicionando um evento de clique ao item da lista para marcar status da tarefa
        li.click(function() {
            $(this).toggleClass('completed');
            const removeButton = $(this).find('.remove');
            if ($(this).hasClass('completed')) {
                removeButton.text('Concluída').css('background-color', '#28a745');
            } else {
                removeButton.text('Remover').css('background-color', '#dc3545');
            }
        });
        
        // Cria um botão de remoção e adiciona um evento de click para apagar da lista
        const removeButton = $('<button class="remove">').text('Remover');
        removeButton.click(function() {
            $(this).parent().remove();
        });
        
        // Adiciona o botão de apagar da lista
        li.append(removeButton);
        
        // Adiciona a tarefa na lista
        taskList.append(li);
        
        alert('Tarefa adicionada com sucesso! Clique na tarefa para marcá-la como concluída.');
    }

    // Faz o envio da tarefa/descricao 
    taskForm.submit(function(event) {
        event.preventDefault();
        // captura os valor dos input
        const taskDescriptionVal = taskDescription.val().trim();
        const taskInputVal = taskInput.val().trim();
        // confere se os input nao tao vazio
        if (taskInputVal !== '') {
            // Função para adicionar a tarefa
            addTask(taskInputVal, taskDescriptionVal);
            // Limpando os campos depois que adiciona a tarefa
            taskInput.val('');
            taskDescription.val('');
        } else {
        
            alert('Por favor, insira uma descrição para a tarefa.');
        }
    });

    //Início
    alert('Bem-vindo à Lista de Tarefas! Para adicionar uma nova tarefa, insira o texto no campo de entrada e clique no botão "Adicionar".');
});
