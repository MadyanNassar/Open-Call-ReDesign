$(function () {
  var main = $(".container");
  var t = main.offset().top;

  $(".draggable").draggable({
    containment: "timeline",
    axis: "y",
    cursor: "pointer",
    revert: false,
  });
  $("ul, li").disableSelection();

  function sumSection() {
    return $(".content").height();
  }
  function setDimensionBar() {
    $(".bar").css({
      height: ($(window).height() / sumSection()) * 100 + "%",
    });
  }
  function setSection() {
    $.each($("section"), function (i, element) {
      $(element).css({
        "min-height": $(window).height(),
      });
    });
  }

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
          ($(".timeline").height() / $(document).height()) *
          $(element).offset().top,
      });
    });
    addBehaviours();
  }

  $(window).on("scroll", function () {
    let top = (window.scrollY / sumSection()) * 100;
    $(".bar").css({
      top: top + "%",
    });

    // console.log($(".bar").offset().top);
  });

  $(".draggable").on("drag", function () {
    // window.scrollTo(0, $(".bar").offset().top) ;

    // $('html, body').animate({
    //   scrollTop: scroll },
    // 500);

    console.log($(".bar").offset().top);
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var timeline = $(".timeline");
    console.log(scroll + "--");
    var container = $(".container");
    console.log(timeline.offset().top);
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
