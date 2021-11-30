// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickHeaderOn()};
// window.onscroll = function() {stickHeaderOff()};

// Get the header
var header = document.getElementById("myHeader");
var fakeHeader = document.getElementById("margin-bottom");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickHeaderOn() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

    if (window.pageYOffset > 800 ) {
    //   if (header.classList.contains("fadeOut")) {
    //     header.classList.remove("fadeOut");
    //     header.classList.add("fadeIn");
    //   }
    //   // if (header.classList.contains("fadeIn")) {
    //   //   header.classList.replace("fadeIn", "fadeOut");
    //   // }
    //   // (
    //   !header.classList.contains("fadeOut") && header.classList.add("fadeOut");

    //   // && !header.classList.contains("fadeIn")) 
    //   // && 
    header.classList.add("fadeOut");
    //   // )
    //   console.log("YES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
  } else {
    header.classList.remove("sticky");
  }
  console.log(window.pageYOffset)
}
// function stickHeaderOff() {
//   if (window.pageYOffset < 600) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
//   console.log(window.pageYOffset)
// }
