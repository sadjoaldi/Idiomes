let scrollEvent = 0;
const head = document.querySelector(".head");
const aboutNav = document.querySelector("#aboutNav");

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  if (scrollEvent >= 100) {
    head.style.top = "-150px";
  } else if (window.scrollY > scrollEvent) {
    head.style.top = "-62px";
    aboutNav.style.color = "red";

    aboutNav.style.transition = "0.5s";
  } else if (scrollEvent <= 2000 && window.scrollY < scrollEvent) {
    head.style.top = "0px";
    aboutNav.style.color = "black";
  }

  scrollEvent = window.scrollY;
});
