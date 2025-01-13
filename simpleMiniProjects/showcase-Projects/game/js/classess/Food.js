


class Food{
constructor({color='red',position={x:99,y:99},radius=10,enargy=10}){
this.position=position
this.radius=radius
this.isDeath=false;
this.velocity={x:randint(1,-2),y:randint(1,-2)}
this.color=color
}

draw(c){
c.fillStyle=this.color
c.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2)
c.fill()
}
update(){
this.position.x += this.velocity.x
this.position.y += this.velocity.y
}

}

class Apple extends Food{
constructor({color='red',position={x:99,y:99},radius=10,enargy=10}){
super({color,position,radius,enargy})
this.health=health
}
draw(c){
c.beginPath()
super.draw(c)
c.closePath()
}

update(){
super.update()
}

}