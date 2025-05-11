document.addEventListener("DOMContentLoaded", () => {
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

  let currentIndex = 0;

  function updateActive(index) {
    btns.forEach(({ box, scope, numbers, btn }, i) => {
      const el = document.getElementById(box);
      const sc = document.getElementById(scope);
      const num = document.getElementById(numbers);
      const btnEl = document.getElementById(btn);

      const isActive = i === index;

      el?.classList.toggle("MapBoxShown", isActive);
      sc?.classList.toggle("ScopeShown", isActive);
      num?.classList.toggle("CasesNumbersShown", isActive);
      btnEl?.classList.toggle("selected", isActive);
    });

    currentIndex = index;
  }

  // Клики по кнопкам
  btns.forEach(({ btn }, index) => {
    const button = document.getElementById(btn);
    if (!button) return;

    button.addEventListener("click", () => {
      updateActive(index);
    });
  });

  // Кнопка "вперёд"
  document.getElementById("mapGoForward")?.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % btns.length;
    updateActive(nextIndex);
  });

  // Кнопка "назад"
  document.getElementById("mapGoBack")?.addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + btns.length) % btns.length;
    updateActive(prevIndex);
  });

  // Установить первую активную по умолчанию
  updateActive(0);
});
