
const landing = document.querySelector('.landing');
const button = document.querySelector("button");





button.addEventListener("click", hidelanding(event));

function hidelanding(event) {
    Event.stop(event);
    landing.style.display = 'none';
    alert('hey'); 
}
