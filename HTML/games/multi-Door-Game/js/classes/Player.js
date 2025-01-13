




class NewBox{
constructor({position,width=20,height=20,color='orange'}){

this.position=position;
this.width=width;
this.height=height;
this.color=color;
}
draw(ctx){

ctx.fillStyle=this.color;
ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
}

}






class NewHuman extends NewBox{
constructor({position,width=20,height=20,color}){

super({position,width,height,color});

this.velocity={x:0,y:0};
this.isJumping=false;
this.weight=0.5;

}

update(){




this.position.x += this.velocity.x;
this.position.y += this.velocity.y;


//gravity code here
if(this.position.y + this.height + this.velocity.y <= canvas.height){

//this.velocity.y += gravity;
this.velocity.y += this.weight;
}
else this.velocity.y = 0;


//Jumping code here
if(this.isJumping && this.velocity.y >= 0) this.velocity.y = -28;

}


}




/////////////////////////////

class Player{
constructor(){

}

}