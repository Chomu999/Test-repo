import {gl} from "./gl.js"


const loadFile=async(_url, type="text")=>{
let file=await fetch(_url);

if(type.toUpperCase() == "TEXT" ) return await file.text();
else if(type.toUpperCase() == "JSON" ) return await file.json();
else if(type.toUpperCase() == "ARRAYBUFFER" ) return await file.arrayBuffer();

}

const parseShader =(shader, vp,fp) => {
let vertex = shader.slice( vp.length + shader.indexOf(vp), shader.indexOf(fp) )
let fragment =  shader.slice(fp.length + shader.indexOf(fp))
return {vertex, fragment};
}

const getShader = async(Path) =>{
let File = await loadFile(Path);
let shader=parseShader(File, "//VERT//\n", "//FRAG//\n");

return shader;
}


//let shader=await=loadFile("ur shader file path", by default is text.. But u can put json and arrayBuffer)
//let final=parseShader(shader, "//VERT//", "//FRAG//");

class VA{
constructor(){
this.ID=gl.createVertexArray();
gl.bindVertexArray( this.ID);
}

Bind(){
gl.bindVertexArray( this.ID);
}

Unbind(){
gl.bindVertexArray( null);
}

Delete(){
gl.deleteVertexAarray( this.ID)
}

linkAttrib(vbo, location, numOfCompnents, stride, offset){

if(vbo) vbo.Bind()
gl.vertexAttribPointer(location, numOfCompnents, gl.FLOAT, gl.FALSE, stride, offset)
gl.enableVertexAttribArray(location)

}


}

class VB{
constructor(VD){
this.ID=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, this.ID);
gl.bufferData(gl.ARRAY_BUFFER, VD, gl.STATIC_DRAW);
}

Bind(){
gl.bindBuffer(gl.ARRAY_BUFFER, this.ID);
}
Unbind(){
gl.bindBuffer(gl.ARRAY_BUFFER, null);
}
Delete(){
gl.deleteBuffer(this.ID)
}

}

class EB{
constructor(ED){
this.ID=gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ID);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ED, gl.STATIC_DRAW);
}

Bind(){
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ID);
}
Unbind(){
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}
Delete(){
gl.deleteBuffer(this.ID);
}

}



class Program{
constructor(vs, fs){
this.ID=Program.CP( vs, fs )
}

Bind(){
gl.useProgram(this.ID)
}
Unbind(){
gl.useProgram(null)
}
Delete(){
gl.deleteProgram(this.ID)
}


static CS(type, source){
let vof= type==gl.VERTEX_SHADER?"VERTEX":"FRAGMENT";
let ID=gl.createShader(type);
gl.shaderSource(ID,source);
gl.compileShader(ID);

if(!gl.getShaderParameter(ID, gl.COMPILE_STATUS)){
console.log(vof , gl.getShaderInfoLog(ID))
console.log(vof , gl.getShaderSource(ID))
}

return ID;
}

static CP(vSource, fSource){

let vs=Program.CS(gl.VERTEX_SHADER, vSource);

let fs=Program.CS(gl.FRAGMENT_SHADER, fSource);

let ID=gl.createProgram();

gl.attachShader(ID, vs);

gl.attachShader(ID, fs);

gl.linkProgram(ID);
//
//gl.dettachShader(vs)
//gl.dettachShader(fs)
//gl.deleteShader(vs)
//gl.deleteShader(fs)
//
if(!gl.getProgramParameter(ID, gl.LINK_STATUS)){
console.log(gl.getProgramInfoLog(ID));
}

gl.useProgram(ID);
gl.validateProgram(ID);

if(!gl.getProgramParameter(ID, gl.VALIDATE_STATUS)){
console.log(gl.getProgramInfoLog(ID));
}

//gl.useProgram(Prog);

return ID;

}

}


class Texture{
constructor(Slot, uniLoc,Img){

this.ID=gl.createTexture()
this.Slot=Slot;
gl.bindTexture(gl.TEXTURE_2D, this.ID)
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)


gl.uniform1i(uniLoc, Slot)



gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, Img);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)

gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)

}

Bind(){
gl.bindTexture(gl.TEXTURE_2D, this.ID)
gl.activeTexture(gl.TEXTURE0+this.Slot)
}
Unbind(){
gl.bindTexture(gl.TEXTURE_2D, null)
}
Delete(){
gl.deleteTexture(this.ID)
}
}



class Material{
constructor(){

}
}

class Geometry{
constructor(){

}
}

























const Materials={

}

const Geometrices={

}



const UTILS={
loadFile ,
parseShader ,
getShader,
Tool:{
VA,
VB,
EB,
Texture,
Program,
},
Materials,
Geometrices,

}

export default UTILS;

/* 

[]
Array []
length: 0
[[Prototype]]: Array(0)
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: 
*/