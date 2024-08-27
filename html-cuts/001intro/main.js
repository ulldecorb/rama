function followTorch() {
  torch.top = parseInt(window.event.pageY) + "px";
  torch.left = parseInt(window.event.pageX ) + "px";
  torchImage.top = torchStrip.event.pageY;
  torchImage.left = torchStrip.event.pageX;
}



function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}