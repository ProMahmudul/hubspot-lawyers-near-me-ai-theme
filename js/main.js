/***************************************************
==================== JS INDEX ======================
****************************************************
01. Preloader
02. Go top Top
03. magnific Popup
04. Counter Activation
05. Text Slider
06. Testimonial Slider
07. Testimonial Slider Two
08. Gallery Slider
09. Team Slider
10. Mobile Menu
11. Register Plugins
12. Header Sticky
13. Service Icon Animation
14. Work Process Image Animation
15. About Animation
16. Choose Animation
17. Button Border
18. Characters Animatoin
19. Words Animatoin
20. Fade Animation

****************************************************/

(function ($) {
  "use strict";

  /////////////////////////////////////////////////////
  // 01. Preloader
  var preloader = document.querySelector(".preloader-wrap");
  var get_body = document.querySelector("body");

  get_body.onload = function () {
    preloader.style.display = "none";
  };
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 02. Go top Top
  let scroll_top = document.getElementById("scroll_top");

  if (scroll_top) {
    window.onscroll = function () { scrollTopFunc() };

    function scrollTopFunc() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scroll_top.classList.add('showed');
      } else {
        scroll_top.classList.remove('showed');
      }
    }

    scroll_top.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 03. magnific Popup
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 03. magnific Popup
  $('.popup-gallery').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    }
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  var line_progress = $('.progressbar-active');

  if (line_progress) {
    $('.progressbar-active').progressBar({
      percentage: true,
      animation: true,
      height: "8",
      barColor: "#1A1A1A",
      shadow: false,
    });
  }
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 04. Counter Activation
  const counter_1 = window.counterUp.default
  const counter_cb = entries => {

    entries.forEach(entry => {
      const el = entry.target
      if (entry.isIntersecting && !el.classList.contains('is-visible')) {
        counter_1(el, {
          duration: 1500,
          delay: 16,
        })
        el.classList.add('is-visible')
      }
    })
  }

  const counter_1_io = new IntersectionObserver(counter_cb, {
    threshold: 1
  })

  const counter_1_els = document.querySelectorAll('.counter-active');
  counter_1_els.forEach((el) => {
    counter_1_io.observe(el)
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 05. Text Slider used
  const text_slider = new Swiper('.text-slider-active', {
    loop: true,
    speed: 7000,
    slidesPerView: 'auto',
    autoplay: {
      delay: 1,
    },
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 06. Testimonial Slider used
  const testimonial_slider = new Swiper('.tsm-slider-active', {
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: '.tsm-btn-prev',
      nextEl: '.tsm-btn-next',
    },
  })
  ////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 07. Testimonial Slider Two used
  const testimonial_slider_2 = new Swiper('.tsm-slider2-active', {
    loop: true,
    speed: 1500,
    navigation: {
      prevEl: '.tsm-btn-prev',
      nextEl: '.tsm-btn-next',
    },
    breakpoints: {
      240: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 130,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 130,
      },
    },
  })
  ////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 07. Testimonial Slider Two used
  const tsm_slider_3 = new Swiper('.tsm-slider3-active', {
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: '.tsm-btn-prev',
      nextEl: '.tsm-btn-next',
    },
  })
  ////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 06. Testimonial Slider used
  const award_slider = new Swiper('.award-slider-active', {
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.award-pagination',
    },
    navigation: {
      prevEl: '.award-btn-prev',
      nextEl: '.award-btn-next',
    },
  })
  ////////////////////////////////////////////////////



  ////////////////////////////////////////////////////
  // 08. Blog Slider used
  var blog_slider = new Swiper('.blog-slider-active', {
    loop: true,
    speed: 1500,
    loopedSlides: 6,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      prevEl: '.blog-btn-prev',
      nextEl: '.blog-btn-next',
    },
    breakpoints: {
      240: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 09. Team Slider used
  var team_slider = new Swiper(".team-slider-active", {
    loop: true,
    speed: 1500,
    loopedSlides: 6,
    spaceBetween: 25,
    pagination: {
      el: '.tm-pagination',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  // Social Media
  var social_wrap = document.querySelectorAll('.team__slider.style-1 .social-wrap');
  var social_btn = document.querySelectorAll('.team__slider.style-1 .social-btn');

  for (let i = 0; i < social_btn.length; i++) {
    social_btn[i].addEventListener('click', function () {
      social_wrap[i].classList.toggle('active');
    });
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 09. Team Slider Two used
  var team_slider2 = new Swiper(".team-slider2-active", {
    loop: true,
    speed: 1500,
    navigation: {
      prevEl: '.tm-btn-prev',
      nextEl: '.tm-btn-next',
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 09. Brand Slider used
  var brand_slider = new Swiper(".brand-slider-active", {
    loop: true,
    speed: 3000,
    slidesPerView: 'auto',
    autoplay: {
      delay: 1,
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 09. Portfolio Slider used
  var pf_slider = new Swiper(".pf-slider-active", {
    loop: true,
    speed: 1500,
    loopedSlides: 6,
    spaceBetween: 7,
    navigation: {
      prevEl: '.pf-btn-prev',
      nextEl: '.pf-btn-next',
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1300: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 09. Portfolio Slider used
  var gallery_slider = new Swiper(".gallery-slider-active", {
    loop: true,
    speed: 1500,
    spaceBetween: 25,
    navigation: {
      prevEl: '.gl-btn-prev',
      nextEl: '.gl-btn-next',
    },
    pagination: {
      el: '.gl-pagination',
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 10. Mobile Menu
  $('.main-menu').meanmenu({
    meanScreenWidth: "1365",
    meanMenuContainer: '.mobile_menu',
    meanMenuCloseSize: '24px',
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 11. Register Plugins
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

  ScrollSmoother.create({
    smooth: 1.3,
    effects: true,
    smoothTouch: 0.1,
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 12. Header Sticky used
  ScrollTrigger.create({
    start: 'top -70',
    duration: 1,
    ease: "power1.out",
    end: 99999,
    toggleClass: { className: 'sticky', targets: 'header' }
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 13. Service Icon Animation
  try {
    let service_area = document.querySelectorAll(".service__area");
    let service_icons = document.querySelectorAll(".service__item.style-1 .icon");

    service_area.forEach((item, i) => {
      let stl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center",
          end: "bottom center",
          markers: false,
          scrub: 1,
        },
      });
      stl.to(service_icons, {
        rotate: "-180deg",
      });
    });
  } catch (error) {
    console.log("Item Not found");
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 14. Image Animation used
  let imgs_anim = document.querySelectorAll(".img-anim");

  imgs_anim.forEach((img) => {
    gsap.set(img, {
      scale: "0.5",
    });

    gsap.to(img, {
      scale: "1",
      scrollTrigger: {
        trigger: img,
        // scrub: 1,
        start: "top 85%",
        end: "bottom center",
      },
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 14. Image Animation  used
  let imgs_rotate = document.querySelectorAll(".img-rotate");

  imgs_rotate.forEach((img) => {
    gsap.set(img, {
      rotate: "0",
    });

    gsap.to(img, {
      rotate: "360",
      scrollTrigger: {
        trigger: img,
        scrub: 1,
        duration: 2,
        start: "top 90%",
        end: "bottom 10%",
      },
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 14. Image Reveal Animation  used
  let imgs_reveal = document.querySelectorAll(".img-reveal");

  imgs_reveal.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset"
      }
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 15. Service Animation used
  const service_item = gsap.utils.toArray(".service__wrapper-2 .service__item");
  const service_imgs = gsap.utils.toArray(".service__wrapper-2 .thumb");
  let about_active_img = 0;

  gsap.set(service_imgs[about_active_img], {
    opacity: 1,
  });

  service_item.forEach((item, i) => {
    item.addEventListener("mouseenter", () => {
      gsap.set(service_imgs[about_active_img], {
        opacity: 0,
      });
      gsap.set(service_imgs[i], {
        opacity: 1,
      });
      about_active_img = i;
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 15. Team Animation used
  const team_member = gsap.utils.toArray(".team__list .member");
  const team_imgs = gsap.utils.toArray(".team__list .thumb");
  let team_active_img = 0;

  gsap.set(team_imgs[team_active_img], {
    opacity: 1,
  });

  team_member.forEach((item, i) => {
    item.addEventListener("mouseenter", () => {
      gsap.set(team_imgs[team_active_img], {
        opacity: 0,
      });
      gsap.set(team_imgs[i], {
        opacity: 1,
      });
      team_active_img = i;
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 16. Choose Animation
  const choose_item = gsap.utils.toArray(".choose__item");
  const choose_imgs = gsap.utils.toArray(".choose__thumb .thumb");
  let choose_active_img = 0;

  gsap.set(choose_imgs[choose_active_img], {
    opacity: 1,
  });

  choose_item.forEach((item, i) => {
    item.addEventListener("mouseenter", () => {
      gsap.set(choose_imgs[choose_active_img], {
        opacity: 0,
      });
      gsap.set(choose_imgs[i], {
        opacity: 1,
      });
      choose_active_img = i;
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 17. Button Border
  const border_btns = document.querySelectorAll(".axency-btn-border");
  border_btns.forEach(btn => {
    const split = new SplitText(btn.querySelector(".text-1"), { type: "chars" });
    const splitb = new SplitText(btn.querySelector(".text-2"), { type: "chars" });
    let isComplete = true;

    const tl = gsap.timeline({
      paused: true,
      onComplete: () => isComplete = true,
    });

    tl.fromTo(
      split.chars,
      {
        y: 0
      },
      {
        duration: 0.5,
        y: -20,
        stagger: 0.05
      }
    );

    tl.fromTo(
      splitb.chars,
      {
        y: 38
      },
      {
        duration: 0.5,
        y: -20,
        stagger: 0.05
      },
      "<"
    );

    btn.addEventListener("mouseenter", () => {
      if (!isComplete) return;
      isComplete = false;
      tl.restart();
    });

    btn.addEventListener("mouseleave", () => {
      if (!isComplete) return;
      isComplete = false;
      tl.restart();
    });

  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 18. Characters Animatoin
  let charsAnimation = gsap.utils.toArray(".axency-chars");
  charsAnimation.forEach(splitChars => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitChars,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: false,
        toggleActions: 'play none none none'
      }
    });

    const textSplitChars = new SplitText(splitChars, { type: "chars" });
    gsap.set(splitChars, { perspective: 400 });
    textSplitChars.split({ type: "chars" })
    tl.from(textSplitChars.chars, {
      duration: 2,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 100,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.1
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 19. Words Animatoin
  let wordsAnimation = gsap.utils.toArray(".axency-word");
  wordsAnimation.forEach(splitWords => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitWords,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: false,
        toggleActions: 'play none none none'
      }
    });

    const textSplitWords = new SplitText(splitWords, { type: "words" });
    gsap.set(splitWords, { perspective: 400 });
    textSplitWords.split({ type: "words" })
    tl.from(textSplitWords.words, {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: 10,
      x: 50,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 20. Fade Animation
  let fade_animation = gsap.utils.toArray(".axency-fade");
  fade_animation.forEach((fade) => {
    const ease_value = fade.getAttribute('data-ease');
    const delay_value = fade.getAttribute('data-delay', 0.5);
    const duration_value = fade.getAttribute('data-duration', 1.5);

    gsap.from(fade, {
      scrollTrigger: {
        trigger: fade,
        start: 'top 90%',
      },
      delay: delay_value,
      opacity: 0,
      y: 50,
      ease: ease_value,
      duration: duration_value,
    });
  });
  /////////////////////////////////////////////////////


})(jQuery);