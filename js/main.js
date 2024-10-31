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
})(jQuery);
