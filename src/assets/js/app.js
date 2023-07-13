const bar = document.querySelector(".loader__bar--inner");
const number_counter = document.querySelector('.loader__counter--number');
let counter = 0;

let barInterval = setInterval(() => {
    bar.style.width = `${counter}%`;
    number_counter.innerText = `${counter}%`;
    counter++; 
    if(counter === 101) clearInterval(barInterval);
}, 50)