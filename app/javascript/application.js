// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.select');

  selects.forEach((select) => {
    select.addEventListener('change', ({ target }) => {
      if (target) {
        target.classList.add('filled'); // Adiciona data-filled se uma opção for selecionada
      } else {
        target.classList.remove('filled'); // Remove data-filled se a seleção for limpa
      }
    })
  });
});