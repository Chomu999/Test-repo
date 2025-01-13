//
/*
addEventListener('deviceorientation',(e)=>{

//deviceorientation

let pos={
x:Math.round(e.beta),
y:Math.round(e.gamma),
z:Math.round(e.alpha),
}


if(pos.x >= 7){
movin.left=true
movin.right=false
}

else if(pos.x <= -7){
movin.left=false
movin.right=true
}

else{
movin.left=false
movin.right=false
}

cg.x = pos.x;
cg.y = pos.y;
cg.z = pos.z;

//see('g')

})
*/



//key down
ISButtonEvent(btnTop,touch[0],()=>{

game.NyInput.top=true;
})


ISButtonEvent(btnLeft,touch[0],()=>{

game.NyInput.left=true;
})



ISButtonEvent(btnRight,touch[0],()=>{

game.NyInput.right=true;
})



ISButtonEvent(btnDown,touch[0],()=>{

game.NyInput.down=true;
})

//key up

ISButtonEvent(btnTop,touch[2],()=>{

game.NyInput.top=false;
})


ISButtonEvent(btnLeft,touch[2],()=>{

game.NyInput.left=false;
})



ISButtonEvent(btnRight,touch[2],()=>{

game.NyInput.right=false;
})



ISButtonEvent(btnDown,touch[2],()=>{

game.NyInput.down=false;
})








addEventListener('keydown',()=>{
miniBox.requestFullscreen()
})



addEventListener('resize',reSize);


