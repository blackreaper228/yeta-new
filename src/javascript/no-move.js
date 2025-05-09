let restoreTimeout;

window.addEventListener("scroll", () => {
  const absElement = document.querySelector(".Abs");
  if (!absElement) return;

  clearTimeout(restoreTimeout); // сбрасываем, если скролл продолжается

  if (window.scrollY > 0) {
    absElement.style.opacity = "0";
  } else {
    restoreTimeout = setTimeout(() => {
      absElement.style.opacity = "1";
    }, 500); // задержка перед восстановлением
  }
});
