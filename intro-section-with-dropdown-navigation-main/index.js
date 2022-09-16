const open_menu = document.getElementById("open_menu")
const navbar = document.getElementById("navbar")
const close_menu = document.getElementById("close_menu")

const item_1 = document.getElementById("item_1")
const item_2 = document.getElementById("item_2")

const list_1 = document.getElementById("list_1")
const list_2 = document.getElementById("list_2")

const background = document.getElementById("background")

window.addEventListener("load", () => {
    init()
})

function init(){
    list_1.classList.add("hide")
    list_2.classList.add("hide")
    background.classList.add("hide")

    open_menu.addEventListener("click", () => {
        navbar.style.opacity = 1
        navbar.style.pointerEvents = "all"
        background.classList.toggle("hide")
    })
    
    close_menu.addEventListener("click", () => {
        navbar.style.opacity = 0
        navbar.style.pointerEvents = "none"
        background.classList.toggle("hide")
    })
    
    item_1.addEventListener("click", () => {
        list_1.classList.toggle("hide")
    })
    
    item_2.addEventListener("click", () => {
        list_2.classList.toggle("hide")
    })
}