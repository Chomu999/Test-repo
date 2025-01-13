

class Game{

constructor({width=200,height=200}){

this.width=width
this.height=height
this.control = new Control(this)




this.player = new NewHuman({position:{x:200,y:0},width:40,height:40,color:"#FF00D3"});

this.LeftPiller = new NewBox({position:{x:-80,y:0},width:40,height:this.height,color:"#FF7800"});

this.RightPiller = new NewBox({position:{x:this.width + 3*40,y:0},width:40,height:this.height,color:"#FF7800"});



this.player.color=`hsl(${Math.floor(Math.random() * 360)},100%,50%,1)`;

}




draw(c){


const everyThing=[this.player,this.LeftPiller,this.RightPiller]

// this.LeftPiller.draw(c);
// this.RightPiller.draw(c);

// this.player.draw(c);

everyThing.forEach(o=>o.draw(c))

}

update(){



const everyThing=[this.player]

// this.LeftPiller.draw(c);
// this.RightPiller.draw(c);

// this.player.draw(c);

everyThing.forEach((o) =>{
o.update()
})





if(this.output.indexOf('lefl') > -1){
this.player.velocity.x = -10
}


else if(this.output.indexOf('right') > -1){
this.player.velocity.x = 10
}


else if(this.output.indexOf('jump') > -1){
this.player.velocity.y = 10
}





if(ISRectCollision(this.LeftPiller,this.player)){
this.player.position.x = this.width+this.player.width;
}
if(ISRectCollision(this.RightPiller,this.player)){
this.player.position.x =  -this.player.width;
}









}

}