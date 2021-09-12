const torch = document.getElementById('torch').style;
const torchImage = document.getElementById('torch-image').style;

function followTorch() {
  torch.top = parseInt(window.event.pageY - 5 ) + "px";
  torch.left = parseInt(window.event.pageX - 35) + "px";
  // torchImage.top = parseInt(window.event.pageY + 200) + "px";
  // torchImage.left = parseInt(window.event.pageX + 200) + "px";

}