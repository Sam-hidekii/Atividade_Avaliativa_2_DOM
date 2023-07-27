const form = document.getElementById('task-form');
        const taskList = document.getElementById('tasks');

        form.onsubmit = function (e) {
            e.preventDefault();
            const inputField = document.getElementById('task-input');
            addTask(inputField.value);
            form.reset();
        };

        function addTask(description) {
            const taskContainer = document.createElement('div');
            const newTask = document.createElement('input');
            const taskLabel = document.createElement('label');
            const taskDescriptionNode = document.createTextNode(description);
            const removeButton = document.createElement('button'); // Novo botão

            newTask.setAttribute('type', 'checkbox');
            newTask.setAttribute('name', description);
            newTask.setAttribute('id', description);

            taskLabel.setAttribute('for', description);
            taskLabel.appendChild(taskDescriptionNode);

            removeButton.textContent = 'Remover'; // Texto do botão de remover
            removeButton.onclick = function () {
                removeTask(taskContainer);
            };

            taskContainer.classList.add('task-item');
            taskContainer.appendChild(newTask);
            taskContainer.appendChild(taskLabel);
            taskContainer.appendChild(removeButton); // Adiciona o botão ao contêiner da tarefa

            taskList.appendChild(taskContainer);
        }

        function removeTask(taskContainer) {
            taskList.removeChild(taskContainer);
        }
		