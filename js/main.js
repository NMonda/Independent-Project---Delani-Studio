$(document).ready(function () {
    $("#design_pic").click(function () {
      $(this).hide();
      $("#design").toggle().show();
    });
    $("#design").click(function () {
      $(this).hide();
      $("#design_pic").toggle().show();
    });
    $("#development_pic").click(function () {
        $(this).hide();
        $("#development").toggle().show();
      });
      $("#development").click(function () {
        $(this).hide();
        $("#development_pic").toggle().show();
      });
      $("#product_pic").click(function () {
        $(this).hide();
        $("#product").toggle().show();
      });
      $("#product").click(function () {
        $(this).hide();
        $("#product_pic").toggle().show();
      });
      $("#work1").hover(
        function () {
          $("#project1").show().css({
            background: "rgba(0, 0, 0, 0.6)",
            height: "73%",
            width: "75%",
            "font-size": "121%",
            color: "white",
          });
          $(this).css({ cursor: "pointer" });
          if ($(window).width() < 850) {
            $("#project1").css({
              "font-size": "71%",
              "border-width": "2.5px",
              width: "60%",
            });
          }
        },