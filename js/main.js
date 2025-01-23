(function ($) {
  "use strict";

  const $textarea = $("#get_case_description");
  const $submitButton = $(".hero_form .form_area .submit-btn");

  $textarea.on("input", function () {
    $(this).css("height", "70px"); // Reset height to recalculate
    $(this).css("height", `${this.scrollHeight}px`); // Dynamically adjust height
  });

  //step Form

    // const step1 = $('#step-1');
    // const step2 = $('#step-2');
    // const step3 = $('#step-3');
    // const step4 = $('#step-4');
    
    // const toStep2 = $('#to-step-2');
    // const toStep3 = $('#to-step-3');
    // const toStep4 = $('#to-step-4');

    // // Initially, only step-1 is visible
    // step2.hide();
    // step3.hide();
    // step4.hide();

    // // Show step 2
    // toStep2.on('click', function() {
    //     step1.hide();
    //     step2.show();
    // });

    // // Show step 3
    // toStep3.on('click', function() {
    //     step2.hide();
    //     step3.show();
    // });

    // // Show step 4
    // toStep4.on('click', function() {
    //     step3.hide();
    //     step4.show();
    // });


    const step1 = $('#step-1');
    const step2 = $('#step-2');
    const step3 = $('#step-3');
    const step4 = $('#step-4');

    const toStep2 = $('#to-step-2');
    const toStep3 = $('#to-step-3');
    const toStep4 = $('#to-step-4');
    const goBackBtn = $('#go-back');
    const goBackBtn1 = $('#go-back-1');
    
    const suggestBtns = $('.suggest-btn'); // All suggest buttons
    const caseBtns = $('.case-btn'); // All suggest buttons
    const chatgptInput = $('#chatgptinput'); // The input field in step 1
    const submitBtn = $('.step-1-btn'); // Submit button in step 1

    // Initially, only step-1 is visible
    step2.hide();
    step3.hide();
    step4.hide();

    // Function to show error message under invalid input
    function showErrorMessage(input, message) {
        input.after('<div class="error-message" style="color: red; font-size: 12px; margin-top: 5px;">' + message + '</div>');
    }

    // Function to clear previous error messages
    function clearErrorMessages() {
        $('.error-message').remove();
    }

    // Show step 2 when moving from step 1 to step 2
    submitBtn.on('click', function (e) {
        e.preventDefault();
        clearErrorMessages();

        if (chatgptInput.val().trim() === '') {
            showErrorMessage(chatgptInput, 'Please fill in the case description.');
        } else {
            step1.hide();
            step2.show();
        }
    });

    // Show step 3 when moving from step 2 to step 3
    toStep3.on('click', function (e) {
    e.preventDefault();
    clearErrorMessages();

    let valid = true;

    // Check if all required fields are filled
    $('#firstName, #lastName').each(function () {
        if ($(this).val().trim() === '') {
            showErrorMessage($(this), 'This field is required.');
            valid = false;
        }
    });

    // Check if email is valid
    const emailField = $('#email');
    const emailValue = emailField.val().trim();

    if (emailValue === '') {
        showErrorMessage(emailField, 'Email is required.');
        valid = false;
    } else if (!validateEmail(emailValue)) {
        showErrorMessage(emailField, 'Please enter a valid email address.');
        valid = false;
    }

    if (valid) {
        step2.hide();
        step3.show();
    }
});

// Function to validate email format
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

    // Show step 4 when moving from step 3 to step 4
toStep4.on('click', function (e) {
    e.preventDefault();
    clearErrorMessages();

    const phoneNumber = $('#mobilephone').val().trim();

    // Regular expression to validate US phone numbers (without country code)
    const usPhoneRegex = /^(\+1\s?)?([2-9]\d{2})(\s|-)?\d{3}(\s|-)?\d{4}$/;

    if (phoneNumber === '') {
        showErrorMessage($('#mobilephone'), 'Please provide a phone number.');
    } else if (!usPhoneRegex.test(phoneNumber)) {
        showErrorMessage($('#mobilephone'), 'Please provide a valid US phone number.');
    } else {
        step3.hide();
        step4.show();
    }
});




    // Handle "Go Back" button in step 4
    goBackBtn1.on('click', function (e) {
        e.preventDefault();
        step3.hide();
        step2.show();
    });

    goBackBtn.on('click', function (e) {
        e.preventDefault();
        step4.hide();
        step3.show();
    });

    // Handle suggest button clicks
  suggestBtns.on('click', function () {
      // Get the value from the clicked button's data attribute (or text)
      const suggestedValue = $(this).data('suggestion') || $(this).text();

      // Set the value in the chatgptInput field
      chatgptInput.val(suggestedValue);

      // Clear previous error messages
      clearErrorMessages();

      // Automatically move to step 2
      step1.hide();
      step2.show();
  });

  caseBtns.on('click', function () {
      // Get the value from the clicked button's data attribute (or text)
      const suggestedValue = $(this).text();

      // Set the value in the chatgptInput field
      chatgptInput.val(suggestedValue);

      // Clear previous error messages
      clearErrorMessages();

      // Automatically move to step 2
      step1.hide();
      step2.show();
  });


    // Handle submit of the form
$('#step-4-form').submit(function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    clearErrorMessages(); // Clear previous error messages if any

    // Check reCAPTCHA response
    if (grecaptcha.getResponse() === '') {
        alert('Please complete the reCAPTCHA verification.');
        return; // Stop further execution if reCAPTCHA is not completed
    }

    const phoneNumber = $('#mobilephone').val().trim();

    // Regular expression to validate US phone numbers (without country code)
    const usPhoneRegex = /^(\+1\s?)?([2-9]\d{2})(\s|-)?\d{3}(\s|-)?\d{4}$/;

    if (phoneNumber === '') {
        showErrorMessage($('#mobilephone'), 'Please provide a phone number.');
        return;
    } else if (!usPhoneRegex.test(phoneNumber)) {
        showErrorMessage($('#mobilephone'), 'Please provide a valid US phone number.');
        return;
    }


    const mobilePhoneNumber = itiMobilePhone.getNumber(); // Full number from #mobilephone

    // Validate if the phone numbers are valid



    // Add overlay
    $('body').append(`
        <div class="submission-overlay">
            <div class="spinner"></div>
            <p style="margin-left:10px;color:white">Submitting your information, please wait...</p>
        </div>
    `);

    // Style the overlay (optional, can be moved to CSS)
    $('.submission-overlay').css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        textAlign: 'center'
    });

    $('.spinner').css({
        width: '50px',
        height: '50px',
        border: '5px solid #fff',
        borderTop: '5px solid #007bff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
    });

    // Gather form data
    const formData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#email').val(),
        mobilephone: mobilePhoneNumber,
        chatgptInput: $('#chatgptinput').val(),
    };

    // Use HubSpot's form API to submit data
    $.ajax({
        url: 'https://forms.hubspot.com/uploads/form/v2/47511090/908b6348-26f1-4639-b270-8637fe9b7811', // Correct HubSpot form URL
        method: 'POST',
        data: formData,
        success: function () {
            // Show success message
                // Redirect to thank-you page after the user closes the modal
                window.location.href = '/success';
        },
        error: function () {
            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'There was an issue submitting the form. Please try again.',
                confirmButtonText: 'Retry'
            });
        },
        complete: function () {
            // Remove overlay regardless of success or error
            $('.submission-overlay').remove();
        }
    });
});

// CSS for spinner animation (add to your stylesheet)







  // Toggle menu when hamburger is clicked
  $(".hamburger").on("click", function () {
    $(".menu").toggleClass("active");
  });

  // Close menu when close icon is clicked
  $(".close-btn").on("click", function () {
    $(".menu").removeClass("active");
  });

  // Initialize intlTelInput on the phone input
  // const input = $("#phone")[0];
  // const iti = window.intlTelInput(input, {
  //   initialCountry: "us", // Default country is USA
  //   onlyCountries: ["us"], // Only allow USA phone numbers
  //   formatOnDisplay: true,
  //   autoPlaceholder: "ON",
  //   placeholderNumberType: "MOBILE",
  //   separateDialCode: true,
  //   utilsScript:
  //     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  // });



  
  const mobilePhoneInput = $("#mobilephone")[0];
const itiMobilePhone = window.intlTelInput(mobilePhoneInput, {
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


