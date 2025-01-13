class Bird{
constructor(c){
this.x=60
this.y=15
this.color=c
this.width=15
this.height=15
this.weight=0.66
this.losin=false
this.lifePoint=2
this.lifePointSource=0
this.speed={x:0,y:0}
}

draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.x,this.y,this.width,this.height)

}
update(){
this.draw()

let curve = Math.sin(angle) * 3;

if(this.y > cvs.height - (this.height * 2) + curve){
this.y = cvs.height - (this.height * 2) + curve;
this.speed.y = 0
}
else{
this.speed.y += this.weight
this.speed.y *= 0.89
this.y += this.speed.y
}


if(this.y < 0 + this.height){
this.y = 0 + this.height;
this.speed.y = 0
}

if(movin){ this.flap()}


}


flap(){

this.speed.y -= gameSpeed
}

}




const bird=new Bird('#FF00D9')


class Block{
constructor(x,y){
this.x=x
this.y=y
this.width=1
this.height=cvs.height*2
}

draw(){
ctx.fillStyle='blue'
ctx.fillRect(this.x,this.y,this.width,this.height)

}

}


const block=new Block(bird.x,0)
const Endblock=new Block(-30,0)
const HealthLosinBar=new Block(bird.x,0)
