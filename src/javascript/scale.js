const el = document.querySelector(".AbsoluteCarousel");

function updateWidth() {
  if (!el) return; // защита от ошибки, если элемент не найден
  const left = el.getBoundingClientRect().left;
  el.style.width = `calc(100vw - ${left}px)`;
}

updateWidth();
window.addEventListener("resize", updateWidth);
