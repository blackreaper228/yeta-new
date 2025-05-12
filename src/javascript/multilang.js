document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.querySelector(".MultiLangBtn");
  const selected = document.querySelector(".SelectedBtn");

  if (!langBtn || !selected) return;

  langBtn.addEventListener("click", () => {
    selected.style.display = "flex";
  });
});
