var menu = document.getElementById("menu")
var nav = document.getElementById("nav")
var close_nav = document.getElementById("close")

// when open
menu.addEventListener("click", () => {
    nav.style.left = "0px"
    nav.style.transform = "skew(0deg)"
})

// when close
close_nav.addEventListener("click", () => {
    nav.style.left = "1600px"
    nav.style.transform = "skew(15deg)"
})