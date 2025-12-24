// Add Scroller
let scroller = document.querySelector(".scroller");
function updateScrollerWidth() {
  let scrollHeight = document.documentElement.scrollHeight;
  let viewHeight = document.documentElement.clientHeight;
  let height = scrollHeight - viewHeight;
  scroller.style.width = `${(window.scrollY / height) * 100}%`;
}
window.addEventListener("scroll", updateScrollerWidth);
window.addEventListener("resize", updateScrollerWidth);

// Add Scroll To Top
