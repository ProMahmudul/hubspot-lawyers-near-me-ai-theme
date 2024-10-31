(function ($) {
  "use strict";

  // Toggle menu when hamburger is clicked
  $(".hamburger").on("click", function () {
    $(".menu").toggleClass("active");
  });

  // Close menu when close icon is clicked
  $(".close-btn").on("click", function () {
    $(".menu").removeClass("active");
  });

  // Initialize intlTelInput on the phone input
  const input = $("#phone")[0];
  const iti = window.intlTelInput(input, {
    initialCountry: "us", // Default country is USA
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  // Rotating text animation
  (function () {
    var words = [
        "Wrongful Death",
        "Slip And Fall",
        "Medical Malpractice",
        "Mass Tort",
      ],
      i = 0;

    setInterval(function () {
      var $text = $("#rotatingText");
      // Rotate out the current text
      $text.addClass("rotate-out").one("transitionend", function () {
        // Update the text after rotate-out completes
        $(this).text(words[(i = (i + 1) % words.length)]);
        // Reset rotate classes for next animation
        $(this)
          .removeClass("rotate-out")
          .addClass("rotate-in")
          .one("transitionend", function () {
            $(this).removeClass("rotate-in");
          });
      });
    }, 3000); // Change word every 3 seconds
  })();

  $('.case_description_form').on('submit', function(event){
    event.preventDefault();
    $('#chatModal').modal('show');
    const formData = $(this).serializeArray();
    const fields = formData.map(field => ({
      name: field.name,
      value: field.value
    }));
    $('#case_description').val(fields[0].value)

    // Reset the form fields after submission
    $('.case_description_form').trigger("reset");
  });

  $('.chat-form').on('submit', function(event) {
    event.preventDefault();

    const formData = $(this).serializeArray();
    const fields = formData.map(field => ({
      name: field.name,
      value: field.value
    }));

    $.ajax({
      url: 'https://api.hsforms.com/submissions/v3/integration/submit/47511090/1c7ae950-e4d0-45f8-96c0-21afe0c880e1',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ fields: fields }),
      success: function(response) {
        // Close the modal
        $('#chatModal').modal('hide');
        // Reset the form fields after submission
        $('.chat-form').trigger("reset");
        // Show the success modal
        $('#thankModal').modal('show');        
      },
      error: function(xhr, status, error) {
        console.error("Error:", status, error);
        alert("Form submission failed. Please try again.");
      }
    });
  });

})(jQuery);
