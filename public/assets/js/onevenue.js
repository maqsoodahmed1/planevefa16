$(document).ready(function () {
  $(".gallery li:lt(3)").show();
  $(".less").hide();
  var items = 8;
  var shown = 3;
  $(".more").click(function () {
    $(".less").show();
    shown = $(".gallery li:visible").length + 3;
    if (shown < items) {
      $(".gallery li:lt(" + shown + ")").show(300);
    } else {
      $(".gallery li:lt(" + items + ")").show(300);
      s;
      $(".more").hide();
    }
  });
  $(".less").click(function () {
    $(".gallery li").not(":lt(3)").hide(300);
    $(".more").show();
    $(".less").hide();
  });
});
