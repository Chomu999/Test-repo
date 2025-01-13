const HouseMaps=[]
for(let i=2;i<50;i++){

let radius=100

// HouseMaps.push({
// position:{
// x:randint(0,2)===1 ? (i*radius) : -(i*radius),
// y:randint(0,2)===1 ? (i*radius) : -(i*radius),
// },
// radius:radius,
// })

HouseMaps.push(
{
position:{
x:-(i*radius),
y:-(i*radius),
}
},
{
position:{
x:(i*radius),
y:(i*radius),
}
},
{
position:{
x:-(i*radius),
y:(i*radius),
}
},
{
position:{
x:(i*radius),
y:-(i*radius),
}
},

//
{
position:{
x:(i*radius),
y:0
}
},
{
position:{
x:-(i*radius),
y:0
}
},
{
position:{
x:0,
y:-(i*radius),
}
},{
position:{
x:0,
y:(i*radius),
}
},

)



}


class HouseBluePrint{
constructor({color='red',position={x:99,y:99},width=20,height=20}){
this.position=position
this.width=width
this.height=height
this.isDeath=false;
this.velocity={x:0,y:0}
this.color=color
this.hitbox={
    position:{
        x:this.position.x+this.width/2,
        y:this.position.y+this.height/2
    },
    radius:50
}
}

draw(c){
c.fillStyle=this.color
c.fillRect(this.position.x,this.position.y,this.width,this.height)
}
update(){
this.position.x += this.velocity.x
this.position.y += this.velocity.y

this.hitbox.position.x=this.position.x+this.width/2
this.hitbox.position.y=this.position.y+this.height/2


}

}

class House extends HouseBluePrint{
constructor({color,position={x:99,y:99},width=20,height=20}){
super({color,position,width,height})
}
draw(c){
c.beginPath()

// c.fillStyle=this.color
c.strokeStyle='#fff'
c.arc(this.hitbox.position.x,this.hitbox.position.y,this.hitbox.radius,0,Math.PI*2)
c.stroke()

super.draw(c)
c.closePath()
}

update(){

super.update()
}

}