document.addEventListener("turbo:load", () => {
  applyTimeMask();
  setDefaultTime();
});

function applyTimeMask() {
  const timeInputs = document.querySelectorAll('.input[data-type="hour"]');

  timeInputs.forEach(input => {
    const mask = new Inputmask("99:99", {
      showMaskOnHover: false,
      showMaskOnFocus: true
    });
    mask.mask(input);
  });
}

function setDefaultTime() {
  const timeInputs = document.querySelectorAll('.input[data-type="hour"]');

  timeInputs.forEach(input => {
    if (!input.value) { // Apenas define o valor se o campo estiver vazio
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      input.value = `${hours}:${minutes}`;
    }
  });
}