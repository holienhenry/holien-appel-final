import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, MotionPathHelper, MotionPathPlugin, MorphSVGPlugin, DrawSVGPlugin, CustomBounce, CustomEase);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

// gsap.set("#dot-2",{});

// const tl2 = new gsap.timeline({repeat:-1});
// tl2.to("#dot-2",{y:"-=200", scaleY:1.75, ease: "none", transformOrigin:"top top"},"+=1")
// .to("#dot-2",{scaleY:1.5, duration:0.12,ease:"none"})
// .to("#dot-2",{y:"+=200", scaleY:1.75, ease: "none", transformOrigin:"bottom bottom"},"+=1")
// .to("#dot-2",{scaleY:1.5, duration:0.12,ease:"none"})


// const ".orange" = #FFFF;


// gsap.set(".blueThing",{fill:blueColor});

const mainTL = gsap.timeline();

// function LeftWheel(){
//     const tl =gsap.timeline();
//     tl.to("#dot",{duration:0.5, rotation:180, yPercent:-200, transformOrigin:"50% 50%"});
//     tl.to("#dot",{duration:0.5, rotation:-180, yPercent:300, transformOrigin:"50% 50%"});
//     .to("#ball-2",{duration:aniTime, motionPath:{path:"#path-2", align:"self"}, scale:0.5, ease: "power4.out"},"-=75%")

//     // tl.to("#dot",{duration:1, rotation:-180, xPercent:-400, transformOrigin:"50% 50%"});
//     return tl;
// }

// function Rush(){
//     const tl =gsap.timeline();
//     tl.to("#dot",{duration:5, ease:"Power1.inOut", motionPath:{path:"#Line", align:"#Line", autoRotate: true, alignOrigin:[0.5,0.5]}})



















 function Bounce(){
        const tl =gsap.timeline();

        gsap.set("#dot",{transformOrigin:"center"});

        tl.to("#dot",{duration: 0.25, scaleX:1.4, scaleY:1, ease: "power1.in", yoyo:true, repeat:1})
        tl.to("#dot",{y:"-=50", duration: 0.5, scaleY:1.25, ease: "power1.in", yoyo:true, repeat:1}, "-=30%")
        .to("#dot",{duration: 0.15, scaleX:1.4, scaleY:1, ease: "power1.in", yoyo:true, repeat:1}, "-=25%")

        .to("#dot",{y:"-=150", duration: 0.5, scaleY:1.5, ease: "power1.in", yoyo:true, repeat:1}, "-=29%")
        .to("#dot",{duration: 0.2, scaleX:1.5, scaleY:1, ease: "power1.in", yoyo:true, repeat:1}, "-=30%")

        .to("#dot",{y:"-=250", duration: 0.5, scaleY:2, ease: "power1.in", yoyo:true, repeat:1}, "-=25%")
        .to("#dot",{duration: 0.2, scaleX:1.6, scaleY:1, ease: "power1.in", yoyo:true, repeat:1}, "-=25%")
        

        .to("#dot",{y:"-=275", duration: 0.25, scaleY:2.5, ease: "power1.in"})

       //  tl.to("#dot",{duration:0.75, yPercent: -400, scaleY:1.5, ease: "power1.out"})
       //  tl.to("#dot",{duration:0, scaleY:1, ease: "none"})

       // tl.to("#dot",{y:"-=50", duration: 0.5, scaleY:1.1, ease: "power1.in", transformOrigin:"top top"})
       // tl.to("#dot",{scaleY:1, duration: 0.1, ease:"power1.inOut"})
       // tl.to("#dot",{y:"+=50", duration: 0.5, scaleX:1, ease: "power1.out", transformOrigin:"bottom bottom"})
       // tl.to("#dot",{scaleX:2, scaleY:0.5, duration: 0.3, ease:"none"})
       // // tl.to("#dot",{scaleX:1, duration: 0.3, ease:"none"})
       // tl.to("#dot",{y:"-=150", duration: 0.5, scaleY:1.3, scaleX:1, ease: "power1.in", transformOrigin:"top top"})
       // tl.to("#dot",{scaleY:1, duration: 0.1, ease:"power1.inOut"})
       // tl.to("#dot",{y:"+=150", duration: 0.5, scaleX:1, ease: "power1.out", transformOrigin:"bottom bottom"})
       // tl.to("#dot",{scaleX:2, scaleY:0.5, duration: 0.3, ease:"none"})
       // tl.to("#dot",{scaleX:1, duration: 0.3, ease:"none"})
       // tl.to("#dot",{y:"-=250", duration: 0.5, scaleY:1.5, ease: "power1.in", transformOrigin:"top top"})
       // tl.to("#dot",{scaleY:1, duration: 0.1, ease:"power1.inOut"})
       // tl.to("#dot",{y:"+=250", duration: 0.5, scaleY:1, ease: "power1.out", transformOrigin:"bottom bottom"})
       // tl.to("#dot",{scaleX:1, duration: 0.3, ease:"none"})
       // tl.to("#dot",{y:"-=326", duration: 0.5, scaleY:1.5, ease: "none", transformOrigin:"top top"})
       // tl.to("#dot",{scaleY:1, duration: 0, ease:"none"})
       tl.to("#dot",{opacity:0, duration: 0, ease:"none"})
       tl.from("#dotmask",{opacity:0, duration: 0, ease:"none"})
       tl.to("#dotmask", {duration: 0.2, morphSVG:"#pindot"},"same")




       // tl.to("#dot",{y:"+=100", scaleY:1.25, ease: "sine.out", transformOrigin:"bottom bottom"})
       // tl.to("#dot",{scaleY:1, duration:0.1,ease:"none"})
        return tl;
 }

 function Grow(){
       const tl =gsap.timeline();
       tl.to("#dotmask", {duration: 0.2, morphSVG:"#pindot"},"same")
       tl.from("#d",{opacity:0, duration: 0.1, ease:"none"},"same")
       tl.from("#d",{scale:0.2, duration: 0.2, ease:"power1.in", transformOrigin:"bottom left"},"same")
       tl.to("#d",{xPercent:40, yPercent:-40, duration: 0.4, ease:"power4.in", transformOrigin:"bottom left"},"same")
       tl.to("#d",{xPercent:1, yPercent:1, duration: 0.4, ease:"power4.out", transformOrigin:"bottom left"},"now")
       tl.to("#d",{rotate:-15, duration: 0.3, ease:"power4.out", transformOrigin:"bottom left"})
       return tl;
}

function Pop(){
       const tl =gsap.timeline();
       tl.to("#d",{duration:1, opacity:100, rotation:270, ease:"power2.out", transformOrigin:"bottom left"},"one")
       tl.from("#c",{duration:0.2, opacity:0},"one")
       tl.to("#c",{rotation:180, duration:1, ease:"power2.out", transformOrigin:"bottom left"},"one");
       tl.from("#b",{duration:0.2, opacity:0},"one")
       tl.to("#b",{rotation:90, duration:1, ease:"power2.out", transformOrigin:"bottom left"},"one");
       tl.from("#a",{duration:0.2, opacity:0},"one")
       tl.to("#a",{rotation:1, duration:1, ease:"power2.out", transformOrigin:"bottom left"},"one");
       tl.to("#a, #b, #c, #d, #dotmask, #pindot, #dot",{duration:0.05, opacity:0},"two")
       tl.from("#Pinwheel",{duration:0.05, opacity:0},"two")
       // tl.from("#Pinwheel",{duration:2.5, rotate:-1080, transformOrigin:"center center"},"two")
       

       
       return tl;
}

function One(){
       const tl =gsap.timeline();
       tl.from("#one",{duration: 0.35, ease:"none", drawSVG:"0% "},"n")
       .to("#one",{duration: 0.5, ease:"none", drawSVG:"100% 100%"})
       tl.from("#Pinwheel",{duration:2.5, rotate:-1080, transformOrigin:"center center"},"n")

       // tl.from("#two",{duration: 0.75, ease:"none", drawSVG:"0% "})
       // .to("#two",{duration: 0.75, ease:"none", drawSVG:"100% 100%"})

       // tl.from("#three",{duration: 0.75, ease:"none", drawSVG:"0% "})
       // .to("#three",{duration: 0.75, ease:"none", drawSVG:"100% 100%"})

       // tl.from("#four",{duration: 0.75, ease:"none", drawSVG:"0% "})
       // .to("#four",{duration: 0.75, ease:"none", drawSVG:"100% 100%"})

       // tl.from("#five",{duration: 0.75, ease:"none", drawSVG:"0% "})
       // .to("#five",{duration: 0.75, ease:"none", drawSVG:"100% 100%"})

       // tl.from("#six",{duration: 0.75, ease:"none", drawSVG:"0% "})
       // .to("#six",{duration: 0.75, ease:"none", drawSVG:"100% 100%"})

       // tl.from("#seven",{duration: 0.75, ease:"none", drawSVG:"0% "})
       // .to("#seven",{duration: 0.75, ease:"none", drawSVG:"100% 100%"})

       // .to(".one",{duration:1, stagger:0.25})
       // .to(".two",{duration:1, stagger:6.25})
       // .to(".three",{duration:1, stagger:0.25})
       // .to(".four",{duration:1, stagger:0.25})
       // .to(".five",{duration:1, stagger:0.25})
       // .to(".six",{duration:1, stagger:0.25})
       // .to(".seven",{duration:1, stagger:0.25})

       // tl.fromTo("#one",{drawSVG:"0%"}, {duration: 0.75, ease:"none", drawSVG:"0% 100% "});

       // tl.fromTo("#two",{drawSVG:"0%"}, {duration: 0.75, ease:"none", drawSVG:"  100% "});
       // tl.to("#one-two-m",{duration: 1, xPercent: 97, ease:"none"});

       // tl.fromTo("#three",{drawSVG:"0%"}, {duration: 0.75, ease:"none", drawSVG:"  100% "});
       // tl.to("#three-m",{duration: 1, xPercent: 97, ease:"none"});

       // tl.fromTo("#four",{drawSVG:"0%"}, {duration: 0.75, ease:"none", drawSVG:"  100% "});
       // tl.to("#four-m",{duration: 1, xPercent: 97, ease:"none"});

       // tl.fromTo("#five",{drawSVG:"0%"}, {duration: 0.75, ease:"none", drawSVG:"  100% "});
       // tl.to("#five-m",{duration: 1, xPercent: 97, ease:"none"});

       // tl.fromTo("#six",{drawSVG:"0%"}, {duration: 0.75, ease:"none", drawSVG:"  100% "});
       // tl.to("#six-m",{duration: 1, xPercent: 97, ease:"none"});

       // tl.fromTo("#seven",{drawSVG:"0%"}, {duration: 0.75, ease:"none", drawSVG:"  100% "});
       // tl.to("#seven-m",{duration: 1, xPercent: 97, ease:"none"});
       return tl;
   }

   function Two(){
       const tl =gsap.timeline();

       tl.from("#two",{duration:0.35, ease:"none", drawSVG:"0% "})
       .to("#two",{duration: 0.65, ease:"none", drawSVG:"100% 100%"})
    
       return tl;
}

function Three(){
       const tl =gsap.timeline();

       tl.from("#three",{duration: 0.35, ease:"none", drawSVG:"0% "})
       .to("#three",{duration: 0.95, ease:"none", drawSVG:"100% 100%"})
    
       return tl;
}

function Four(){
       const tl =gsap.timeline();

       tl.from("#four",{duration: 0.35, ease:"none", drawSVG:"0% "})
       .to("#four",{duration: 0.5, ease:"none", drawSVG:"100% 100%"})
    
       return tl;
}

function Five(){
       const tl =gsap.timeline();

       tl.from("#five",{duration: 0.35, ease:"none", drawSVG:"0% "})
       .to("#five",{duration: 0.75, ease:"none", drawSVG:"100% 100%"})
    
       return tl;
}

function Six(){
       const tl =gsap.timeline();

       tl.from("#six",{duration: 0.35, ease:"none", drawSVG:"0% "})
       .to("#six",{duration: 1, ease:"none", drawSVG:"100% 100%"})
    
       return tl;
}

function Seven(){
       const tl =gsap.timeline();

       tl.from("#seven",{duration: 0.35, ease:"none", drawSVG:"0% "})
       .to("#seven",{duration: 0.85, ease:"none", drawSVG:"100% 100%"})
    
       return tl;
}

function Eight(){
       const tl =gsap.timeline();

       tl.from("#eight",{duration: 0.35, ease:"none", drawSVG:"0% "})
       .to("#eight",{duration: 0.95, ease:"none", drawSVG:"100% 100%"})
    
       return tl;
}

function Nine(){
       const tl =gsap.timeline();

       tl.from("#nine",{duration: 0.35, ease:"none", drawSVG:"0% "})
       .to("#nine",{duration: 0.75, ease:"none", drawSVG:"100% 100%"})
    
       return tl;
}

function Ten(){
       const tl =gsap.timeline();

       tl.from("#ten",{duration: 0.35, ease:"none", drawSVG:"0% "})
       .to("#ten",{duration: 0.95, ease:"none", drawSVG:"100% 100%"})
    
       return tl;
}

function Eleven(){
       const tl =gsap.timeline();

       tl.from("#eleven",{duration: 0.35, ease:"none", drawSVG:"0% "})
       .to("#eleven",{duration: 0.75, ease:"none", drawSVG:"100% 100%"})

       tl.to("#Pinwheel",{duration:0.75, y:"-=148", transformOrigin:"center center"})
       tl.from("#jdot",{opacity:0, duration: 0.1, ease:"none"},"now")
       tl.to("#jdot",{duration:1, ease:"Power1.inOut", motionPath:{path:"#jpath", align:"#jpath", autoRotate: true, alignOrigin:[0.5,0.5]}},"now")
       tl.to("#jdot",{scale:0.5, duration: 1, ease:"none"},"now")
       // tl.to("#jdot",{opacity:0, duration: 0.1, ease:"none"},"leave")

       
    
       return tl;
}

function Farm(){
       const tl =gsap.timeline();
       tl.to("#jdot",{opacity:0, duration: 0.1, ease:"none"},"leave")
       tl.from("#M",{duration: 0.25, ease:"none", drawSVG:"0% "},"leave")
       tl.from("#R",{duration: 0.25, ease:"none", drawSVG:"0% "})
       tl.from("#AF",{duration: 0.25, ease:"none", drawSVG:"0% "})
       tl.from("#F",{duration: 0.25, ease:"none", drawSVG:"0% "},"f")

       tl.from("#fdot",{opacity:0, duration: 0.1, ease:"none"})
       tl.to("#fdot",{duration:0.53, ease:"Power1.inOut", motionPath:{path:"#fpath", align:"#fpath", autoRotate: true, alignOrigin:[0.5,0.5]}})
       tl.to("#fdot",{opacity:0, duration: 0.1, ease:"none"})

    
       return tl;
}


function Appel(){
       const tl =gsap.timeline();

       tl.from("#L",{duration: 0.25, ease:"none", drawSVG:"0% "})
       tl.from("#E",{duration: 0.25, ease:"none", drawSVG:"0% "})
       tl.from("#P",{duration: 0.25, ease:"none", drawSVG:"0% "})
       tl.from("#P_2",{duration: 0.25, ease:"none", drawSVG:"0% "})
       tl.from("#A",{duration: 0.5, ease:"none", drawSVG:"0% "})

       tl.from("#adot",{opacity:0, duration: 0.1, ease:"none"},"yay")
       tl.to("#adot",{duration:1.4, ease:"Power1.out", motionPath:{path:"#endpath", align:"#endpath", autoRotate: true, alignOrigin:[0.5,0.5]}},"yay")
       tl.to("#adot",{scale:3.5, duration: 0.9, ease:"none"},"yay")
       tl.to("adot",{opacity:0, duration: 0.1, ease:"none"})

       tl.to("#Pinwheel, #A, #P, #P_2, #L, #E, #F, #AF, #R, #M",{opacity:0, y:"-=400", duration: 1.5, ease:"power1.out"},"yay")

       tl.to("adot",{opacity:0, duration: 0.1, ease:"none"})







    
       return tl;
}
// function One(){
//        const tl =gsap.timeline();
//        tl.to("#a",{duration:1, rotation:270, ease:"power2.out", transformOrigin:"bottom left"});
//        return tl;
//    }
   
//    function Two(){
//        const tl =gsap.timeline();
//        tl.to("#b",{duration:0.75, rotation:180, ease:"power2.out", transformOrigin:"bottom left"});
//        return tl;
//    }
   
   
//    function Three(){
//        const tl =gsap.timeline();
//        tl.to("#c",{duration:0.5, rotation:90, ease:"power2.out", transformOrigin:"bottom left"});
//        return tl;
//    }
   
//    function Four(){
//        const tl =gsap.timeline();
//        tl.to("#d",{duration:1, rotation:0, ease:"power2.out", transformOrigin:"bottom left"});
//        return tl;
//    }


mainTL.add(Bounce())
       .add(Grow()) 
       .add(Pop())
       .add(One(),"+6.85")
       .add(Two(),"+6.85")
       .add(Three(),"+6.85")
       .add(Four(),"+6.85")
       .add(Five(),"+6.85")
       .add(Six(),"+6.85")
       .add(Seven(),"+7")
       .add(Eight(),"+7")
       .add(Nine(),"+7")
       .add(Ten(),"+7")
       .add(Eleven(),"+7")
       .add(Farm())
       .add(Appel());


        




GSDevTools.create();























