let open_menu = document.querySelector("#open-menu")
let navbar = document.querySelector("#navbar")
let triangule = document.querySelector("#triangule")

function config() {

    if (document.documentElement.clientWidth <= 768) {
        navbar.classList.toggle("hide")
        triangule.classList.toggle("hide")

        open_menu.addEventListener("click", () => {
            navbar.classList.toggle("hide")
            triangule.classList.toggle("hide")
        })
    }

    else {
        navbar.classList.remove("hide")
        triangule.classList.remove("hide")
    }
}