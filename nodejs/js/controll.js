//resize fun


// touch input


cvs.addEventListener(touch[0],(e)=>{
MOUSE.x = e.touches[0].clientX - crr.canvas.x
movin.goin = true;

})



cvs.addEventListener(touch[1],(e)=>{
MOUSE.x = e.touches[0].clientX - crr.canvas.x
movin.goin = true;
})



cvs.addEventListener(touch[2],(e)=>{
movin.goin = false;
})


//mouse input


cvs.addEventListener(mouseT[0],(e)=>{
MOUSE.x = e.offsetX
MOUSE.y = e.offsetY
movin.goin = true;
})


cvs.addEventListener(mouseT[1],(e)=>{
MOUSE.x = e.offsetX
MOUSE.y = e.offsetY
movin.goin = true;
})

cvs.addEventListener(mouseT[2],(e)=>{
movin.goin = false;
})






//keybroad input


window.addEventListener('keydown',(e)=>{

switch(e.key){

case 'a':
movin.left=true;
break;

case 'd':
movin.right=true;
break;

case 'ArrowLeft':
movin.left=true;
break;

case 'ArrowRight':
movin.right=true;
break;

}

})



window.addEventListener('keyup',(e)=>{

switch(e.key){
case 'a':
movin.left=false;
break;

case 'd':
movin.right=false;
break;

case 'ArrowLeft':
movin.left=false;
break;

case 'ArrowRight':
movin.right=false;
break;

}


})









pre.addEventListener('dblclick',()=>{
miniBox.requestFullscreen()
})



window.addEventListener('resize',reSize);


