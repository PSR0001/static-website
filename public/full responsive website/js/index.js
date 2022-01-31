let burger = document.querySelector('.burger')
let navBar = document.querySelector('.navbar')
let navList = document.querySelector('.nav-list')
let rightNav = document.querySelector('.rightNav')

burger.addEventListener('click' , ()=>{
    rightNav.classList.toggle('v-opa-resp')
    navList.classList.toggle('v-opa-resp')
    navBar.classList.toggle('h-nav-resp')
    
})

