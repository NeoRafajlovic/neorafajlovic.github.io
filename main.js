const trailer = document.getElementById("trailer");
const body = document.querySelector("body");

body.addEventListener("mouseover", function () {
  trailer.style.opacity = 1;
});

body.addEventListener("mouseout", function () {
  trailer.style.opacity = 0;
});

window.onmousemove = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;
  trailer.style.transform = `translate(${x}px, ${y}px)`;
};

window.onclick = (e) => {
  trailer.style.opacity = 0.3;
  setTimeout(() => {
    trailer.style.opacity = 1;
  }, 150);
};
