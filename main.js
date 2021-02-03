'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
   
})

//클릭시 원하는 section 이동
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{
    const link = event.target.dataset.target;
    
    if(link === null){
        return;
    }
    navbarMenu.classList.remove('open');

    scrollIntoView(link);
})

//버튼 클릭시 contact section이동
const gobtn = document.querySelector('.home__contact');

gobtn.addEventListener('click',(event)=>{
    const target = event.target.dataset.target;
    console.log(target);

    scrollIntoView(target);

});

function scrollIntoView(selector){
    const goContact = document.querySelector(selector);
    goContact.scrollIntoView({behavior:'smooth'});
}


const hSection = document.querySelector('.home__container');
const hHeight = hSection.getBoundingClientRect().height;
//스크롤시 배경 fadein
document.addEventListener('scroll',()=>{
    hSection.style.opacity=1-window.scrollY/hHeight;
});


//맨위로 올라가는 arrow버튼
const arrowUp = document.querySelector('.arrow-btn');
document.addEventListener('scroll',()=>{
    if(window.scrollY > hHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener('click',(event)=>{
   scrollIntoView('#home');
})


//버튼 클릭시 프로젝트 필터링
const filterbtn = document.querySelector('.work__categories');
const probtn = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
filterbtn.addEventListener('click',(event)=>{
    const a = event.target.dataset.item || event.target.parentNode.dataset.item;
    if(a == null){
        return;
    }

    //remove selection
    const active  = document.querySelector('.category__btn.active');
    active.classList.remove('active');

    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode; 
    target.classList.add('active');

    probtn.classList.add('ani-out');

    setTimeout(()=>{
        projects.forEach((project)=>{
            if(a ==='all' || a === project.dataset.type){
                project.classList.remove('invisible')
            }else{
                 project.classList.add('invisible');
            }
         })

        probtn.classList.remove('ani-out');
    },300);  
});

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
})