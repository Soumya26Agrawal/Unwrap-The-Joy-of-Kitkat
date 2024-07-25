
let menu=document.querySelector("#mainNav i")
let close=document.querySelector("#sideNav i")
let tl=gsap.timeline()

tl.to('#sideNav',{
right:0,
duration:0.4,

})

tl.from('#sideNav a',{
x:150,
opacity:0,
stagger:0.2,
duration:0.6

})

tl.pause()

menu.addEventListener('click', function()
{
    tl.play();
})
close.addEventListener('click', function()
{
    tl.reverse();
})






// PreEffect

let t2= gsap.timeline()
let images= document.querySelectorAll('.box img')
images=Array.from(images)
images.forEach((image, index) => {
    t2.from(image, {

      opacity: 0,          // Animate opacity from 0 to 1
      duration: 0.3,         // Duration of each animation
      ease: 'power2.out',  // Easing function for a smooth transition
    })
})

gsap.to("#firstBox",{
    x:-1000,
    duration:1.5,
    delay:1.9
    
})
gsap.to("#secondBox",{
    x:1000,
    duration:1.5,
    delay:1.9

})
gsap.to("#preEffect",{
    y:-1000,
    duration:1.5,
    delay:2.6

})

// Images section

gsap.to("#page1 #div",{
    y:130,
    // stagger:0.2,
    // duration:1,
    scrollTrigger:{
        trigger: "#page1",
        scroller:"#main",
        start: "top 43%",
        end: "top 40%",
        markers:true,
        scrub:2,
        pin:true,
    }
  })

//   Curtain Effect

gsap.to(".movingElement",{
    y:-570,
    delay:6,
    duration:6,
    rotate:360,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }


})
gsap.to(".images",{
    delay:7,
    duration:4,
     opacity:1,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }


})
gsap.to("#movingElement1",{
    delay:12,
    opacity:0,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
       

    }
    

})
gsap.to("#movingElementa",{
    y:-544,
    delay:6,
    duration:6,
    opacity:1,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }
    

})
gsap.to("#movingElementa",{
    opacity:0,
    y:0,
    delay:12,
    duration:4,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }
})
gsap.to("#movingElement2",{
    y:-600,
    delay:20,
    duration:2,
    opacity:1,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }
    

})
gsap.to("#movingElement2",{
    y:0,
    delay:20,
    duration:6,
    opacity:0,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }
    

})
gsap.to(".ellipse",{
    duration:4,
    delay:2,
   rotate:90,
    width: 1000,
    height: 2800,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",

    }

})
gsap.from(".pinned-text",{
    opacity:0,
    styles: { color: "#FFFF" },
    y:40,
    duration:3,
    delay:2,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }

})
gsap.from(".pinned-slogan",{
    opacity:0,
    styles:{color:"#ffff"},
    y:50,
    duration:3,
    delay:3,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }

})
gsap.to(".video",{
    y:10,
    opacity:1,
    duration:15,
    delay:8,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }



})

gsap.to(".containers",{
    opacity:0,
    duration:10,
    delay:8,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }



})
gsap.to(".video",{
    opacity:0,
    duration:15,
    delay:22,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }



})

gsap.to(".containers",{
    opacity:1,
    duration:1,
    delay:21,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",


    }



})

const collection=[
    "4Finger",
    "2Finger",
    "Pack",
    
]

let collectionBtn= document.querySelectorAll(".Collection-btn")
let img= document.querySelectorAll(".collection img")
console.log(img)

 collectionBtn= Array.from(collectionBtn);
 img= Array.from(img);

 collectionBtn.forEach((btn,idx)=>{
    btn.addEventListener("click",function(){
        let item=collection[idx];
        img.forEach((img,idx)=>{
            img.setAttribute("src",`images/${item}${idx+1}.jpeg`)
        })

    })
 })




// First Impression image effect
// const imagePaths = ['images/front0.jpeg', 'images/front1.jpeg', 'images/front2.jpeg', 'images/front3.jpeg', 'images/front4.jpeg'];
// let i=0;
// let divImg= document.querySelector("#firstImpressImg")
// const imageRender= ()=>{
//     i=i%5;
//     console.log("a")
// divImg.style.background= `url(imagePaths[i])`
// i++;
// }
// setInterval(imageRender,2000);