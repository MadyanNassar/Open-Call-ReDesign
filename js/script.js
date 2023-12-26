import imagesLoaded from "imagesLoaded";

const menuBox = document.getElementById("menu-box");
const menuList = document.getElementById("time-menu");
const main = document.querySelector("main");
const desktopHeaderImg = document.getElementById("desktop");
const mobileHeaderImg = document.getElementById("mobile");

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
// To check the scroll position on page load

reveal();

window.addEventListener("scroll", () => {
  setTimeout(function () {
    reveal();
  }, 1000);
  reveal();
});

// timeline menu for mobile

function toggleTheMenu() {
  if (menuBox.style.display == "block") {
    // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  } else {
    // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}

menuList.addEventListener("click", () => toggleTheMenu());
main.addEventListener("click", () => {
  if (menuBox.style.display == "block") {
    menuBox.style.display = "none";
  }
});

gsap.registerPlugin(ScrollTrigger);

const growTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#form-div",
    scrub: 1.5,
    start: "top bottom",
    end: "+=10",
    ease: "power1.out",
  },
});
growTl.to("#form-div", {
  duration: 10,
  scale: 1,
});

window.onresize = function () {
  if (window.innerWidth > window.innerHeight) {
    location.reload();
  }
};

if (window.innerWidth < 900) {
  mobileHeaderImg.classList.add("js-image");
} else {
  desktopHeaderImg.classList.add("js-image");
}

// window.onload = function () {
//   const script = document.createElement("script");
//   // script.type = "module";
//   script.async = true;
//   // script.src = "js-mobile.js";
//   document.body.appendChild(script);
// };

/***********************************/
/********** Preloading **********/
// Preload images
let IMAGES;

let docScroll;
const getPageYScroll = () =>
  (docScroll = window.pageYOffset || document.documentElement.scrollTop);
window.addEventListener("scroll", getPageYScroll);

const preloadImages = new Promise((resolve, reject) => {
  imagesLoaded(document.querySelectorAll("img"), { background: true }, resolve);
});

preloadImages.then((images) => {
  IMAGES = images.images;
});

// And then..
Promise.all([preloadImages]).then(() => {
  document.body.classList.remove("loading");
  document.body.classList.add("loaded");
  getPageYScroll();

  // Initialize the Smooth Scrolling
  if (window.innerWidth > 900) {
    // getPageYScroll();
    import("./js-desktop.js").then((scroll) => {
      console.log("desktop");
      new scroll.default(IMAGES, docScroll);
    });
  } else {
    import("./js-mobile.js").then((scroll) => {
      console.log("mobile");
      new scroll.default(IMAGES);
    });
  }
});
