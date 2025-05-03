document.addEventListener('DOMContentLoaded', () => {
  const scrollEls = document.querySelectorAll('.horizontal-scroll');
  const EDGE_UNLOCK_DELAY = 300; // мс

  if (scrollEls.length === 0) {
    console.log('Элементы horizontal-scroll не найдены на странице');
    return;
  }

  scrollEls.forEach((scrollEl) => {
    let edgeUnlockTimeout = null;
    let edgeLocked = false;

    scrollEl.addEventListener('mouseenter', () => {
      scrollEl.addEventListener('wheel', horizontalScrollHandler, {
        passive: false,
      });
    });

    scrollEl.addEventListener('mouseleave', () => {
      scrollEl.removeEventListener('wheel', horizontalScrollHandler);
      isDragging = false;
      scrollEl.classList.remove('dragging');
      clearTimeout(edgeUnlockTimeout);
      edgeLocked = false;
      window.__horizontalScrollLocked = false; // <--- добавлено
    });

    function horizontalScrollHandler(e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const prevScrollLeft = scrollEl.scrollLeft;
        scrollEl.scrollLeft += e.deltaY;

        // ... внутри horizontalScrollHandler ...
        if (scrollEl.scrollLeft !== prevScrollLeft) {
          e.preventDefault();
          clearTimeout(edgeUnlockTimeout);
          edgeLocked = false;
          window.__horizontalScrollLocked = true; // <--- добавлено
        } else {
          if (!edgeLocked) {
            edgeLocked = true;
            edgeUnlockTimeout = setTimeout(() => {
              edgeLocked = false;
              window.__horizontalScrollLocked = false; // <--- добавлено
            }, EDGE_UNLOCK_DELAY);
            e.preventDefault();
            window.__horizontalScrollLocked = true; // <--- добавлено
          } else {
            // Если таймер уже прошёл — не блокируем, страница скроллится
            window.__horizontalScrollLocked = false; // <--- добавлено
          }
        }
      }
    }

    let isDragging = false;
    let startX;
    let scrollLeft;

    scrollEl.addEventListener('mousedown', (e) => {
      isDragging = true;
      scrollEl.classList.add('dragging');
      startX = e.pageX - scrollEl.offsetLeft;
      scrollLeft = scrollEl.scrollLeft;
    });

    scrollEl.addEventListener('mouseup', () => {
      isDragging = false;
      scrollEl.classList.remove('dragging');
    });

    scrollEl.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollEl.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollEl.scrollLeft = scrollLeft - walk;
    });
  });
});
