document.addEventListener("turbo:load", () => {
  handleCheckbox();
});

document.addEventListener("turbo:render", () => {
  handleCheckbox();
});

function handleCheckbox() {
  document.querySelectorAll('.checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      var task = this.closest('.task');
      if (this.checked) {
        task.classList.add('checked');
      } else {
        task.classList.remove('checked');
      }
    });
  });
}
