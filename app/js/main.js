const header = document.querySelector(".header")
const btnHamburger = document.querySelector("#btnHamburger")

const linkProduct = document.querySelector("#linkProduct")
const linkCompany = document.querySelector("#linkCompany")
const linkConnect = document.querySelector("#linkConnect")

const menuProduct = document.querySelector("#menuProduct")
const menuCompany = document.querySelector("#menuCompany")
const menuConnect = document.querySelector("#menuConnect")

const headerMenus = document.querySelectorAll(".header__menu-link")

const fadeElements = document.querySelectorAll(".has-fade")


btnHamburger.addEventListener('click', () => {
    // Closing Hamburger menu
    if (header.classList.contains("open")) {
        header.classList.remove("open")
        fadeElements.forEach( (element) => {
            element.classList.replace("fade-in", "fade-out")

            // element.classList.add("has-fade")
        })
    } 
    // Opening Hamburger menu
    else {
        header.classList.add("open")
        fadeElements.forEach( (element) => {
            element.classList.remove("has-fade")

            element.classList.remove("fade-out")
            element.classList.add("fade-in")
        })
    }    
})


function addListeners(item) {
    // Opening menu
    if(item.classList.contains("has-fade")) {
        item.classList.remove("has-fade")
    }
    // Closing menu
    else {
        item.classList.add("has-fade")
    }
}



linkProduct.addEventListener('click', function(e) {
    addListeners(menuProduct)
})
linkCompany.addEventListener('click', function(e) {
    addListeners(menuCompany)
})
linkConnect.addEventListener('click', function(e) {
    addListeners(menuConnect)
})

// TODO: update so event listeners are only active when menu is open

document.addEventListener('mouseup', function(event) {
    if(event.target != (menuProduct || menuCompany || menuConnect) ) {
        console.log("clicked outside of area")
        menuProduct.classList.add("has-fade")
        menuCompany.classList.add("has-fade")
        menuConnect.classList.add("has-fade")
    }
})