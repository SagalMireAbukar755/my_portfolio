
emailjs.init('YOUR_PUBLIC_KEY');
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    this.screenY >= 50 ? header.add('blur-header')
                    : header.classList.remove('blur-header')

}

window.addEventListener('scroll', blurHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contant-message')
    
const sendEmail  = (e) => {
    e.preventDefault()

    emailjs.sendEmail('service_ap3qmgs', 'template_i7t1yma','#contact-form', 'Cb749UqNLkGfv2EGx').then(() =>{
       
        contactMessage.textContent = 'Message sent successfully ✅'

        setTimeout(() => {
            contactForm.textContent = ''
        }, 5000)


        contactForm.reset()

    }, () => {

        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
    
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollup = () =>{
    const scrollup =document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        :scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const section =document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' +sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            section.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr =ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`,{origin: 'botton'})
sr.reveal(`.about__data, .skills__data`,{origin: 'left'})
sr.reveal(`.about_image, .skills__content`,{origin: 'right'})
sr.reveal(`.services__card, .projects__card`,{interval: 100})
