// Crie um arquivo JS separado ou adicione ao seu script
document.addEventListener("turbo:load", () => {
  const modal = document.getElementById("confirmationModal");
  const deleteButtons = document.querySelectorAll(".delete-btn");

  let listIdToDelete = null;

  // Função para exibir o modal
  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      listIdToDelete = this.getAttribute("data-list-id"); // Armazena o ID da lista
      modal.classList.add("show"); // Mostra o modal
    });
  });

  // Função para esconder o modal
  const hideModal = () => {
    modal.classList.remove("show");
  };

  // Configuração dos botões de ação do modal
  document.querySelector(".btn-secondary")?.addEventListener("click", hideModal); // Botão "Cancelar"
  
  // Botão "Excluir"
  document.querySelector(".btn-danger")?.addEventListener("click", () => {
    if (listIdToDelete) {
      // Envia a requisição AJAX para excluir a lista
      fetch(`/lists/${listIdToDelete}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
        }
      })
      .then(response => {
        if (response.ok) {
          hideModal(); // Fecha o modal
          window.location.href = '/';
        } else {
          alert("Erro ao excluir a lista.");
        }
      });
    }
  });
});
