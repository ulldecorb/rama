const torch = document.getElementById('torch').style;
const torchImage = document.getElementById('torch-image').style;
const torchStrip = document.getElementById('torch-strip').style

function followTorch() {
  torch.top = parseInt(window.event.pageY - 5 ) + "px";
  torch.left = parseInt(window.event.pageX - 35) + "px";
  torchImage.top = torchStrip.event.pageY;
  torchImage.left = torchStrip.event.pageX;

}