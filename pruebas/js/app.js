// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          event.stopPropagation();
          if (form.checkValidity()) {
              let formData = new FormData(forms[0]);
          //     console.log(formData.get("email"));
          // console.log("Formulario validado");
          fetch("",{
            method: "POST",
            body: formData
          }).then((resp)=>resp.json()).then((data)=>console.log((data))).catch((e)=>console.error((e)));
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
