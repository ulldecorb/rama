var siguerratones = document.getElementById('siguerratones').style;

function seguir() {
  siguerratones.top = parseInt(window.event.pageY - 300) + "px";
  siguerratones.left = parseInt(window.event.pageX - 300) + "px";
}