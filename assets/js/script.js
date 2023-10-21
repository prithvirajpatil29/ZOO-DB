const mobilescreen = window.innerWidth;
let bars = document.querySelector('.fafa');
let mobilebars = document.querySelector('.mobilebars')
let ultag = document.querySelector('ul');
bars.addEventListener('click', function() {
    if (mobilebars.style.display === "none") {
        mobilebars.style.display = "block"; 
    } else {
        mobilebars.style.display = "none";
    }
});
