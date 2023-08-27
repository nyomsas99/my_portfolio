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
// form
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Pesan anda terkirim!");
    });
  });
});
// scrol; button
const rootElement = document.querySelector(":root");
function disableScroll() {
  scrollTop = window.pageYOffset || document.elementFromPoint.scrollTop;
  scrollLeft = window.pageXOffset || document.elementFromPoint.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(screenTop, screenLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {
    rootElement.style.scrollBehavior = "smooth";
    localStorage.setItem("opened", "true");
  };
}
if (!localStorage.getItem("opened")) {
  disableScroll();
}
