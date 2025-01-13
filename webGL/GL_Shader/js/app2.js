


import bistor from "./engine/bistor3D.js"

const {engine} = bistor;
const {gl, canvas, func, graphicsTool} = engine;


canvas.width=360;
canvas.height=360;














const App=()=>{

//bistor.engine.
func.init();


}



window.addEventListener("load", ()=>{

try{

//const cSize= innerWidth>innerHeight?innerHeight:innerWidth;
//gl.canvas.width = cSize;
//gl.canvas.height =cSize;

App();
console.log(bistor);


func.showError("JS IS Awesome");


}catch(e){
func.showError(e);
console.error(e);
}

});


