document.addEventListener("DOMContentLoaded", function () {
  // Pegando todos os labels com a classe 'task'
  const labels = document.querySelectorAll('.task');

  labels.forEach(label => {
    label.addEventListener('click', function () {
      const taskId = label.getAttribute('data-task-id');
      const listId = label.getAttribute('data-list-id'); // Pegando o list_id
      let completed = !Boolean(label.getAttribute('data-completed'));
      console.log({ completed });

      fetch(`/lists/${listId}/tasks/${taskId}`, {  // URL ajustada para incluir o list_id
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
        // Atualiza o atributo 'data-completed' para refletir o novo estado
        label.setAttribute('data-completed', data.completed);
      })
      .catch(error => console.error('Erro ao atualizar a tarefa:', error));
    });
  });
});
