function handleToggle() {
    const menu = document.querySelector(".menu-launcher");
    const icon = document.querySelector(".mobile-menu-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}