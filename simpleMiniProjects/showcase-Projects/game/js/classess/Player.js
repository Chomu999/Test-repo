


class Humen{
constructor({color='red',position={x:99,y:99},radius=10}){
this.position=position
this.radius=radius
this.isDeath=false;
this.velocity={x:0,y:0}
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

class Villager extends Humen{
constructor({color='red',position={x:99,y:99},radius=10,health=100}){
super({color,position,radius})
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





class Player extends Villager{
constructor({color='red',position={x:99,y:99},radius=10,health=100}){
super({color,position,radius,health})
}
draw(c){
super.draw(c)
}

update(){
super.update()
}

}