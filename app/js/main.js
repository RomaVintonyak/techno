jQuery(document).ready(function () {
  "use script";
  /*burger button*/
  var wWidth = $(window).width();
  var burgerBtn = $(".burger__btn");
  if (wWidth <= 980) {
    burgerBtn.on("click", function () {
      $(this).toggleClass("burger__btn--active");
    });
  }
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
  $(".slider__button--prev").on("click", function(){
    productSlider.slick("slickPrev");
  });
  $(".slider__button--next").on("click", function() {
    productSlider.slick("slickNext");
  });
});