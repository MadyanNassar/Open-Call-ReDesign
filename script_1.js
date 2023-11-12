const options = {
  preset: "stars",
  background: {
    color: "#fff", // the canvas background color
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.9,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#000",
    },
    links: {
      enable: true, // this enables links between particles
      opacity: 1,
      distance: 200,
    },
    move: {
      enable: false, // this makes particles move
      speed: { min: 1, max: 3 }, // this is the speed of the particles
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
};

(async () => {
  // await loadStarsPreset(tsParticles); // this is required only if you are not using the bundle script
  // tsParticles.load("tsparticles", options);

  await tsParticles.load("tsparticles", options);
})();


// (async () => {
//   await loadTextShape(tsParticles);

//   await tsParticles.load({
//     id: "tsparticles",
//     options: {
//       // particles.shape.type: "text"
//       particles: {
//         shap : {
//           type : "text",
//         }
//       }
//     },
//   });
// })();

function reveal() {
  document.body.style.setProperty(
    "--scroll",
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  );
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