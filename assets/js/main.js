let navbg = gsap.timeline({
    yoyo: true,
    paused:true,
  });

navbg.to('.navsitem', {
    display:"block",
    y:"100%",
    duration: 1.2,
    backdropFilter:"blur(20px)",
    ease:"power4.out"
})
navbg.to('.navlist ul li', {
    opacity:1,
    x:100,
    duration: 1.2,
    stagger:0.2,    
    ease:"power4.out"   
})
navbg.to('.clsnavbtn', {
    opacity:1,
    y:20,
    duration: 1,
    ease:"power4.out"   
})

let stckbod = document.getElementById('stickerboard');
stckbod.in
// stckbod.addEventListener('click',(e)=>{
//     console.log('d');
//     var img = document.createElement('img');

// // Set the source (URL) of the image
// img.src = 'assets/images/funnystc.png'; // Replace 'path_to_your_image.jpg' with the actual path of your image
// img.className = "sticker"
// stckbod.appendChild(img)
// img.style.left = e.clientX;

// })

// stckbod.addEventListener('click', (e)=>{
//     console.log('dd');
//     const moch = document.createElement('img');
//     moch.style.opacity = 0;
//     const imgsrc = ['gdvibxtc','funnystc','good-vibes-onlystc','iwmstc','nbddstc','pdmstc','yostc','gnstc','hydstc','sgstc','wststc']
//     const randomIndex = Math.floor(Math.random() * imgsrc.length);

// // Use the random index to get a random element from the array
//     const randomImage = imgsrc[randomIndex];

//     moch.src = `assets/images/${randomImage}.png`;
//     moch.className = "sticker"
//     stckbod.appendChild(moch);
//     moch.style.left = (e.clientX - 100) + "px";
//     moch.style.top = (e.clientY + stckbod.offsetTop -200) + "px";
//     var deg = Math.floor(Math.random() * (360 - 0) ) + 0;
//     moch.style.transform= 'rotate('+deg+'deg)'; 
    
//     gsap.to(moch, {
//         opacity:1,
//         duration: 0.3,  
//     })

//     setTimeout(()=>{ 
//         gsap.to(moch, {
//             opacity:0,
//             duration: 0.5   ,  
//         })
//         setTimeout(()=>{
//             moch.remove();
            
//         },2000);
//     },5000);
// })

stckbod.addEventListener('click', (e) => {
    const moch = document.createElement('img');
    moch.style.opacity = 0;
    const imgsrc = ['gdvibxtc', 'funnystc', 'iwmstc', 'nbddstc', 'pdmstc', 'yostc', 'gnstc', 'hydstc', 'sgstc', 'wststc'];
    const randomIndex = Math.floor(Math.random() * imgsrc.length);

    // Use the random index to get a random element from the array
    const randomImage = imgsrc[randomIndex];

    moch.src = `assets/images/${randomImage}.png`;
    moch.className = "sticker";
    stckbod.appendChild(moch);
    moch.style.left = (e.clientX - 100) + "px";
    moch.style.top = (e.clientY + stckbod.offsetTop - 200) + "px";
    var deg = Math.floor(Math.random() * (360 - 0)) + 0;
    moch.style.transform = 'rotate(' + deg + 'deg)';

    gsap.to(moch, {
        opacity: 1,
        duration: 0.2,
    });

    // Animate falling effect

    setTimeout(() => {
        const initialY = parseInt(moch.style.top);
    const gravity = 0.3; // Adjust gravity as needed
    const duration = 1; // Adjust duration of falling
    const contend = stckbod.offsetHeight - e.clientY + 170;

    gsap.to(moch, {
        top: initialY + contend, // Adjust distance to fall
        duration: duration,
        ease: "power4.in", // Adjust easing
        onUpdate: () => {
            const newY = parseInt(moch.style.top);
            const newYPosition = newY + gravity * gsap.getProperty(moch, "time") ** 2;
            moch.style.top = newYPosition + "px";
        }
    });
        gsap.to(moch, {
            opacity: 0,
            duration: 4,
        });
        setTimeout(() => {
            moch.remove();
        }, 2000);
    }, 5000);
});


document.getElementById('openmenu').addEventListener(('click'),()=>{
    navbg.play(); 
})

document.getElementById('clsnavbtn').addEventListener(('click'),()=>{
    navbg.reverse().duration(0.9);;
})

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

gsap.to('.projCard', {
    xPercent: -100 * (document.querySelectorAll('.projCard').length),
    ease: "none",
    scrollTrigger: {
        trigger: ".projSnap",
        start:"top 25%",
        pin:true,
        scrub: 1,
        duration:3,
        end: () => "+=" + document.querySelector(".projSnap").offsetWidth,
        
    }
})
document.querySelectorAll('.projCard img, .hexatab, .certifElem ul li, .navlist ul li').forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        
        gsap.to('#custCur',{
            
            duration: 0.3,
            backgroundImage: "url(/assets/images/evyearrow.png)",
            width:100,
            height:100,
            
            backgroundColor:"#ffffff16",
            // filter:"drop"
            boxShadow:"none",
            backdropFilter:"blur(10px)"
        })
    })
    e.addEventListener('mouseleave',()=>{
        
        gsap.to('#custCur',{
            
            duration: 0.3,
            backgroundImage: "none",
            width:20,
            height:20,
            backgroundColor:"#fff",
            
        })
    })

})


document.querySelectorAll('.mailer,.tagline').forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        
        gsap.to('#custCur',{
            
            duration: 0.3,
            backgroundImage: "url(/assets/images/goto.png)",
            width:100,
            height:100,
            
            backgroundColor:"#ffffff16",
            // filter:"drop"
            boxShadow:"none",
            backdropFilter:"blur(8px)"
        })
    })
    e.addEventListener('mouseleave',()=>{
        
        gsap.to('#custCur',{
            
            duration: 0.3,
            backgroundImage: "none",
            width:20,
            height:20,
            backgroundColor:"#fff",
            
        })
    })

})





document.querySelectorAll('#stickerboard').forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        
        gsap.to('#custCur',{
            
            duration: 0.3,
            backgroundImage: "url(/assets/images/stick.png)",
            width:100,
            height:100,
            
            backgroundColor:"#ffffff16",
            // filter:"drop"
            boxShadow:"none",
            backdropFilter:"blur(8px)"
        })
    })
    e.addEventListener('mouseleave',()=>{
        
        gsap.to('#custCur',{
            
            duration: 0.3,
            backgroundImage: "none",
            width:20,
            height:20,
            backgroundColor:"#fff",
            
        })
    })

})


document.querySelectorAll('.wtdContainer').forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        
        gsap.to('#custCur',{
            
            duration: 0.3,
            backgroundImage: "url(/assets/images/bulb.png)",
            width:100,
            height:100,
            
            backgroundColor:"#ffffff16",
            // filter:"drop"
            boxShadow:"none",
            backdropFilter:"blur(5px)"
        })
    })
    e.addEventListener('mouseleave',()=>{
        
        gsap.to('#custCur',{
            
            duration: 0.3,
            backgroundImage: "none",
            width:20,
            height:20,
            backgroundColor:"#fff",
            
        })
    })

})

document.querySelectorAll('.projCard img').forEach((projCard)=>{
    projCard.addEventListener('mouseover',(e)=>{
        //  gsap.to(e.target,{
        //      transform:"rotate3d(5, 3, -2, 55deg)",
        //      duration: 1,
        //      ease: Power1
        // })
        
        const namep = e.target.getAttribute('alt');
        document.querySelector('.projector').textContent = namep;
        gsap.to('.projector',{
            
            duration: 1,
            opacity:1,
            ease: Power1
        })
        gsap.to(e.target,{
            duration: 1,
            opacity:0.7,
            ease: Power1
        })
    })
    projCard.addEventListener('mouseout',(e)=>{
        
        gsap.to('.projector',{
            
            duration: 1,
            opacity:0,
            ease: Power1
        })
        gsap.to(e.target,{
            duration: 1,
            opacity:1,
            ease: Power1
        })
    })
    // projCard.addEventListener('mouseout',(e)=>{
    //     gsap.to(e.target,{
    //         transform:"rotate(0)",
    //         duration: 1,
    //         ease: Power1
    //     })
    // })
})

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



// get in touch

document.querySelectorAll(".mvheadct").forEach((e) => {
    e.addEventListener("mouseenter", () => {
      gsap.to(".mvigct", {
        duration: 1,
        width: "200px",
        ease: Power1,
      });
      gsap.to('#custCur',{
            
        duration: 0.3,
        backgroundImage: "url(/assets/images/fingerv.png)",
        width:100,
        height:100,
        
        backgroundColor:"#ffffff16",
        // filter:"drop"
        boxShadow:"none",
        backdropFilter:"blur(10px)"
    })
    });
    e.addEventListener("mouseleave", () => {
      gsap.to(".mvigct", {
        width: "0",
        duration: 1,
        ease: Power1,
      });
      gsap.to('#custCur',{
            
        duration: 0.3,
        backgroundImage: "none",
        width:20,
        height:20,
        backgroundColor:"#fff",
        
    })
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
    width:randomPosition(300, 700) + "px",
        height:randomPosition(300, 700) + "px",
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

// Import GSAP if not already included
// import gsap from "gsap";

document.addEventListener('mousemove', (e) => {
    // console.log(e);

    
    
    // Get the viewport width and height to adjust the animation relative to them
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate the percentage of the mouse position relative to the viewport
    const xPercent = (e.clientX / viewportWidth) * 100;
    const yPercent = (e.clientY / viewportHeight) * 100;

    // Smoothly move the element to the new position based on the mouse movement
    gsap.to(".bgshape4", {
        duration:1.3,
        x: e.clientX-viewportWidth +200,
        y: e.clientY - 300,
        width:randomPosition(300, 700) + "px",
        height:randomPosition(300, 700) + "px",
    });
});




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


const curr = document.getElementById('custCur');
            
            document.addEventListener('mousemove',(e)=>{
            curr.style.left = e.pageX- window.scrollX + "px";
            curr.style.top = e.pageY - window.scrollY + "px";
        })
//         let list = document.querySelectorAll('h4,h1')

// list.forEach(element => {
//     element.addEventListener('mouseover',()=>{
//         document.getElementById('custCur').style.scale = 2;
//         document.getElementById('custCur').style.transform= "translate(-50%,-30%)";
//     })
//     element.addEventListener('mouseout',()=>{
//         document.getElementById('custCur').style.scale = 1;
//         document.getElementById('custCur').style.transform= "translate(-50%,-70%)";
//     })
// });
