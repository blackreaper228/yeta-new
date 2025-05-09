document.addEventListener("DOMContentLoaded", () => {
  // Массив кнопок и соответствующих элементов
  const btns = [
    {
      btn: "MapBtn01",
      box: "MapBox01",
      scope: "T_Scope01",
      numbers: "CasesNumbers01",
    },
    {
      btn: "MapBtn02",
      box: "MapBox02",
      scope: "T_Scope02",
      numbers: "CasesNumbers02",
    },
    {
      btn: "MapBtn03",
      box: "MapBox03",
      scope: "T_Scope03",
      numbers: "CasesNumbers03",
    },
  ];

  btns.forEach(({ btn, box, scope, numbers }) => {
    const button = document.getElementById(btn);
    if (!button) return;

    button.addEventListener("click", () => {
      // Убираем активные классы у всех боксов, скоупов и номеров
      btns.forEach(({ box, scope, numbers, btn }) => {
        const el = document.getElementById(box);
        const sc = document.getElementById(scope);
        const num = document.getElementById(numbers);
        const btnEl = document.getElementById(btn);

        if (el) el.classList.remove("MapBoxShown");
        if (sc) sc.classList.remove("ScopeShown");
        if (num) num.classList.remove("CasesNumbersShown");
        if (btnEl) btnEl.classList.remove("selected");
      });

      // Добавляем нужные классы активным элементам
      const targetBox = document.getElementById(box);
      const targetScope = document.getElementById(scope);
      const targetNumbers = document.getElementById(numbers);

      if (targetBox) targetBox.classList.add("MapBoxShown");
      if (targetScope) targetScope.classList.add("ScopeShown");
      if (targetNumbers) targetNumbers.classList.add("CasesNumbersShown");
      button.classList.add("selected");
    });
  });
});
