const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".side-menu");
let head = document.querySelector("header");


hamburger.addEventListener("click",()=>{
  navMenu.classList.toggle("active");
  head.classList.toggle("active");
})
// On Scroll Function
window.addEventListener("scroll", function () {
    if (window.scrollY >= 20) {
      head.style.backgroundColor = "black";
      head.style.transition = "0.3s";
    }
    else if (this.window.scrollY <= 20) {
      head.style.backgroundColor = "transparent";
    }
  })
