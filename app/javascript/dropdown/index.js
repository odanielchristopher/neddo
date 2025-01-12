document.addEventListener("turbo:load", () => {
  initializeDropdowns();
});

function initializeDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(".dropdown-menu");
    const button = dropdown.querySelector(".dropdown-button");
    const items = dropdown.querySelectorAll(".dropdown-item");
    const hiddenInput = dropdown.querySelector(".input");

    // Delegação de evento para o clique no botão
    dropdown.addEventListener("click", (e) => {
      const isButtonClick = e.target === button || button.contains(e.target);
      
      if (isButtonClick) {
        const isOpen = menu.classList.contains("active");
        menu.classList.toggle("active", !isOpen);
        button.setAttribute("aria-expanded", String(!isOpen));
      }
    });

    // Selecionar um item
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        // Atualizar o texto do botão
        button.textContent = item.textContent;
        button.classList.add("filled");
        // Atualizar o valor do input oculto
        hiddenInput.value = item.getAttribute("data-value");
        // Adicionar estilo ao item selecionado
        items.forEach((i) => i.classList.remove("selected"));
        item.classList.add("selected");
        // Fechar o menu
        menu.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
        e.stopPropagation(); // Impede que o evento se propague
      });
    });

    // Fechar o dropdown ao clicar fora
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        menu.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
}
