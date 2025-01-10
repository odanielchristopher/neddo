import "@hotwired/turbo-rails";
import "controllers";

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