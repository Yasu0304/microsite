let aiNav = document.querySelector("#aiNav");
let aiNavLink = document.querySelectorAll("#aiNav ul li a");

// function init() {
//   aiNavLink.forEach((a) => {
//     a.style.color = "#0077ac";
//   });
// }
// init();

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY > 300) {
    aiNav.style.display = "flex";
    aiNav.style.backgroundColor = "#00b0c1";
    aiNavLink.forEach((a) => {
      a.style.color = "#ffffff";
    });
  } else {
    aiNav.style.display = "none";
  }
});
