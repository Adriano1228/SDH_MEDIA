const menuToggle = document.querySelector(".menu-toggle");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const menuBackdrop = document.querySelector(".mobile-menu-backdrop");
const menuClose = document.querySelector(".mobile-sidebar-close");

function setMenuOpen(isOpen, returnFocus = true) {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    mobileSidebar.setAttribute("aria-hidden", String(!isOpen));
    mobileSidebar.classList.toggle("is-open", isOpen);
    menuBackdrop.hidden = !isOpen;
    document.body.classList.toggle("menu-open", isOpen);

    if (isOpen) {
        menuClose.focus();
    } else if (returnFocus) {
        menuToggle.focus();
    }
}

menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

menuClose.addEventListener("click", () => setMenuOpen(false));
menuBackdrop.addEventListener("click", () => setMenuOpen(false));

mobileSidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
    }
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 769px)").matches && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false, false);
    }
});
