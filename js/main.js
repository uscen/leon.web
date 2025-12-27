console.log(document.styleSheets[2].cssRules[19]);

// Add Toggle Show Header Menu
let navBtn = document.querySelector(".nav-icon");
let navMenu = document.querySelector(".nav-icon + ul");
navBtn.addEventListener("click", () => navMenu.classList.toggle("show"));

// Add Scroller And Scroll To Top
let scroller = document.querySelector(".scroller");
let scrollToTopBtn = document.querySelector(".scroll-up");
scrollToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

function toggleShowScrollToTop() {
  window.scrollY >= 2000
    ? scrollToTopBtn.classList.add("show")
    : scrollToTopBtn.classList.remove("show");
}

function updateScrollerWidth() {
  let scrollHeight = document.documentElement.scrollHeight;
  let viewHeight = document.documentElement.clientHeight;
  let height = scrollHeight - viewHeight;
  scroller.style.width = `${(window.scrollY / height) * 100}%`;
}

window.addEventListener("scroll", toggleShowScrollToTop);
window.addEventListener("scroll", updateScrollerWidth);
window.addEventListener("resize", updateScrollerWidth);
