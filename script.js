const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageanimation(){
    
        var tl = gsap.timeline();
      
        tl.from("#nav", {
          y: "-10",
          opacity: 0,
          duration: 1.5,
          ease: Expo.easeInOut,
        })
          .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .5
          })
          .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
          });
      }

function mousefollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#mousefollower").style.transform = `translate(${dets.clientX}px,${dets.clientY}px )`;
    })
}
mousefollower();


document.querySelectorAll(".element").forEach(function (element) {
    var rotate = 0;
    var diffrot = 0;
  
    element.addEventListener("mouseleave", function (dets) {
      gsap.to(element.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    element.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - element.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(element.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        
        rotate: gsap.utils.clamp(-10, 40, diffrot * 0.5),
      });
    });
});


function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('hour').textContent = hours;
  document.getElementById('minute').textContent = minutes;
  document.getElementById('second').textContent = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the initial clock state
updateClock();
