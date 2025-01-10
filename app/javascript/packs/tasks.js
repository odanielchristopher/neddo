function addTaskListeners() {
  const labels = document.querySelectorAll('.task');

  labels.forEach(label => {
    label.removeEventListener('click', handleTaskClick); // Remove listener duplicado
    label.addEventListener('click', handleTaskClick); // Adiciona novamente
  });
}

function handleTaskClick(event) {
  if (event.target.tagName === 'INPUT') {
    return;
  }

  const label = event.currentTarget;
  const taskId = label.getAttribute('data-task-id');
  const listId = label.getAttribute('data-list-id');
  let completed = label.getAttribute('data-completed') === 'true' ? false : true;

  fetch(`/lists/${listId}/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      task: { completed }
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.completed) {
      label.classList.add('completed');
    } else {
      label.classList.remove('completed');
    }
    
    label.setAttribute('data-completed', data.completed);
  })
  .catch(error => console.error('Erro ao atualizar a tarefa:', error));
}

document.addEventListener("turbo:load", addTaskListeners);
