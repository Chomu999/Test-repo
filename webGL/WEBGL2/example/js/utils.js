
const canvas=document.querySelector("canvas");
const gl=canvas.getContext("webgl2");

//console.log(gl)


//

canvas.width=innerWidth;
canvas.height=innerHeight;

//
// random number function utils
class Rand{

//
static float(min=1,max=5){
return Math.random() * (max-min) + min;
}

static int(min=1,max=5){
return Math.floor(Rand.float(min,max));
}

static color(min=1,max=5){
return Math.floor(Rand.float(min,max));
}

}






























// my simple vertex buffer
class VB{
constructor(size){
this.vbo=gl.createBuffer();

this.size=size;

gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
gl.bufferData(gl.ARRAY_BUFFER, this.size, gl.STATIC_DRAW);
}
//
Delete(){
gl.deleteBuffer( this.vbo);
}
//
Bind(){
gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
gl.bufferData(gl.ARRAY_BUFFER, this.size, gl.STATIC_DRAW);
}
//
Unbind(){
gl.bindBuffer(gl.ARRAY_BUFFER, null);
}

}


//my simple index buffer
class IB{
constructor(size){
this.ibo=gl.createBuffer();
this.size=size;
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.size, gl.STATIC_DRAW);

}
//
Delete(){
gl.deleteBuffer( this.ibo);
}
//
Bind(){
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.size, gl.STATIC_DRAW);
}
//
Unbind(){
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}
}


//my simple VertexBufferElement hepler
class VertexBufferElement{
constructor(){
this.type;
this.count;
this.normalized;
}

static GetSizeOfType(type){
let result=0;

if(type==gl.FLOAT) result=4;
else if(type==gl.UNSIGNED_BYTE) result=1;
else if(type==gl.UNSIGNED_SHORT) result=4;
else if(type==gl.UNSIGNED_INT) result=4;

return result;
}



}

//
// my simple VertexBufferLayout 
class VertexBufferLayout{
constructor(){
this.m_Elements=[];

//for(let i=0;i<1;i++){
 //this.Push();
 //Things[i]
 //this.n_Elements.push(new VertexBufferElement())
//}
this.m_stride;


}

Push(type, count, normalized){


this.m_Elements.push({
 count:count, type:type, normalized:normalized
})
this.m_stride += VertexBufferElement.GetSizeOfType(normalized)

}

static glLayout( noc, locs, offset){

const length = noc[noc.length-1];

for(let i=0;i<noc.length-1; i++){

gl.enableVertexAttribArray(locs[i]);
gl.vertexAttribPointer(
  locs[i], noc[i],
  gl.FLOAT, gl.FALSE,
  length*Float32Array.BYTES_PER_ELEMENT, offset[i]*Float32Array.BYTES_PER_ELEMENT );
}

}

}



// my simple vertex array
class VA{
constructor(){

this.va=gl.createVertexArray();
gl.bindVertexArray(this.va);
}
//
Delete(){
gl.deleteVertexArray(this.va);
}
//
Bind(){
gl.bindVertexArray(this.va);
}
//
Unbind(){
gl.bindVertexArray(null);
}
//
LinkVBO(vbo, layout){
//this.Bind();
vbo.Bind();


gl.enableVertexAttribArray(layout);
gl.vertexAttribPointer(layout, 3,
  ,gl.FLOAT, gl.FALSE, 0*4, 0*4);

vbo.Unbind();
}


}




// my simple shader Program hepler
class Shader{
//
static compileShader(type,src){
const id=gl.createShader(type);
gl.shaderSource(id, src);
gl.compileShader(id);

if(!gl.getShaderParameter(id, gl.COMPILE_STATUS)){
throw new Error(`${type==35633?"VERTEX":"FRAGMENT" } Shader compilation failed: ${gl.getShaderInfoLog(id)}`);
gl.deleteShader(id);
return -1;
}
return id;
}
//
static createProgram(vsT,fsT){

//let s=Shader.GetShaderText(domElmt)
let Prog=gl.createProgram();
let vs=Shader.compileShader(gl.VERTEX_SHADER,vsT)
let fs=Shader.compileShader(gl.FRAGMENT_SHADER,fsT)

gl.attachShader(Prog,vs);
gl.attachShader(Prog,fs);


//Check if successful
gl.linkProgram(Prog);
if(!gl.getProgramParameter(Prog, gl.LINK_STATUS)){
throw new Error("Error creating shader program.",gl.getProgramInfoLog(Prog));
gl.deleteProgram(Prog);
return -1;
}


// Check agine b/w/n
gl.validateProgram(Prog);
if(!gl.getProgramParameter(Prog, gl.VALIDATE_STATUS)){
throw new Error("Error Validating Program", gl.getProgramInfoLog(Prog));
gl.deleteProgram(Prog);
return -1;
}




gl.deleteShader(vs);
gl.deleteShader(fs);

return Prog;
}
//
static GetShaderText(dom){

let shaderDOM=document.body.querySelector(dom);
const obj={}


for(const i of shaderDOM.children){
obj[i.getAttribute("data-glsl-shader")]=i.innerText;
}
return obj;
}

}


// my simple shader Program
class shaderUtils{
constructor(vsT, fsT){
 this.ID=Shader.createProgram(vsT, fsT)
}
 
//
Delete(){
gl.deleteProgram(this.ID);
}
//
Bind(){
gl.useProgram(this.ID);
}
//
Unbind(){
gl.useProgram(null);
}


SetUniform1i(name,value){
 gl.uniform1i(this.GetULoc(name),value);
}

SetUniform1f(name,value){
 gl.uniform1f(this.GetULoc(name),value);
}

SetUniform4fv(name,value){
 gl.uniform4fv(this.GetULoc(name),value);
}

SetUniformMat4fv(name,value){
 gl.uniformMatrix4fv(this.GetULoc(name),gl.FALSE,value);
}


GetULoc(name){
 return gl.getUniformLocation(this.ID,name);
}

}




//my simple Texture
class Texture{
constructor(id){

this.image=document.getElementById(id)//new Image();
//this.image.src=src;

this.tbo=gl.createTexture();

gl.bindTexture(gl.TEXTURE_2D, this.tbo);
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(
gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
gl.UNSIGNED_BYTE,
this.image
);

gl.bindTexture(gl.TEXTURE_2D, null);

}




//
Delete(){
gl.deleteTexture(this.tbo);
}

//
Bind( unit=0){
gl.bindTexture(gl.TEXTURE_2D, this.tbo);
gl.activeTexture(gl.TEXTURE0+unit);
}
//
Unbind(){
gl.bindTexture(gl.TEXTURE_2D, null);

}

}


//my simple Camera
class Camera{
constructor( Width, Height, Position){


this.Width = Width;
this.Height = Height;
this.Position = Position;


this.CameraMat=mat4.create();
this.Orientation=vec3.fromValues(0.0, 0.0, -1.0);
this.Up=vec3.fromValues(0.0, 1.0, 0.0);

this.Sensitivity=100.0;
this.Speed=0.05;

this.FirstClick=true;
//this.World=mat4.create();
//this.View=mat4.create();
//this.Proj=mat4.create();




}

UpdateMatrix(deg, near, far){

let View=mat4.create();
let Proj=mat4.create();

mat4.perspective(Proj,
glMatrix.toRadian(deg),
this.Width / this.Height,
near, far);

//let idk=vec3.add(vec3.create() ,this.Up, this.Orientation);

mat4.lookAt(View,
this.Position,
//[0, 1, 0],

vec3.mul(vec3.create(),this.Position, this.Orientation),
//this.Up

vec3.mul(vec3.create() ,this.Position , this.Up)
);

//console.log(vec3.add(vec3.create() ,this.Position, this.Orientation));
mat4.mul(this.CameraMat, Proj, View);

}

Matrix(shader, uniform){

shader.SetUniformMat4fv(uniform, this.CameraMat);

}

//Inputs for Camera
Inputs(arr,crood){



// pos xyz
{
 
if(arr.indexOf("FORWARD") > -1) this.Position[2] -= this.Speed;


if(arr.indexOf("LEFT") > -1) this.Position[0] -= this.Speed;


if(arr.indexOf("SHIFT") > -1){

}

if(arr.indexOf("RIGHT") > -1) this.Position[0] += this.Speed;


if(arr.indexOf("BACKWARD") > -1) this.Position[2] += this.Speed;


if(arr.indexOf("UP") > -1) this.Position[1] += this.Speed;


if(arr.indexOf("DOWN") > -1) this.Position[1] -= this.Speed;


}






}


}



//my simple Renderer
class Renderer{
constructor(){

}

Draw(shader, vao, ibo, vbo){

//gl.uniform4fv(uniformLoc.u_color,[
// color.r, color.g, color.b, 1.0
//]);


shader.Bind();


vao.Bind();
ibo.Bind();
vbo.Bind();

gl.drawElements(gl.TRIANGLES,6,gl.UNSIGNED_SHORT, 0);
}


Clear(){

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
}
}




class Object3D{
constructor(){

}

}


class Box{
constructor(){

}
}

class Matrial{
constructor(){

}


}


class Mesh{
constructor(){

}
}











//Shader Maker Code




const ShaderCodes={


}


function getUnion(mat){
if(!mat) return;

let Union=[[],[],[],[]];
for(let r=0;r<4;r++){
for(let c=0;c<4;c++){
Union[c].push(mat[c+r*4]);
}
}
return Union;
}

//let myUnion=getUnion(TestMat4x4);

async function getData(url){
const result=await fetch(url);
return  await result.text()
}