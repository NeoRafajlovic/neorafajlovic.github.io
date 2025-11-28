const trailer = document.getElementById("trailer");
const body = document.querySelector("body");
const navbar = document.getElementById("navbar");

body.addEventListener("mouseover", function () {
  trailer.style.opacity = 0.75;
});

body.addEventListener("mouseout", function () {
  trailer.style.opacity = 0;
});

window.onmousemove = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;
  trailer.style.transform = `translate(${x}px, ${y}px)`;
};

let mouseIsUp = false;
let cursorIsDown = false;

window.addEventListener("mouseup", (e) => {
  mouseIsUp = true;
  if (cursorIsDown) {
    trailer.style.opacity = 0.75;
    cursorIsDown = false;
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 50) {
    navbar.style.height = "50px";
    navbar.style.opacity = 0.5;
    navbar.style.backgroundColor = "rgb(50, 50, 50)";
  } else {
    navbar.style.height = "150px";
    navbar.style.opacity = 0.75;
    navbar.style.backgroundColor = "rgb(20, 20, 20)";
  }
});

window.onmousedown = (e) => {
  mouseIsUp = false;
  trailer.style.opacity = 0;
  setTimeout(() => {
    if (mouseIsUp) {
      trailer.style.opacity = 0.75;
      cursorIsDown = false;
    } else {
      cursorIsDown = true;
    }
  }, 150);
};
