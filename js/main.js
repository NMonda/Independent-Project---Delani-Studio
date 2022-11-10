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
        function () {
            $("#project1").hide();
            $(this).css({ opacity: "1" });
          }
        );
      
        $("#work2").hover(
          function () {
            $("#project2").show().css({
              background: "rgba(0, 0, 0, 0.6)",
              height: "73%",
              width: "75%",
              "font-size": "121%",
              color: "white",
            });
            $(this).css({ cursor: "pointer" });
      if ($(window).width() < 850) {
        $("#project2").css({
          "font-size": "71%",
          "border-width": "2.5px",
          width: "60%",
        });
      }
    },
    function () {
      $("#project2").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#work3").hover(
    function () {
      $("#project3").show().css({
        background: "rgba(0, 0, 0, 0.6)",
        height: "73%",
        width: "75%",
        "font-size": "121%",
        color: "white",
      });
      $(this).css({ cursor: "pointer" });
      if ($(window).width() < 850) {
        $("#project3").css({
          "font-size": "71%",
          "border-width": "2.5px",
          width: "60%",
        });
      }
    },
    function () {
      $("#project3").hide();
      $(this).css({ opacity: "1" });
    }
  );
  $("#work4").hover(
    function () {
      $("#project4").show().css({
        background: "rgba(0, 0, 0, 0.6)",
        height: "73%",
        width: "75%",
        "font-size": "121%",
        color: "white",
      });
      $(this).css({ cursor: "pointer" });

      if ($(window).width() < 850) {
        $("#project4").css({
          "font-size": "71%",
          "border-width": "2.5px",
          width: "60%",
        });
      }
    },
    function () {
      $("#project4").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#work5").hover(
    function () {
      $("#project5").show().css({
        background: "rgba(0, 0, 0, 0.6)",
        height: "73%",
        width: "75%",
        "font-size": "121%",
        color: "white",
      });
      $(this).css({ cursor: "pointer" });

      if ($(window).width() < 850) {
        $("#project5").css({
          "font-size": "71%",
          "border-width": "2.5px",
          width: "60%",
        });
      }
    },
    function () {
      $("#project5").hide();

      $(this).css({ opacity: "1" });
    }
  );

  $("#work6").hover(
    function () {
      $("#project6").show().css({
        background: "rgba(0, 0, 0, 0.6)",
        height: "73%",
        width: "75%",
        "font-size": "121%",
        color: "white",
      });

      $(this).css({ cursor: "pointer" });

      if ($(window).width() < 850) {
        $("#project6").css({
          "font-size": "71%",
          "border-width": "2.5px",
          width: "60%",
        });
      }
    },
    function () {
      $("#project6").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#work7").hover(
    function () {
      $("#project7").show().css({
        background: "rgba(0, 0, 0, 0.6)",
        height: "73%",
        width: "75%",
        "font-size": "121%",
        color: "white",
      });
      $(this).css({ cursor: "pointer" });

      if ($(window).width() < 850) {
        $("#project7").css({
          "font-size": "71%",
          "border-width": "2.5px",
          width: "60%",
        });
      }
    },
    function () {
      $("#project7").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#work8").hover(
    function () {
      $("#project8").show().css({
        background: "rgba(0, 0, 0, 0.6)",
        height: "73%",
        width: "75%",
        "font-size": "121%",
        color: "white",
      });
      $(this).css({ cursor: "pointer" });

      if ($(window).width() < 850) {
        $("#project8").css({
          "font-size": "71%",
          "border-width": "2.5px",
          width: "60%",
        });
      }
    },

    function () {
      $("#project8").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#the_form").submit(function () {
    alert("Hello!,We have received your message. Thank you .");
  });

  $("#footeryear").html(new Date().getFullYear());

  
});