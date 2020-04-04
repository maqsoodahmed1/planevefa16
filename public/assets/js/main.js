$(".btn-danger").click(function(event) {
    $(this)
      .parent()
      .parent()
      .remove();
    event.stopPropagation();
  });
  // $(document).ready(function() {
  //   $("btn-primary").click(function() {
  //     alert("asdfdas");
  //     /* $(this).find('span').text(function(_, value){return value=='-'?'+':'-'}); */
  //     $(this)
  //       .nextUntil("btn-primary")
  //       .slideToggle(100, function() {});
  //   });
  // });
  // $(document).ready(function() {
  //   $('[data-toggle="collapse"]').change(function() {
  //     $(this)
  //       .parents()
  //       .next(".hide")
  //       .toggle();
  //   });
  // });
  
  $("detailinfo").live("click", function() {
    $("#detailInfo").html("set your value as you want");
  });