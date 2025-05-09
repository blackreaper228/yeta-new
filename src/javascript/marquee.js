document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".logos-track");
  if (!track) return;

  // Клонируем логотипы для бесшовной анимации (один раз)
  const logos = Array.from(track.children);
  if (logos.length && logos.length === track.childElementCount) {
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });
  }

  function setMarqueeWidth() {
    // Считаем ширину только первого набора логотипов
    let width = 0;
    for (let i = 0; i < logos.length; i++) {
      width += logos[i].getBoundingClientRect().width;
    }
    track.style.setProperty("--marquee-width", `calc(${width}px + 4.861vw)`);
  }

  setMarqueeWidth();
  window.addEventListener("resize", setMarqueeWidth);

  //   // Пауза при наведении
  //   track.addEventListener("mouseenter", () => {
  //     track.style.animationPlayState = "paused";
  //   });
  //   track.addEventListener("mouseleave", () => {
  //     track.style.animationPlayState = "running";
  //   });
});
