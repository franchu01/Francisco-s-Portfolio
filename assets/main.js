const nav = document.querySelector(".nav")
let lastScrollY = window.screenY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY){
        nav.classList.add("hide_nav");
    } else {
        nav.classList.remove("hide_nav");
    }
    lastScrollY = window.scrollY;
})

