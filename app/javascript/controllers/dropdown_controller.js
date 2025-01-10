// app/javascript/controllers/dropdown_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "menu", "item", "hiddenInput"];

  connect() {
    // Aqui podemos adicionar a lógica para inicializar o dropdown, se necessário
  }

  toggle() {
    // Alterna a visibilidade do menu
    const isOpen = this.menuTarget.classList.contains("active");
    this.menuTarget.classList.toggle("active", !isOpen);
    this.buttonTarget.setAttribute("aria-expanded", String(!isOpen));
  }

  select(event) {
    const selectedItem = event.target;
    const selectedValue = selectedItem.getAttribute("data-value");
    const selectedText = selectedItem.textContent;

    // Atualiza o botão com o valor selecionado
    this.buttonTarget.textContent = selectedText;

    // Marca o botão como "preenchido"
    this.buttonTarget.classList.add("filled");

    // Atualiza o valor do input oculto
    this.hiddenInputTarget.value = selectedValue;

    // Marca o item como selecionado
    this.itemTargets.forEach((item) => item.classList.remove("selected"));
    selectedItem.classList.add("selected");

    // Fecha o menu
    this.menuTarget.classList.remove("active");
    this.buttonTarget.setAttribute("aria-expanded", "false");
  }

  closeMenuOutside(event) {
    if (!this.element.contains(event.target)) {
      this.menuTarget.classList.remove("active");
      this.buttonTarget.setAttribute("aria-expanded", "false");
    }
  }
}
