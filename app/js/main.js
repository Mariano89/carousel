(function() {
  "use strict";
  var slides = document.querySelectorAll(".hero-item"),
    arrows = document.querySelectorAll(".lnr"),
    carouselCount = 0;

  arrows[0].addEventListener("click", function(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount -= 100;
    slider();
  });
  arrows[1].addEventListener("click", sliderEvent);

  function sliderEvent(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount += 100;
    slider();
  }

  function slider() {
    switch (carouselCount) {
      case -100:
        carouselCount = 0;
        break;
      case 300:
        carouselCount = 0;
        break;
      default:
        break;
    }
    console.log(carouselCount);
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].setAttribute(
        "style",
        "transform:translateX(-" + carouselCount + "%)"
      );
    }
  }
})();
