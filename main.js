const button = document.querySelector('.button');
const rabbit = document.querySelector('.rabbit');

button.addEventListener('click', (event) => {
    rabbit.scrollIntoView({behavior : "smooth"});
} )