let mm = gsap.matchMedia();


// initialization
const lenis = new Lenis({
    duration: 2,
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.defaults({
            toggleActions: "restart pause resume pause",
        })

// main tag name 
gsap.from(".nameTag", {
    opacity: 0,
    scale: 1.2,
    duration: 2,
})

// about container bg

mm.add("(min-width: 769px)", () => {

    let primImg = gsap.timeline({
        scrollTrigger: {
            trigger: '.aboutContainer',
            start: 'top 90%',
            end: 'top 0%',
            scrub: true,
            // markers:true,
            
        }
    
    })
    primImg.to('.primImg', {
        opacity:0,
        duration: 3,
    })
    

    // project moveable

document.querySelectorAll(".certifElem ul li").forEach((li) => {
    const img = li.querySelector("img");
    var rotate = 0;
            var diff = 0;
            li.addEventListener("mouseenter", (e) => {
       
        gsap.to(img, {
            display:"block",
            opacity: 1,
            duration: 0.5,
            ease: Power1,
            left:e.clientX-300,
            
        });
    });
    li.addEventListener("mousemove", (e) => {
        diff = e.clientX - rotate;
                rotate = e.clientX;
        gsap.to(img, {
            display:"block",
            opacity: 1,
            duration: 0.5,
            ease: Power1,
            left:e.clientX-300,
            rotate:gsap.utils.clamp(-15,15,diff)
        });
    });
    li.addEventListener("mouseleave", (e) => {
        gsap.to(img, {
            display:"none",
            opacity: 0,
            duration: 0.5,
            ease: Power1
        });
    });
});



// projects cards


// heading anim

const heads = document.querySelectorAll('.heading').forEach((e)=>{
    let headings = gsap.timeline({
        scrollTrigger: {
            trigger: e,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,      
            // markers : true, 
          
        }
        
    })
    headings.from(e, {
        x:-150,
        duration: 2,
    })
})



})


let atd = gsap.timeline({
    scrollTrigger: {
        trigger: '.aboutContainer',
        start: 'top 80%',
        end: 'top 0%',
        scrub: true,
        // markers:true,
    }

})
atd.to('.aboutContainer', {
    scale:1,
    backdropFilter: 'blur(15px)',
    color: '#fff',
    duration: 3,
})






// what i do

const blurbar = document.querySelectorAll('.mySwag ul li');
        blurbar.forEach((e) => {
            let wtd = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                }
            })
            wtd.to(e, {
                scale:1,
                filter: 'blur(0px)',
                color: '#fff',
                duration: 2,
            })

            let wtd2 = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: 'top 30%',
                    end: 'top 0%',
                    scrub: true,
            
                }

            })
            wtd2.to(e, {
                scale:0.9,
                filter: 'blur(10px)',
                color: '#ffffff9b',
                duration: 2,
            })
        })








// moving tag line 
let scrollertext = gsap.timeline({
    scrollTrigger: {
        trigger: '.scrollhead',
        start: 'top 70%',
        end: 'top 0%',
        scrub: 1,
        
    }

})
scrollertext.to('.scrollhead', {
    x:-750,
    duration: 3,
})


// bg mesh ranom

gsap.set(".bgshape", { xPercent: 0, yPercent: 0 });

function randomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

function animateShape(shape) {
  gsap.to(shape, {
    duration: 2,
    x: randomPosition(-50, 90) + '%',
    y: randomPosition(0, 100)+ '%',
    ease: "power1.inOut"
  });
}

function changePositions() {
  animateShape(".bgshape1");
  animateShape(".bgshape2");
  animateShape(".bgshape3");
}

changePositions();

setInterval(changePositions,2000);





// bg mesh 2

let bgmeshsub = gsap.timeline({
    scrollTrigger: {
        trigger: '.subSection',
        start: 'top 80%',
        end: 'top 0%',
        scrub: 1,        
    }

})
bgmeshsub.to('.bgmeshsub', {
    opacity:1,
    duration: 1,
})


// get in touch

document.querySelectorAll(".mvheadct").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    gsap.to(".mvigct", {
      duration: 1,
      width: "200px",
      ease: Power1,
    });
  });
  e.addEventListener("mouseleave", () => {
    gsap.to(".mvigct", {
      width: "0",
      duration: 1,
      ease: Power1,
    });
  });
});
document.querySelectorAll(".mvheadcf").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    gsap.to(".mvigcf", {
      duration: 1,
      width: "130px",
      ease: Power1,
    });
  });
  e.addEventListener("mouseleave", () => {
    gsap.to(".mvigcf", {
      width: "0",
      duration: 1,
      ease: Power1,
    });
  });
});


// get in hello scroll tag


            
gsap.to('.scrollhell', {
    x:-1250,
    duration: 35,
    repeat: -1

})


// fotter
// let footerbottom = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.footerbottom',
//         start: 'top 50%',
//         end: 'center 70%',
//         scrub: 1,
//         // markers:true,
        
//     }

// })
// footerbottom.to('.footerbottom', {
//     width:'95%',
//     height:'85vh',
//     borderRadius:'30px',
//     duration: 3,
// })


