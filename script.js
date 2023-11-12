$(function () {
  function sumSection() {
    return $(".content").height();
  }
  function setDimensionBar() {
    $(".bar").css({
      // height: ($(window).height() / sumSection()) * 100 + "%",
      // height: (100 - $(this).top) + "%",
    });
  }
  function setSection() {
    $.each($("section"), function (i, element) {
      $(element).css({
        "min-height": $(window).height() / 2,
      });
    });
  }

  // $(".node").hover(function (e) {
  //   $(this)
  //   $(this).css(
  //     "background-color",
  //     e.type === "mouseenter" ? "red" : "transparent"
  //   );
  // });

  function addBehaviours() {
    let sections = $("section");
    $.each($(".node"), function (i, element) {
      $(element).on("click", function (e) {
        e.preventDefault();
        let scroll = $(sections[i]).offset().top;
        $("html, body").animate(
          {
            scrollTop: scroll,
          },
          500
        );
        // console.log(scroll);
        // console.log($(".bar").offset().top);
        //  console.log(window.scrollY / sumSection() * 100)
      });
    });
  }

  function arrangeNodes() {
    $(".node").remove();
    $.each($("section"), function (i, element) {
      let name = $(element).data("name");
      let node = $("<li class='node'><span>" + name + "</span></li>");
      $(".timeline").append(node);

      $(node).css({
        top:
          ($(".timeline").height() / $(".container").height()) *
          $(element).offset().top,
      });
    });
    addBehaviours();
  }

  $(window).on("scroll", function () {
    let top = (window.scrollY / $(".container").height()) * 100;

    var scroll = $(window).scrollTop();
    var timeline = $(".timeline");
    var container = $(".container");
    $(".bar").css({
      top: top + "%",
      height: 100 - top + "%",
      // height: (100 - (100 - top)) + "%",
    });

    if (scroll >= container.offset().top - 10) {
      timeline.addClass("fixed");
    } else {
      timeline.removeClass("fixed");
    }
  });

  $(window).on("resize", function () {
    setSection();
    arrangeNodes();
    setDimensionBar();
  });

  setTimeout(function () {
    setSection();
    arrangeNodes();
    setDimensionBar();
  }, 200);
});

$(document).ready(function () {
  $(this).scrollTop(0);
});
