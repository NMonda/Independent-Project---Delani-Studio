$(document).ready(function () {
    $("#design_pic").click(function () {
      $(this).hide();
      $("#design").toggle().show();
    });
    $("#design").click(function () {
      $(this).hide();
      $("#design_pic").toggle().show();
    });
    