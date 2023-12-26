import imagesLoaded from "imagesLoaded";
import Scene from "./scene.js";

const scene = new Scene("container");

const body = document.body;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Item
class Item {
  constructor(el) {
    this.scroll = scroll;
    this.DOM = { el: el.img };
    this.shouldRollBack = false;
    this.shouldUnRoll = false;
    this.positions = [];

    // set the initial values
    this.getSize();
    this.mesh = scene.createMesh({
      width: this.width,
      height: this.height,
      src: this.src,
      image: this.DOM.el,
      iWidth: this.DOM.el.width,
      iHeight: this.DOM.el.height,
    });
    scene.scene.add(this.mesh);
    this.intersectionRatio;
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.positions.push(entry.boundingClientRect.y);

        this.isVisible = entry.intersectionRatio > 0.0;

        this.shouldRollBack = false;
        this.shouldUnRoll = false;
        this.mesh.visible = this.isVisible;
      });
    }, options);
    this.observer.observe(this.DOM.el);
  }

  getSize() {
    const bounds = this.DOM.el.getBoundingClientRect();
    this.width = bounds.width;
    this.height = bounds.height;
    this.left = bounds.left;
  }
}

// SmoothScroll
export default class SmoothScroll {
  constructor(IMAGES) {
    this.shouldRender = false;
    this.DOM = { main: document.querySelector("main") };

    this.items = [];

    this.createItems(IMAGES);
    this.listenMouse();

    requestAnimationFrame(() => this.render());
  }

  listenMouse() {
    document.addEventListener("mousemove", () => {
      this.shouldRender = true;
    });
  }

  createItems(IMAGES) {
    IMAGES.forEach((image) => {
      if (image.img.classList.contains("js-image")) {
        this.items.push(new Item(image));
      }
    });
  }

  render() {
    this.shouldRender = true;
    scene.render();

    // loop..
    requestAnimationFrame(() => this.render());
  }
}
