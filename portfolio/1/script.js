var header = document.querySelector(".header");

window.onscroll = function() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.background = "rgba(255, 255, 255, 0.85)";
    }else{
        header.style.background = "transparent";
    }
}

var openbtn = document.querySelector(".openbtn");
var closebtn = document.querySelector(".closebtn");
var navlinks = document.querySelector(".navlinks");

closebtn.onclick = function() {closeNav()};
openbtn.onclick = function() {openNav()};

function openNav(){
    navlinks.style.top = "0px";
    navlinks.style.bottom = "0px";
}

function closeNav(){
    navlinks.style.top = "-100%";
    navlinks.style.bottom = "100%";
}