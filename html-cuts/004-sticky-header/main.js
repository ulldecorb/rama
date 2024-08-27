window.onscroll = function() {stickHeaderOn()};

let header = document.getElementById("myHeader");
let opacitySwitchNode = document.getElementById("margin-bottom");

let startSticky = header.offsetTop;
let opacitySwitch = opacitySwitchNode.offsetTop;

function stickHeaderOn() {
  // window.pageYOffset > startSticky ? header.classList.add("sticky") : header.classList.remove("sticky");
    
  if (window.pageYOffset > opacitySwitch && window.pageYOffset < opacitySwitch + 200) {
    header.classList.contains("fadeOut") && header.classList.replace("fadeOut", "fadeIn");
  }
  if (window.pageYOffset > opacitySwitch + 200) {
    header.classList.contains("fadeIn") && header.classList.replace("fadeIn", "fadeOut");
    !header.classList.contains("fadeOut") && header.classList.add("fadeOut");
  }
}