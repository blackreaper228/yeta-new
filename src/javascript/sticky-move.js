const allSections = [
  { id: "section1", position: 0, pair: "p1" },
  { id: "section2", position: 76, pair: "p2" },
  { id: "section2.1", position: 76, pair: "p2" },
  { id: "section3", position: 152, pair: "p3" },
  { id: "section4", position: 228, pair: "p4" },
];

// Фильтруем только реально существующие секции
const sections = allSections.filter((section) =>
  document.getElementById(section.id)
);

const bullet = document.getElementById("A_LogoMovingBullet");

if (sections.length > 0 && bullet) {
  const offset = 64;
  let currentSection = "";

  function getCenterSection() {
    const centerY = window.innerHeight / 2 + offset;
    for (const section of sections) {
      const el = document.getElementById(section.id);
      const rect = el.getBoundingClientRect();
      if (rect.top <= centerY && rect.bottom >= centerY) {
        return section;
      }
    }
    return null;
  }

  function updatePairHighlight(activePairId) {
    for (const section of allSections) {
      const pairEl = document.getElementById(section.pair);
      if (!pairEl) continue;
      if (section.pair === activePairId) {
        pairEl.classList.add("pShown");
      } else {
        pairEl.classList.remove("pShown");
      }
    }
  }

  window.addEventListener("scroll", () => {
    const centerSection = getCenterSection();
    if (centerSection && centerSection.id !== currentSection) {
      currentSection = centerSection.id;
      bullet.style.top = `${centerSection.position}px`;
      updatePairHighlight(centerSection.pair);
    }
  });
}
