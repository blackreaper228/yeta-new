function waitForElement(selector, callback) {
  const el = document.querySelector(selector);
  if (el) {
    callback(el);
  } else {
    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        callback(el);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

waitForElement("#ContactUsBtn", (contactBtn) => {
  const modal = document.querySelector(".ContactModal");
  const closeIcon = document.querySelector(".A_ModalCloseIcon");

  if (!modal || !closeIcon) return;

  contactBtn.addEventListener("click", () => {
    modal.classList.add("is-active");
  });

  closeIcon.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
});
