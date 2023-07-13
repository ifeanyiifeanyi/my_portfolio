import gsap from "gsap";

const bar = document.querySelector(".loader__bar--inner");
const number_counter = document.querySelector(".loader__counter--number");
let counter = 0;

// interval for the loader and number loader counter
let barInterval = setInterval(() => {
  bar.style.width = `${counter}%`;
  number_counter.innerText = `${counter}%`;
  counter++;
  if (counter === 101) {
    clearInterval(barInterval);

    // gsap animation properties ....
    gsap.to(".loader__bar", {
      duration: 5,
      rotate: "40deg",
      left: "1000%",
    });
    gsap.to(".loader__text, .loader__counter", {
      duration: 0.5,
      rotate: "75deg",
      opacity: 0,
    });
    gsap.to(".loader__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });
    gsap.to(".loader__svg", {
      duration: 10,
      opacity: 1,
      rotate: "360deg",
    });
    gsap.to(".loader__box", {
    //   delay: 2,
      border: "none",
    });
    gsap.to(".loader", {
      delay: 2,
      background: "transparent",
      opacity:0.5,
    //   zIndex:1,
    });
    gsap.to(".loader__svg", {
        delay: 2,
        duration: 100,
        rotate: "360deg",
    });
  }
}, 50);
