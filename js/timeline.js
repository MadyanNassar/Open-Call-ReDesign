$(function () {
  function sumSection() {
    return $(".container").height();
  }

  // function setSection() {
  //   $.each($("section"), function (i, element) {
  //     $(element).css({
  //       "min-height": $(window).height() / 2,
  //     });
  //   });
  // }

  function setDimensionBar() {
    $(".bar").css({
      // height: ($(window).height() / sumSection()) * 100 + "%",
      // height: (100 - $(this).top) + "%",
    });
  }

  function addBehaviours() {
    let sections = $("section");
    $.each($(".node"), function (i, element) {
      $(element).on("click", function (e) {
        e.preventDefault();
        let scroll = $(sections[i]).offset().top;
        console.log(scroll);
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
        // top: i * 11.1111111111 + "%",
        top:
          ($(".timeline").height() / $(".body-container").height()) *
          $(element).offset().top,
      });
    });
    addBehaviours();
  }

  $(window).on("resize", function () {
    // setSection();
    arrangeNodes();
    setDimensionBar();
  });

  setTimeout(function () {
    // setSection();
    arrangeNodes();
    setDimensionBar();
  }, 200);
});

$(document).ready(function () {
  $(this).scrollTop(0);
});

$(window).on("scroll", function () {
  let top = (window.scrollY / $(".body-container").height()) * 100;

  var scroll = $(window).scrollTop();
  var timeline = $(".timeline");
  var container = $(".container");
  var formDiv = $(".form-div");
  $(".bar").css({
    top: top + "%",
    height: 100 - top + "%",
  });

  if (scroll >= container.offset().top - 15) {
    // && scroll + $(window).height() <= formDiv.offset().top
    timeline.addClass("fixed");
  } else {
    timeline.removeClass("fixed");
  }
});

var images = document.getElementsByClassName("js-image");

$(images).each(function (index) {
  $(this).on("mousemove", function (event) {
    this.style.webkitMaskPositionX = event.offsetX - 100 + "px";
    this.style.webkitMaskPositionY = event.offsetY + 200 + "px";
  });
});

// function mouseMove (event)
// {
//   console.log(event.target)
//     var ele = document.getElementById ('test');

//     ele.style.webkitMaskPositionX = event.offsetX - 100 + "px";
//     ele.style.webkitMaskPositionY = event.offsetY + 200 + "px";
// }
