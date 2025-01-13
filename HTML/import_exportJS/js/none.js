import {sub} from "./sub.js";


const canvas=document.createElement("canvas");
const gl=canvas.getContext("webgl2");


class rand{

static float(min,max){
return Math.random() * (max-min) + min;
}

static int(min,max){
return Math.floor(rand.float(min,max));
}

}


const MathUtils={
rand,
sub,
}


export {canvas,gl};

export * as none1 from "./vals.js";



export {MathUtils};