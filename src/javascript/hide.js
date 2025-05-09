window.addEventListener("scroll", () => {
  const tabsWrap = document.querySelector(".W_TabsWrapFirst");
  if (!tabsWrap) return;

  if (window.scrollY > 655) {
    tabsWrap.style.top = "-76px";
  } else {
    tabsWrap.style.top = "";
  }
});
