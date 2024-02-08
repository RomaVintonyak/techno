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


});