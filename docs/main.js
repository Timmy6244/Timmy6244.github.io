const menuBtn =  document.querySelector(".menu-btn");
const toggleBtn =  document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navLists = document.querySelectorAll('.menu-nav-list');


menuBtn.addEventListener('click', ()=>{
    // toggleBtn.classList.toggle('open');
    if (toggleBtn.classList.contains('open')) {
        toggleBtn.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');

        navLists.forEach((list)=>{
            list.classList.remove('open');
        });
    } else {
        toggleBtn.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navLists.forEach((list)=>{
            list.classList.add('open');
        });
    }
    
})
 