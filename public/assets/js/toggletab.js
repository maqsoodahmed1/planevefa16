// $(document).ready(function () {
//   $("#menu ul li a").click(function (ev) {
//     $("#menu ul li").removeClass("selected");
//     $(ev.currentTarget).parent("li").addClass("selected");
//   });
// });

// $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
//   var target = $(e.target).attr("href"); // activated tab
//   alert(target);
// });

function addActiveNavbar(mynavbar) {
  // remove any current active if found in markup:
  mynavbar.find("ul.nav li").removeClass("active");
  var url = window.location; // get location
  // Will work for absolute hrefs, might have to adjust for others
  mynavbar
    .find("ul.nav li")
    .find("a")
    .filter(function () {
      return url.href.indexOf(this.href) != -1;
    })
    .parent()
    .addClass("active");
}
$(function () {
  var mynavbar = $("#navbar"); //cache it
  addActiveNavbar(mynavbar);
  $.get("Navbar.html").done(function (data) {
    mynavbar.html(data);
    // add the active class to current url detected href
    addActiveNavbar(mynavbar);
  });
  // put the click handler for the navigation in place
  mynavbar.on("click", "ul.nav li", function () {
    var myhref = $(this).find("a").attr("href");
    // un-comment for debug   alert("proceed to: " + myhref);
    window.location.href = myhref;
  });
});
