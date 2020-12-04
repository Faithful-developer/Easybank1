let hamburgerMenu = document.querySelector('label[for = "res-menu"]')
let menus = document.querySelector('.top_linker')

hamburgerMenu.addEventListener('click', function() {
    menus.classList.toggle('clicked')
})

