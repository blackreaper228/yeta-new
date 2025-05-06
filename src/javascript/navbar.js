class Navbar extends HTMLElement {
  connectedCallback() {
    fetch("./navbar.html")
      .then((res) => res.text())
      .then((html) => {
        this.innerHTML = html;
        this.initDropdown(); // вызываем после вставки
      });
  }

  initDropdown() {
    const drop = this.querySelector(".A_BoxDrop");
    const menu = this.querySelector(".A_Menu");

    if (!drop || !menu) return;

    let hideTimeout;

    drop.addEventListener("pointerenter", () => {
      clearTimeout(hideTimeout);
      menu.classList.add("show");
    });

    drop.addEventListener("pointerleave", (e) => {
      if (!drop.contains(e.relatedTarget)) {
        hideTimeout = setTimeout(() => {
          menu.classList.remove("show");
        }, 100);
      }
    });
  }
}

customElements.define("my-navbar", Navbar);
