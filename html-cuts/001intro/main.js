var siguerratones = document.getElementById('siguerratones').style;

function seguir() {
  siguerratones.top = parseInt(window.event.pageY - 5 ) + "px";
  siguerratones.left = parseInt(window.event.pageX - 35) + "px";
}