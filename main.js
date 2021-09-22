const navBtn = document.getElementById('nav__btn')
const navBtnUp = document.getElementById('nav__btn_up')
const navBtnMiddle = document.getElementById('nav__btn_middle')
const navBtnBottom = document.getElementById('nav__btn_bottom')
const navMenu = document.getElementById('nav__menu')

function showMenu( navBtn, navMenu) {
    if(navBtn && navMenu) {
        navBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show__menu')
            navBtnUp.classList.toggle('toggle_up')
            navBtnMiddle.classList.toggle('toggle_middle')
            navBtnBottom.classList.toggle('toggle_bottom')
        })
    }
}
showMenu(navBtn, navMenu)


const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav__menu')
    const navBtnUp = document.getElementById('nav__btn_up')
    const navBtnMiddle = document.getElementById('nav__btn_middle')
    const navBtnBottom = document.getElementById('nav__btn_bottom')

    navMenu.classList.remove('show__menu')
    navBtnUp.classList.toggle('toggle_up')
    navBtnMiddle.classList.toggle('toggle_middle')
    navBtnBottom.classList.toggle('toggle_bottom')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const Sun = document.getElementById('sun')
const Moon = document.getElementById('moon')
const themeBtn = document.getElementById('theme__button')
let lightTheme = 'light__theme'
let hideIcon = 'hide'
let selectedTheme = localStorage.getItem('selected-theme')
let selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => (document.body.classList.contains(lightTheme)) ? 'light__theme' : null
const getCurrentIcon = () => (document.body.classList.contains(lightTheme)) ? null : 'hide'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'light__theme' ? 'add' : 'remove'](lightTheme)
    Moon.classList[selectedTheme === 'light__theme' ? 'add' : 'remove'](hideIcon)
    Sun.classList[selectedTheme === 'light__theme' ? 'remove' : 'add'](hideIcon)
}
themeBtn.addEventListener('click', () => {
    Moon.classList.toggle(hideIcon)
    Sun.classList.toggle(hideIcon)
    document.body.classList.toggle(lightTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)