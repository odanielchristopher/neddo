document.addEventListener("turbo:load", () => {
  const noticeMessage = document.body.dataset.notice;
  const alertMessage = document.body.dataset.alert;

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };

  // Mostrar toast de sucesso
  if (noticeMessage) {
    toastr.success(noticeMessage);
  }

  // Mostrar toast de erro
  if (alertMessage) {
    toastr.error(alertMessage);
  }
});