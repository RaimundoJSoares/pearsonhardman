//Seleção de elementos
const OpenMobileMenuIcon = document.querySelector("#menu")
const CloseMobileMenuIcon = document.querySelector("#close-menu")
const MobileMenu = document.querySelector("#mobile-navbar")

//Funções


//Eventos
OpenMobileMenuIcon.addEventListener('click', (event) => {
    MobileMenu.classList.add('menu-active')
})
CloseMobileMenuIcon.addEventListener('click', (event) => {
    MobileMenu.classList.remove('menu-active')
})
//opcional
//[OpenMobileMenuIcon, CloseMobileMenuIcon].forEach((element) => {
 // element.addEventListener('click', (event) => {
  //   menu.classList.toggle('menu-active')
 //  })
//})