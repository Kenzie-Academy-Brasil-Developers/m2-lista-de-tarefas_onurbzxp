const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: 'Importante' },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

document.querySelector('.form__button--add-task').addEventListener('click', function (event) {
  event.preventDefault(); // Impede o formulário de ser submetido
  const taskTitle = document.getElementById('input_title').value;
  let taskType = document.querySelector('.form__input--priority').value;

  taskType = taskType.toUpperCase();

  if (taskTitle && taskType) {
    const newTask = { title: taskTitle, type: taskType };
    tasks.push(newTask);
    renderElements(tasks); // Atualiza a lista de tarefas
  } else {
    alert('Por favor, insira um título e selecione um tipo para a tarefa.');
  }
});

function createTaskItem(task) {


  const li = document.createElement('li');
  li.className = 'task__item';

  const div = document.createElement('div');
  div.className = 'task-info__container';

  const span = document.createElement('span');
  span.className = 'task-type';

  const typeClass = `span-${task.type.toLowerCase()}`;
  span.classList.add(typeClass);

  const p = document.createElement('p');
  p.textContent = task.title;

  const button = document.createElement('button');
  button.className = 'task__button--remove-task';
  button.textContent = '🗑️';
  button.onclick = function () {
    removeTaskFromList(task.title);
  };



  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function removeTaskFromList(title) {
  const index = tasks.findIndex(task => task.title === title);
  if (index > -1) {
    tasks.splice(index, 1);
    renderElements(tasks);
  }
}

function renderElements(tasks) {
  const ul = document.querySelector('.tasks__list');

  ul.innerHTML = '';

  tasks.forEach(task => {
    const taskItem = createTaskItem(task);
    ul.appendChild(taskItem);
  });
}

renderElements(tasks);
