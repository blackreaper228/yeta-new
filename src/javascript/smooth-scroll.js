document.addEventListener('DOMContentLoaded', () => {
  let isScrolling = false;
  let scrollTarget = window.scrollY;

  function isInsideHorizontalScroll(target) {
    return target.closest && target.closest('.horizontal-scroll');
  }

  function smoothScrollStep() {
    const currentY = window.scrollY;
    const diff = scrollTarget - currentY;
    if (Math.abs(diff) > 1) {
      window.scrollTo(0, currentY + diff * 0.1);
      requestAnimationFrame(smoothScrollStep);
    } else {
      isScrolling = false;
    }
  }

  window.addEventListener(
    'wheel',
    (e) => {
      // Если колесо мыши над .horizontal-scroll или горизонтальный скролл заблокировал страницу —
      // просто отменяем дефолт, но НЕ накапливаем дельты!
      if (
        isInsideHorizontalScroll(e.target) ||
        window.__horizontalScrollLocked
      ) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      scrollTarget += e.deltaY;
      scrollTarget = Math.max(
        0,
        Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight)
      );

      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScrollStep);
      }
    },
    { passive: false }
  );

  // Если пользователь скроллит стрелками или PageUp/PageDown
  window.addEventListener('keydown', (e) => {
    let delta = 0;
    if (e.key === 'ArrowDown') delta = 40;
    if (e.key === 'ArrowUp') delta = -40;
    if (e.key === 'PageDown') delta = window.innerHeight * 0.9;
    if (e.key === 'PageUp') delta = -window.innerHeight * 0.9;
    if (delta !== 0) {
      e.preventDefault();
      scrollTarget += delta;
      scrollTarget = Math.max(
        0,
        Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight)
      );
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScrollStep);
      }
    }
  });
});
