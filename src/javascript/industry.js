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
      // Убираем класс у всех боксов
      btns.forEach(({ box }) => {
        const el = document.getElementById(box);
        if (el) el.classList.remove("IndustryShown");
      });
      // Добавляем класс только нужному боксу
      const target = document.getElementById(box);
      if (target) target.classList.add("IndustryShown");

      // Убираем класс selected у всех кнопок
      btns.forEach(({ btn }) => {
        const btnEl = document.getElementById(btn);
        if (btnEl) btnEl.classList.remove("Selected");
      });
      // Добавляем класс selected только нажатой кнопке
      button.classList.add("Selected");
    });
  });
});
