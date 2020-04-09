// $(function () {
//   $("#datetimepicker12").datetimepicker({
//     inline: true,
//     sideBySide: true,
//   });
//   $(".timepicker.col-md-6").hide();
//   //   $(".timepicker").hide();
//   //   $(".timepicker-picker").hide();
// });

$(function () {
  $(".datetimepicker").datetimepicker({
    inline: true,
    sideBySide: true,
    locale: "en",
    format: "DD.MM.YYYY",
  });
});
