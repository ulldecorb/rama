const torch = document.getElementById('torch').style;
const torchImage = document.getElementById('torch-image').style;
const torchStrip = document.getElementById('torch-strip').style

function followTorch() {
  torch.top = parseInt(window.event.pageY) + "px";
  torch.left = parseInt(window.event.pageX ) + "px";
  torchImage.top = torchStrip.event.pageY;
  torchImage.left = torchStrip.event.pageX;

}

// let cursor = document.getElementById("torch");

// document.addEventListener("mousemove", (value) => {
//   let x = value.clientX;
//   let y = value.clientY;

//   cursor.style.left = x + "px";
//   cursor.style.top = y + "px";

// });

// $(document).ready(function(){
//   $(".info-bar__button").click(function(){
//     $(".info-bar").slideToggle("slow");
//   });
// });



function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}