document.addEventListener("turbo:load", () => {
  initializeDropdowns();
});

function initializeDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(".dropdown-menu");
    const items = dropdown.querySelectorAll(".dropdown-item");
    const hiddenInput = dropdown.querySelector(".input");

    // Abrir e fechar o menu com delegação de eventos
    dropdown.addEventListener("click", (e) => {
      const button = e.target.closest(".dropdown-button"); // Verifica o botão clicado
      if (button) {
        const isOpen = menu.classList.contains("active");
        menu.classList.toggle("active", !isOpen);
        button.setAttribute("aria-expanded", String(!isOpen));
      }
    });

    // Selecionar um item
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        // Atualizar o texto do botão
        const button = dropdown.querySelector(".dropdown-button");
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
        dropdown.querySelector(".dropdown-button").setAttribute("aria-expanded", "false");
      }
    });
  });
};