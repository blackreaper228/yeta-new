document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".logos-track");
  const inner = track.querySelector(".track-inner");

  if (!track || !inner) return;

  // Клонируем один раз
  const clone = inner.cloneNode(true);
  track.appendChild(clone);

  function updateDistanceAndDuration() {
    const fullWidth = inner.getBoundingClientRect().width;

    // Учитываем gap между двумя track-inner
    const trackStyles = getComputedStyle(track);
    const trackGap = parseFloat(trackStyles.gap || 0);

    const scrollDistance = fullWidth + trackGap;
    track.style.setProperty("--scroll-distance", `-${scrollDistance}px`);

    // Автоматическая длительность на основе расстояния
    const speed = 100; // px/sec — можно подстроить
    const duration = scrollDistance / speed;
    track.style.setProperty("--duration", `${duration}s`);
  }

  updateDistanceAndDuration();
  window.addEventListener("resize", updateDistanceAndDuration);
});
