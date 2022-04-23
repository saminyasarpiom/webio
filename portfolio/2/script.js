const expand_button = document.querySelector('.expand-button');
const navlinks2 = document.querySelector('.navlinks-2');
const hero_section = document.querySelector('.hero-section');

const mediaquery = window.matchMedia('(max-width: 900px)');

const preloader = document.getElementById('preloader');
window.onload = function(){
    preloader.style.display = "none";
}

const read_more_btn = document.getElementById('readbtn');
const yt_history = document.querySelector('.yt-history');


expand_button.addEventListener('click', function(){
    expand_button.classList.toggle('eactive');
    navlinks2.classList.toggle('n2active');
    
    if(!mediaquery.matches){
        hero_section.classList.toggle('hero-padding');
    }
})

var typed = new Typed(".typing", {
    strings: ["Student", "Developer", "Designer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


var read_counter = 0;

read_more_btn.addEventListener('click', function(){
    if(read_counter == 0){
        read_more_btn.value = "Read Less";
        read_counter++;
        yt_history.style.height = "fit-content";
    }
    else if(read_counter == 1){
        read_more_btn.value = "Continue Reading";
        read_counter--;
        yt_history.style.height = "168px";
    }
})