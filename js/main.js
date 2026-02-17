const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

let isOpen = false;

menuBtn.addEventListener("click", () => {
    if (!isOpen) {
        mobileMenu.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
        isOpen = true;
    } else {
        mobileMenu.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
        isOpen = false;
    }
});

// klik overlay untuk close
overlay.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    isOpen = false;
});