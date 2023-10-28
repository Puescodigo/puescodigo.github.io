// GSAP

//   animation for title
  let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}})
        tl.to(".espa", {
        y: "0%",
        duration: 0.8,
        stagger: 0.2,
    });














/* -- Logo effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".nav__logo").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 6;
  }, 25);
}