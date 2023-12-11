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
  }, 200);
  reveal();
});

// timeline menu for mobile
var menuBox = document.getElementById("menu-box");
var menuList = document.getElementById("time-menu");
var main = document.querySelector("main");

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
