import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MotionPathHelper, MorphSVGPlugin, DrawSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


// const ".orange" = #FFFF;


// gsap.set(".blueThing",{fill:blueColor});

const mainTL = gsap.timeline();

function LeftWheel(){
    const tl =gsap.timeline();
    tl.from("#dot",{duration:1, rotation:-540, transformOrigin:"50% 50%"});
    return tl;
}



mainTL.add(LeftWheel(),"1")

        




GSDevTools.create();























