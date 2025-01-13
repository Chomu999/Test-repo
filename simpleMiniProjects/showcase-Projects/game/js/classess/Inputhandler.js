

class InputHandler{
constructor(){
this.keys=[];
this.ISpress=false;
this.touchs={position:{x:0,y:0}};
this.keyType={left:'left',right:'right',up:'up',down:'down'};

this.move={left:false,right:false,up:false,down:false,speed:2}

this.touchsDistens=50;

document.addEventListener('touchstart', e => {

this.ISpress=true;
this.touchs.position.x = e.touches[0].pageX;
this.touchs.position.y = e.touches[0].pageY;

})

document.addEventListener('touchmove', e => {

//this.touchs.position.x = e.touches[0].pageX;
//this.touchs.position.y = e.touches[0].pageY;


const ps={
    x:e.touches[0].pageX,
    y:e.touches[0].pageY
}



//up
if((this.touchs.position.y > (this.touchsDistens + ps.y)) && this.keys.indexOf('up') === -1){
this.keys=[]

this.keys.push('up');
this.move.up=true

// this.move.up=false
this.move.left=false
this.move.down=false
this.move.right=false


}


//left
else if((this.touchs.position.x > (this.touchsDistens + ps.x)) && this.keys.indexOf('left') === -1){
this.keys=[]
this.keys.push('left');
this.move.left=true

this.move.up=false
// this.move.left=false
this.move.down=false
this.move.right=false



}


//down
else if(((this.touchs.position.y + this.touchsDistens) < ps.y) && this.keys.indexOf('down') === -1){
this.keys=[]
this.keys.push('down');

this.move.up=false
this.move.left=false
// this.move.down=false
this.move.right=false

this.move.down=true


}



//right
else if(((this.touchs.position.x + this.touchsDistens) < ps.x) && this.keys.indexOf('right') === -1){
this.keys=[]
this.keys.push('right');

this.move.up=false
this.move.left=false
this.move.down=false
// this.move.right=false

this.move.right=true


}
else{


ps.x=0
ps.y=0

// this.move.up=false
// this.move.left=false
// this.move.down=false
// this.move.right=false

}






//console.log(this.keys);

})



document.addEventListener('touchend', e => {

this.ISpress=false;

this.move.up=false
this.move.left=false
this.move.down=false
this.move.right=false


/*
if(this.keys.indexOf('up') > -1){
this.keys.splice(this.keys.indexOf('up'),1);
}

if(this.keys.indexOf('left') > -1){
this.keys.splice(this.keys.indexOf('left'),1);
}

if(this.keys.indexOf('down') > -1){
this.keys.splice(this.keys.indexOf('down'),1);
}

if(this.keys.indexOf('right') > -1){
this.keys.splice(this.keys.indexOf('right'),1);
}
*/

this.keys=[]
//this.touchs.Current={x:0,y:0};

//console.log(this.keys);


})


}


}
