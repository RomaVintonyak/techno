/*preloader script*/
$(window).on("load", function () {
  var preloader = $("#loader");
  var timeDelay = 1000;
  setTimeout(function () {
    $("body").removeAttr("style");
    preloader.addClass("loader--done");
  }, timeDelay);
});
jQuery(document).ready(function () {
  "use script";
  //constant
  const headerHeight = $("#header").height();
  /*burger button*/
  var burgerBtn = $(".burger__btn");
  $(window).on("load resize", function () {
    if ($(window).width() <= 991) {
      burgerBtn.on("click", function () {
        $(this).toggleClass("burger__btn--active");
      });
    } else {
      burgerBtn.removeClass("burger__btn--active");
    }
  });
  /*intro slider*/
  var introSlider = $("#introSlider");
  introSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: true,
    draggable: false,
  });
  /*product slider*/
  var productSlider = $("#productSlider");
  productSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: true,
    draggable: false,
  });
  /*Custom navigation button product slider*/
  $(".slider__button--prev").on("click", function () {
    productSlider.slick("slickPrev");
  });
  $(".slider__button--next").on("click", function () {
    productSlider.slick("slickNext");
  });
  /*proposition slider*/
  var propSlider = $("#propositionSlider");
  propSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    swipe: true,
    touchMove: false,
    focusOnSelect: false,
    fade: false,
    draggable: true,
  });
  $(".proposition__button--prev").on("click", function () {
    propSlider.slick("slickPrev");
  });
  $(".proposition__button--next").on("click", function () {
    propSlider.slick("slickNext");
  });
  /*popular slider*/
  var popularSlider = $("#popularSlider");
  popularSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    swipe: true,
    touchMove: false,
    focusOnSelect: false,
    fade: false,
    draggable: true,
  });
  $(".popular__button--prev").on("click", function () {
    popularSlider.slick("slickPrev");
  });
  $(".popular__button--next").on("click", function () {
    popularSlider.slick("slickNext");
  });
  /*back to top script*/
  var backTopBtn = $(".back__top");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > (headerHeight)) {
      backTopBtn.css({
        bottom: 0
      });
    } else {
      backTopBtn.removeAttr("style");
    }
  });
  backTopBtn.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 1000, "swing");
  });
  /*fixed nav menu*/
  var navMenu = $("#navPanel");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= (headerHeight)) {
      navMenu.css({
        position: "fixed",
        top: 0,
        left: 0
      });
    } else {
      navMenu.removeAttr("style");
    }
  });
  /*back to cat menu*/
  var catBtn = $("#catBtn");
  $(window).on("load resize", function () {
    if ($(window).width() >= 991) {
      catBtn.on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: headerHeight
        }, 1000, "swing");
      });
    }
  });
  /*progres line*/
  $(window).on("scroll resize", function () {
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrolTop = $(window).scrollTop();
    var progress = scrolTop / (docHeight - windowHeight);
    $("#progressBlock").css({
      width: ((100 * progress) | 0) + "%"
    });
  });
  /*page about slider*/
  var aboutSliderPage = $("#aboutSlider");
  aboutSliderPage.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: true,
    draggable: false,
  });
  /*active style to label in contact form*/
  var nameField = $("#name");
  nameField.blur(function () {
    var nameFieldData = $(this).val();
    if (nameFieldData.length >= 1) {
      $("#lebelName").css({
        "font-size": "1.2rem",
        "top": "-2.7rem"
      });
    } else {
      $("#lebelName").removeAttr("style");
    }
  });
  var emailField = $("#email");
  emailField.blur(function () {
    var emailFieldData = $(this).val();
    if (emailFieldData.length >= 1) {
      $("#labelEmail").css({
        "font-size": "1.2rem",
        "top": "-2.7rem"
      });
    } else {
      $("#labelEmail").removeAttr("style");
    }
  });
  var phoneField = $("#phone");
  phoneField.blur(function () {
    var phoneFieldData = $(this).val();
    if (phoneFieldData.length >= 1) {
      $("#labelPhone").css({
        "font-size": "1.2rem",
        "top": "-2.7rem"
      });
    } else {
      $("#labelPhone").removeAttr("style");
    }
  });
  var messageField = $("#message");
  messageField.blur(function () {
    var messageFieldData = $(this).val();
    if (messageFieldData.length >= 1) {
      $("#labelMessage").css({
        "font-size": "1.2rem",
        "top": "-3.5rem"
      });
    } else {
      $("#labelMessage").removeAttr("style");
    }
  });
  /*contact page form validation*/
  var mailBtn = $("#sendMail");
  var ajax_url = $("#contactForm").attr('data-action');
  mailBtn.on("click", function () {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim(),
      intRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    var email = $("#email").val().trim(),
      emailReg = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    var message = $("#message").val().trim();
    if (name.length < 3) {
      var nameError = $("#errorName").text();
      $("#errorText").text(nameError);
      return false;
    } else if (!emailReg.test(email) || email == '') {
      var mailError = $("#errorEmail").text();
      $("#errorText").text(mailError);
      return false;
    } else if ((phone.length < 6) || (!intRegex.test(phone))) {
      var phoneError = $("#errorPhone").text();
      $("#errorText").text(phoneError);
      return false;
    } else if (message.length < 10) {
      var messageError = $("#errorMessage").text();
      $("#errorText").text(messageError);
      return false;
    }
    $("#errorText").text("");
    $.ajax({
      url: ajax_url,
      type: 'POST',
      cache: false,
      data: {
        action: 'sendForm',
        'name': name,
        'phone': phone,
        'email': email,
        'message': message
      },
      dataType: 'html',
      beforeSend: function () {
        mailBtn.prop("disabled", true);
      },
      success: function (data) {
        if (!data)
          alert("Щось не так ... Спробуйте ще раз!");
        else
          $("#contactForm").trigger("reset");
        alert(data);
        mailBtn.prop("disabled", false);
      }
    });
  });
});