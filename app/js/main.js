const header = document.querySelector(".header")
const btnHamburger = document.querySelector("#btnHamburger")

const linkProduct = document.querySelector("#linkProduct")
const linkCompany = document.querySelector("#linkCompany")
const linkConnect = document.querySelector("#linkConnect")

const menuProduct = document.querySelector("#menuProduct")
const menuCompany = document.querySelector("#menuCompany")
const menuConnect = document.querySelector("#menuConnect")

const headerMenus = document.querySelectorAll(".header__menu")



btnHamburger.addEventListener('click', () => {
    // closing menu
    if (header.classList.contains("open")) {
        header.classList.remove("open")
        console.log("Closing")
    } 
    // Opening menu
    else {
        header.classList.add("open")
        console.log("Opening")
    }    
})


function addListeners(item) {
    if(item.classList.contains("has-fade")) {
        item.classList.remove("has-fade")
    }
    // closing menu
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


// linkProduct.addEventListener('click', function(e) {
//     addListeners(menuProduct)
//     // console.log("listening")
//     // // opening menu
//     // if (menuProduct.classList.contains("has-fade")) {
//     //     menuProduct.classList.remove("has-fade")
//     // }
//     // // closing menu
//     // else {
//     //     menuProduct.classList.add("has-fade")
//     // }
// })

// linkCompany.addEventListener('click', function(e) {
//     console.log("listening")
//     // opening menu
//     if (menuCompany.classList.contains("has-fade")) {
//         menuCompany.classList.remove("has-fade")
//     }
//     // closing menu
//     else {
//         menuCompany.classList.add("has-fade")
//     }
// })

// linkConnect.addEventListener('click', function(e) {
//     console.log("listening")
//     // opening menu
//     if (menuConnect.classList.contains("has-fade")) {
//         menuConnect.classList.remove("has-fade")
//     }
//     // closing menu
//     else {
//         menuConnect.classList.add("has-fade")
//     }
// })



document.addEventListener('mouseup', function(event) {
    // if(event.target != menuProduct && event.target.parentNode != menuProduct) {
    if(event.target != (menuProduct || menuCompany || menuConnect) ) {
        console.log("clicked outside of area")

        menuProduct.classList.add("has-fade")
        menuCompany.classList.add("has-fade")
        menuConnect.classList.add("has-fade")
    }
})