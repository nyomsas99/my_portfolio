// toggler navbar
const hamburger = document.querySelector(".navbar-toggler");
const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

hamburger.addEventListener("click", function () {
  stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// my social media toggle
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});

const abt = document.querySelector(".abt");

abt.addEventListener("mouseenter", () => {
  abt.style.backgroundColor = "rgb(100, 50, 120)";
});
