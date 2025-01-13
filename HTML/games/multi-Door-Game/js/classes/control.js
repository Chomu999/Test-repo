

















class Control{

constructor(game){


this.game=game
this.output=[]

addEventListener('touchstart',(e)=>{

if(e.target.classList[0] == "btns"){
e.target.classList.add('btnsEffects');
}

if(e.target.classList[2] == "jump"){
this.output.push('jump')
//if(player.speed.y == 0) 
//player.isJumping=true;
}

if(e.target.classList[2] == "left"){

this.output.push('left')
}
if(e.target.classList[1] == "btn5"){
this.output.push('atteck')
}

if(e.target.classList[2] == "right"){
this.output.push('right')

}

if(e.target.classList[2] == "down"){
this.output.push('down')

}



console.log(this.output);


});


addEventListener('touchend',(e)=>{




e.target.classList.remove('btnsEffects');


if(e.target.classList[2] == "jump"){
this.output.splice(this.output.indexOf('jump'))
//player.isJumping=false;

//player.speed.y=0;

}

if(e.target.classList[2] == "left"){
this.output.splice(this.output.indexOf('left'))
//movin.left=false;
//player.velocity.x=0;
}

if(e.target.classList[1] == "btn5"){
this.output.splice(this.output.indexOf('atteck'))
//player.isJumping=false;
}

if(e.target.classList[2] == "right"){
this.output.splice(this.output.indexOf('right'))
//player.velocity.x=0;
}

if(e.target.classList[2] == "down"){
this.output.splice(this.output.indexOf('down'))
//movin.down=false;
}


console.log(this.output);

});




// addEventListener('touchmove', (e)=>{
// //arrowsAdds(e.changedTouches[0].clientX,e.changedTouches[0].clientY)


// //let angle=Math.atan2(canvas.height / 2 - e.touches[0].clientY,canvas.width / 2 - e.touches[0].clientX);
// //let Fangle=Math.round(angle * (180/Math.PI))

// player.position.x = e.touches[0].clientX;
// player.position.y = e.touches[0].clientY;

// //mouse.x = e.x || e.touches[0].clientX - (window.innerWidth/2);
// //mouse.y = e.y || e.touches[0].clientY - (window.innerHeight/2);
// //mouse.y = changedTouches[0].clientY;
// //console.log("x : ",mouse.x);
// //console.log("y : ",mouse.y);
// //console.log("angle : ",Math.floor(angle));

// //window.console.log(window.Math.floor(window.Math.random() * 67 + 1))


// })





}


}

//gameLoop()







