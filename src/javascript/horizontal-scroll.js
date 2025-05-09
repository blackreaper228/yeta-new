document.addEventListener("DOMContentLoaded", () => {
  const scrollEls = document.querySelectorAll(".horizontal-scroll");
  const EDGE_UNLOCK_DELAY = 300;

  if (scrollEls.length === 0) {
    console.log("Элементы horizontal-scroll не найдены на странице");
    return;
  }

  scrollEls.forEach((scrollEl) => {
    let edgeUnlockTimeout = null;
    let edgeLocked = false;
    let isDragging = false;
    let startX;
    let scrollLeft;

    // === Скролл колёсиком по горизонтали ===
    scrollEl.addEventListener("mouseenter", () => {
      scrollEl.addEventListener("wheel", horizontalScrollHandler, {
        passive: false,
      });
    });

    scrollEl.addEventListener("mouseleave", () => {
      scrollEl.removeEventListener("wheel", horizontalScrollHandler);
      isDragging = false;
      scrollEl.classList.remove("dragging");
      clearTimeout(edgeUnlockTimeout);
      edgeLocked = false;
      window.__horizontalScrollLocked = false;
    });

    function horizontalScrollHandler(e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const prevScrollLeft = scrollEl.scrollLeft;
        scrollEl.scrollLeft += e.deltaY;

        if (scrollEl.scrollLeft !== prevScrollLeft) {
          e.preventDefault();
          clearTimeout(edgeUnlockTimeout);
          edgeLocked = false;
          window.__horizontalScrollLocked = true;
        } else {
          if (!edgeLocked) {
            edgeLocked = true;
            edgeUnlockTimeout = setTimeout(() => {
              edgeLocked = false;
              window.__horizontalScrollLocked = false;
            }, EDGE_UNLOCK_DELAY);
            e.preventDefault();
            window.__horizontalScrollLocked = true;
          } else {
            window.__horizontalScrollLocked = false;
          }
        }
      }
    }

    // === Drag-перетаскивание ===
    scrollEl.addEventListener("mousedown", (e) => {
      isDragging = true;
      scrollEl.classList.add("dragging");
      startX = e.pageX - scrollEl.offsetLeft;
      scrollLeft = scrollEl.scrollLeft;
    });

    scrollEl.addEventListener("mouseup", () => {
      isDragging = false;
      scrollEl.classList.remove("dragging");
    });

    scrollEl.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollEl.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollEl.scrollLeft = scrollLeft - walk;
    });

    // === Кнопки и стрелки ===
    const slides = scrollEl.querySelectorAll(".slide");
    const arrNext = document.querySelector("#ArrNext");
    const arrPrev = document.querySelector("#ArrPrev");

    if (slides.length === 0) return;

    let currentIndex = 0;

    const scrollToSlide = (index) => {
      if (index < 0) index = 0;
      if (index >= slides.length) {
        scrollEl.scrollTo({ left: scrollEl.scrollWidth, behavior: "smooth" });
        return;
      }

      const containerLeft = scrollEl.getBoundingClientRect().left;
      const targetLeft = slides[index].getBoundingClientRect().left;
      const offset = targetLeft - containerLeft;

      scrollEl.scrollBy({ left: offset, behavior: "smooth" });
      currentIndex = index;
    };

    const goNext = () => {
      if (currentIndex < slides.length - 1) {
        scrollToSlide(currentIndex + 1);
      } else {
        scrollEl.scrollTo({ left: scrollEl.scrollWidth, behavior: "smooth" });
      }
    };

    const goPrev = () => {
      if (currentIndex > 0) {
        scrollToSlide(currentIndex - 1);
      } else {
        scrollEl.scrollTo({ left: 0, behavior: "smooth" });
      }
    };

    arrNext?.addEventListener("click", goNext);
    arrPrev?.addEventListener("click", goPrev);

    // === Клавиатура ===
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    });
  });
});
