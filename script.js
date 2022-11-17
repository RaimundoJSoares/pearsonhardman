//1----- Seleção de elementos
const OpenMobileMenuIcon = document.querySelector("#menu")
const CloseMobileMenuIcon = document.querySelector("#close-menu")
const MobileMenu = document.querySelector("#mobile-navbar")

//selecionar todos os links "a"
const desktopLinks = document.querySelectorAll("#navbar a")
const mobileLinks = document.querySelectorAll("#mobile-navbar a")

//juntar todos os links em um array, usando o spread operator
const allLinks = [...desktopLinks, ...mobileLinks]

const slides = document.querySelectorAll('.banner')
const dots = document.querySelectorAll('.dot')
let slideIndex = 0;

//2--- Funções
//criar função smooth scroll
function smoothScroll(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })

    //fechar o menu mobile
    setTimeout(() => {
        if(MobileMenu.classList.contains("menu-active")) {
            MobileMenu.classList.remove("menu-active")
        }
   
    }, 500)
}

function ShowSlides(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('active')
        dots[i].classList.remove('active')
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');

    setTimeout(ShowSlides, 5000);
}


//3--- Eventos
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


//percorrer todos os links e adicionar evento de scroll
allLinks.map((link) => {
    link.addEventListener('click', smoothScroll)
})


const btnScrollToTop = document.querySelector(".acessibilityScroolTop");

btnScrollToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

ShowSlides()