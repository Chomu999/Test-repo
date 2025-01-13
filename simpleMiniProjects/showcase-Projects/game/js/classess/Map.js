
// let MyArr=[]
// let MyStr=''

// for(let i=0;i<10;i++){
// // MyArr.push([])
// for(let j=0;j<10;j++){

// // (i==j||i==j) ? MyStr += "8" : MyStr+= (j==0||j==9) ? '8' : '0'
// // 8 is the border boundiry
// (i==0||i==9) ? MyStr += "8" : MyStr+= (j==0||j==9) ? '8' : '0'

// //MyArr[i].push(i)
// }
// MyStr +='\n'
// }



Array.data2d=(target)=>{
const Arr=[]
for(let i=0;i<target;i++){
Arr.push([])
for(let j=0;j<target;j++){
Arr[i].push(j)
}
}
return Arr;
}

// const AG= Array.data2d(10)



class MapBluePrint{
constructor({color='green',position={x:0,y:0},width=20,height=20}){
this.position=position
this.width=width
this.height=height
this.isDeath=false;
this.velocity={x:0,y:0}
this.color=color
}

draw(c){
c.fillStyle=this.color
c.fillRect(this.position.x,this.position.y,this.width,this.height)
}
update(){
this.position.x += this.velocity.x
this.position.y += this.velocity.y
}

}

class Map extends MapBluePrint{
constructor({color='green',position={x:0,y:0},width=20,height=20}){
super({color,position,width,height})
this.isAloo=true
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