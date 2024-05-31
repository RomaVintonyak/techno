jQuery(document).ready(function () {
   "use script";
   /*summ all chart item*/
   $("[chart-price]").each(function () {
      var chartPrice = $(this).text();
      var chartCount = $(this).closest(".tovar__opys--price")
         .closest(".tovar__opys").closest(".chart__block--content").find("._chartCount").val();
      var tovarRezult = chartPrice * chartCount;
      var tovarSumm = $(this).closest(".tovar__opys--price")
         .closest(".tovar__opys").closest(".chart__block--content").find("[data-chartsumm]");
      tovarSumm.html(tovarRezult);
   });
   /*all basket summ*/
   function allSumm() {
      var arrList = $('[data-chartsumm]').map(function () {
         var arrTovarSumm = $(this).text();
         var numberTovarSumm = Number(arrTovarSumm);
         return numberTovarSumm;
      }).get();
      function arraySum(array) {
         var summaTovariv = 0;
         for (var i = 0; i < array.length; i++) {
            summaTovariv += array[i];
         }
         $("#basketSumm").html(summaTovariv);
      }
      arraySum(arrList);
   }
   allSumm();
   /*remove product position*/
   $("._removeBlock").on("click", function(){
      if(confirm("Бажаєте видалити дану позицію?")){
         $(this).closest(".chart__block--delete").closest(".chart__block").remove();
         allSumm();
      }else{
         return false;
      }
   });
   /*reload chart page*/
   $("#reloadPage").on("click", function(){
      location.reload(true);
   });
});