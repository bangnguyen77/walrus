$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});
$(document).ready(function() {
  $(".lionclick").click(function() {
    $("#lion-showing").slideToggle();
    $("#lion-hidden").slideDown();
  });
});
