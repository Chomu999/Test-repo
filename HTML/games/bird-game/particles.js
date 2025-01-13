class Parlicle{
constructor(){
this.x=bird.x
this.y=bird.y
this.size=randint(1,4)
this.color=`hsl(${hue},100%,50%,${Math.random()})`
this.weight=0.06
this.speed={x:0,y:0}
}
draw(){
ctx.fillStyle=this.color
ctx.beginPath()
ctx.arc(this.x,this.y,this.size,0,Math.PI * 2)
ctx.fill()
}
update(){
this.draw()
this.x -= gameSpeed
this.speed.y -= this.weight
this.y += this.speed.y



if(this.size > 0.2){
this.size += 0.20;
}





}
}

let parlicles=[]

function handleParlicles(){
parlicles.unshift(new Parlicle())

parlicles.forEach((parlicle)=>{
parlicle.update()
})

if(parlicles.length>169)parlicles.pop()

}