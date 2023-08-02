
document.addEventListener("DOMContentLoaded", function() {
    var formElement = document.getElementById("formfillier");
  
    if (formElement) {
      formElement.addEventListener("submit", handleFormSubmit);
    }
  });
  
  function handleFormSubmit() {
    gtag('event', 'form_has_beenfilled', {
      'event_category': 'Form Interaction',
      'event_label': 'Form Submitted'
    });
  }