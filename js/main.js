(function ($) {
  "use strict";

  const $textarea = $("#get_case_description");
  const $submitButton = $(".hero_form .form_area .submit-btn");

  $textarea.on("input", function () {
    $(this).css("height", "70px"); // Reset height to recalculate
    $(this).css("height", `${this.scrollHeight}px`); // Dynamically adjust height
  });





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
    onlyCountries: ["us"], // Only allow USA phone numbers
    formatOnDisplay: true,
    autoPlaceholder: "ON",
    placeholderNumberType: "MOBILE",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  // Rotating text animation
  // (function () {
  //   var words = [
  //       "Wrongful Death",
  //       "Slip And Fall",
  //       "Medical Malpractice",
  //       "Mass Tort",
  //     ],
  //     i = 0;

  //   setInterval(function () {
  //     var $text = $("#rotatingText");
  //     // Rotate out the current text
  //     $text.addClass("rotate-out").one("transitionend", function () {
  //       // Update the text after rotate-out completes
  //       $(this).text(words[(i = (i + 1) % words.length)]);
  //       // Reset rotate classes for next animation
  //       $(this)
  //         .removeClass("rotate-out")
  //         .addClass("rotate-in")
  //         .one("transitionend", function () {
  //           $(this).removeClass("rotate-in");
  //         });
  //     });
  //   }, 3000); // Change word every 3 seconds
  // })();

  $(".case_description_form").on("submit", function (event) {
    event.preventDefault();
    $("#chatModal").modal("show");
    const formData = $(this).serializeArray();
    const fields = formData.map((field) => ({
      name: field.name,
      value: field.value,
    }));
    $("#case_description").val(fields[0].value);

    // Reset the form fields after submission
    $(".case_description_form").trigger("reset");
  });

  $(".chat-form").on("submit", async function (event) {
    event.preventDefault();

    const dialCode = iti.getSelectedCountryData().dialCode;
    const phoneNumber = $("#phone").val();
    const fullPhoneNumber = `+${dialCode}${phoneNumber}`;

    const formData = $(this).serializeArray();

    // Check Honeypot Field
    const honeypot = formData.find((field) => field.name === "hiddenField");
    if (honeypot && honeypot.value) {
      alert("Bot detected! Submission blocked.");
      return;
    }

    const recaptchaResponse = formData.find(
      (field) => field.name === "g-recaptcha-response",
    ).value;
    if (!recaptchaResponse) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const updatedFields = formData.map((field) => {
      if (field.name === "phone") {
        return { name: field.name, value: fullPhoneNumber };
      }
      return field;
    });

    try {
      // Verify reCAPTCHA on the server
      // const verifyResponse = await $.ajax({
      //   url: "https://lawyersnearme.heracliusus.com/verify_recaptcha.php",
      //   method: "POST",
      //   data: { "g-recaptcha-response": recaptchaResponse },
      //   contentType: "application/x-www-form-urlencoded",
      // });

      // const verifyData = JSON.parse(verifyResponse);
      // if (!verifyData.success) {
      //   alert(
      //     "reCAPTCHA verification failed: " +
      //       (verifyData.message || "Unknown error"),
      //   );
      //   return;
      // }

      await $.ajax({
        url: "https://lawyersnearme.heracliusus.com/verify_recaptcha.php",
        method: "POST",
        data: { "g-recaptcha-response": recaptchaResponse },
        contentType: "application/x-www-form-urlencoded",
        success: function (response) {
          console.log("Response:", response);
        },
        error: function (xhr, status, error) {
          console.error("Error:", status, error);
          alert(
            "reCAPTCHA verification failed: " +
              (error || "Unknown error"),
          );
          return;
        },
      });

      $.ajax({
        url: "https://api.hsforms.com/submissions/v3/integration/submit/47511090/1c7ae950-e4d0-45f8-96c0-21afe0c880e1",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({ fields: updatedFields }),
        success: function (response) {
          // Close the modal
          $("#chatModal").modal("hide");
          // Reset the form fields after submission
          $(".chat-form").trigger("reset");
          // Show the success modal
          $("#thankModal").modal("show");
        },
        error: function (xhr, status, error) {
          console.error("Error:", status, error);
          alert("Form submission failed. Please try again.");
        },
      });
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
      alert("Failed to verify reCAPTCHA. Please try again.");
    }
  });

  $(".contact-form").on("submit", function (event) {
    event.preventDefault();
    const dialCode = iti.getSelectedCountryData().dialCode;
    const phoneNumber = $("#phone").val();
    const fullPhoneNumber = `+${dialCode}${phoneNumber}`;

    const formData = $(this).serializeArray();

    const updatedFields = formData.map((field) => {
      if (field.name === "phone") {
        return { name: field.name, value: fullPhoneNumber };
      }
      return field;
    });

    $.ajax({
      url: "https://api.hsforms.com/submissions/v3/integration/submit/47511090/9fa3afd3-7f9a-4a7b-97be-705dda5e69d3",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ fields: updatedFields }),
      success: function (response) {
        // Reset the form fields after submission
        $(".contact-form").trigger("reset");
        // Show the success modal
        $(".contact.alert-success").removeClass("d-none");
        console.log("contact success", response);
      },
      error: function (xhr, status, error) {
        console.error("Error:", status, error);
        alert("Form submission failed. Please try again.");
      },
    });
  });



//  const input = document.querySelector('.chatgpt-input'); // Select by class

//   input.addEventListener('input', function () {
//     // Reset height to enable shrinking when deleting text
//     input.style.height = 'auto';
    
//     // Set new height based on scroll height
//     input.style.height = input.scrollHeight + 'px';
//   });









})(jQuery);
