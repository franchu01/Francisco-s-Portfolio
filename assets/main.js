const nav = document.querySelector(".nav")
let lastScrollY = window.screenY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY && window.scrollY > 934){
        nav.classList.add("hide_nav");
    } else {
        nav.classList.remove("hide_nav");
    }
    lastScrollY = window.scrollY;
    console.log(window.scrollY)
})

