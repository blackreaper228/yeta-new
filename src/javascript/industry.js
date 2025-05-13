import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

document.addEventListener("DOMContentLoaded", () => {
  const btns = [
    { btn: "indBtn01", box: "ind01" },
    { btn: "indBtn02", box: "ind02" },
    { btn: "indBtn03", box: "ind03" },
    { btn: "indBtn04", box: "ind04" },
    { btn: "indBtn05", box: "ind05" },
  ];

  btns.forEach(({ btn, box }) => {
    const button = document.getElementById(btn);
    if (!button) return;

    button.addEventListener("click", () => {
      btns.forEach(({ box }) => {
        const el = document.getElementById(box);
        if (el) el.classList.remove("IndustryShown");
      });

      const target = document.getElementById(box);
      if (target) target.classList.add("IndustryShown");

      btns.forEach(({ btn }) => {
        const btnEl = document.getElementById(btn);
        if (btnEl) btnEl.classList.remove("Selected");
      });

      button.classList.add("Selected");
    });
  });

  // 🧠 универсальный авто-скролл по хэшу
  const hash = window.location.hash;
  const matched = btns.find(({ box }) => `#${box}` === hash);

  if (matched) {
    const triggerBtn = document.getElementById(matched.btn);
    const targetBox = document.getElementById(matched.box);

    if (triggerBtn) triggerBtn.click();

    const waitUntilVisible = () => {
      const smoother = ScrollSmoother.get();
      const isVisible =
        targetBox && window.getComputedStyle(targetBox).display !== "none";

      if (smoother && isVisible) {
        smoother.scrollTo(`#${matched.box}`, true, "center center");
      } else {
        setTimeout(waitUntilVisible, 50);
      }
    };

    waitUntilVisible();
  }
});
