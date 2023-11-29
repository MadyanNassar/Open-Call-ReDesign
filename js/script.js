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
  reveal();
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
