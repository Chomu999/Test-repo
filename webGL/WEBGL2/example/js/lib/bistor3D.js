

//"use strict";

const canvas=document.createElement("canvas");
const gl=canvas.getContext("webgl2");
//

canvas.width=innerWidth;
canvas.height=innerHeight;




const Max_btn_size = 1024
const Max_mouse_btn_size = 32




Math.toRadian = a => a * Math.PI / 180;








class Webs{
constructor(canvas,gl){
this.gl=gl;
this.loop=false;
this._init();
}
_init(){
const gl=this.gl;

}

_raf(){
const gl=this.gl;


const animate=(dt)=>{
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
gl.clearColor(options.Glc[0]/255, options.Glc[1]/255, options.Glc[2]/255, options.Glc[3] );
gl.viewport(0,0,gl.canvas.width,gl.canvas.height);



}






let lastTime=1;
const GameLoop=(timeStamp)=>{

let deltaTime=timeStamp-lastTime;
lastTime+=timeStamp;

animate(deltaTime);

if(this.loop) window.requestAnimationFrame(GameLoop);
}

//protected:

GameLoop(0);

}

*engineStart(){
const gl=this.gl;

this._raf();

}

}



















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

this.vao=gl.createVertexArray();
//gl.bindVertexArray(this.vao);
this.Bind();

}
//
Delete(){
gl.deleteVertexArray(this.vao);
}
//
Bind(){
gl.bindVertexArray(this.vao);
}
//
Unbind(){
gl.bindVertexArray(null);
}
//
AddBuffer(vbo, layout){
this.Bind();
vbo.Bind();
let offset=0;

for(let i=0;i<layout.length;i++){

let element=layout[i];
console.log(element);
gl.enableVertexAttribArray(i);
gl.vertexAttribPointer(
  i, element.count,
  element.type, element.normalized,
  element.count * Float32Array.BYTES_PER_ELEMENT, 0);
offset += element.count;
}

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
constructor(src){

this.image=document.getElementById(src)//new Image();
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
Bind(){
gl.bindTexture(gl.TEXTURE_2D, this.tbo);
gl.activeTexture(gl.TEXTURE0);
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

Draw(shader, vao, ibo){

//gl.uniform4fv(uniformLoc.u_color,[
// color.r, color.g, color.b, 1.0
//]);


shader.Bind();


vao.Bind();
ibo.Bind();

gl.drawElements(gl.TRIANGLES,6,gl.UNSIGNED_SHORT, 0);
}


Clear(){

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
}
}






//my simple maths utils

//Vector

//vec2//
class Vec2{

//creating Vector 2
static create(x=0,y=0){
return {x, y, type:"vec2"};
}

//returning Vector 2
//add
static add(og, other){
const x=og.x + other.x;
const y=og.y + other.y;
return Vec2.create(x, y);
}
//sub
static sub(og, other){
const x=og.x - other.x;
const y=og.y - other.y;
return Vec2.create(x, y);
}
//mul
static mul(og, other){
const x=og.x * other.x;
const y=og.y * other.y;
return Vec2.create(x, y);
}
//div
static div(og,other){
const x=og.x / other.x;
const y=og.y / other.y;
return Vec2.create(x, y);
}

//modify left one
//addition
static addition(og, other){
og.x += other.x;
og.y += other.y;
}
//subrect
static subrect(og, other){
og.x -= other.x;
og.y -= other.y;
}
//multiply
static multiply(og, other){
og.x *= other.x;
og.y *= other.y;
}
//divide
static divide(og,other){
og.x /= other.x;
og.y /= other.y;
}


//-et
static et(og,other){
return (og.x == other.x && og.y == other.y);
}

//-net
static net(og,other){
return (og.x != other.x && og.y != other.y);
}

}
//vec2//


//vec3//
class Vec3{

//creating Vector 3
static create(x=0,y=0,z=0){
return {x, y, z, type:"vec3"};
}
//returning Vector 3
//add
static add(og, other){
const x=og.x + other.x;
const y=og.y + other.y;
const z=og.z + other.z;
return Vec3.create(x, y, z);
}
//sub
static sub(og, other){
const x=og.x - other.x;
const y=og.y - other.y;
const z=og.z - other.z;
return Vec3.create(x, y, z);
}
//mul
static mul(og, other){
const x=og.x * other.x;
const y=og.y * other.y;
const z=og.z * other.z;
return Vec3.create(x, y, z);
}
//div
static div(og,other){
const x=og.x / other.x;
const y=og.y / other.y;
const z=og.z / other.z;
return Vec3.create(x, y, z);
}

//modify left one
//addition
static addition(og, other){
og.x += other.x;
og.y += other.y;
og.z += other.z;
}
//subrect
static subrect(og, other){
og.x -= other.x;
og.y -= other.y;
og.z -= other.z;
}
//multiply
static multiply(og, other){
og.x *= other.x;
og.y *= other.y;
og.z *= other.z;
}
//divide
static divide(og,other){
og.x /= other.x;
og.y /= other.y;
og.z /= other.z;
}



//-et
static et(og,other){
return (og.x == other.x && og.y == other.y && og.z == other.z);
}

//-net
static net(og,other){
return (og.x != other.x && og.y != other.y && og.z != other.z);
}

}
//vec3//

//vec4//
class Vec4{

static create(x=0,y=0,z=0,w=1){
return {x, y, z, w, type:"vec4"};
}
//returning Vector 4
//add
static add(og, other){
const x=og.x + other.x;
const y=og.y + other.y;
const z=og.z + other.z;
const w=og.w + other.w;
return Vec4.create(x, y, z, w);
}
//sub
static sub(og, other){
const x=og.x - other.x;
const y=og.y - other.y;
const z=og.z - other.z;
const w=og.w - other.w;
return Vec4.create(x, y, z, w);
}
//mul
static mul(og, other){
const x=og.x * other.x;
const y=og.y * other.y;
const z=og.z * other.z;
const w=og.w * other.w;
return Vec4.create(x, y, z, w);
}
//div
static div(og,other){
const x=og.x / other.x;
const y=og.y / other.y;
const z=og.z / other.z;
const w=og.w / other.w;
return Vec4.create(x, y, z, w);
}

//modify left one
//addition
static addition(og, other){
og.x += other.x;
og.y += other.y;
og.z += other.z;
og.w += other.w;
}
//subrect
static subrect(og, other){
og.x -= other.x;
og.y -= other.y;
og.z -= other.z;
og.w -= other.w;
}
//multiply
static multiply(og, other){
og.x *= other.x;
og.y *= other.y;
og.z *= other.z;
og.w *= other.w;
}
//divide
static divide(og,other){
og.x /= other.x;
og.y /= other.y;
og.z /= other.z;
og.w /= other.w;
}


//-et
static et(og,other){
return (og.x == other.x && og.y == other.y && og.z == other.z && og.w == other.w);
}

//-net
static net(og,other){
return (og.x != other.x && og.y != other.y && og.z != other.z && og.w != other.w);
}


}
//vec4//


//Matrices
//mat4//
class Mat4{

//create
static create(){ return new Float32Array(16); }

//identity
static identity(mat=Mat4.create(), a=1){

mat[0+0*4]=a;
mat[1+1*4]=a;
mat[2+2*4]=a;
mat[3+3*4]=a;
mat[4+4*4]=a;


return mat;
}

static ortho(left, right, bottom, top, near, far){

let result=Mat4.identity();

result[0+0*4] = 2.0 / (right - left);
result[1+1*4] = 2.0 / (top - bottom);
result[2+2*4] = 2.0 / (near - far);


result[0+3*4] = (left + right) / (left - right);
result[1+3*4] = (bottom + top) / (bottom - top);
result[2+3*4] = (far + near) / (far - near);


return result;
}

static perspective(fov, acpect, near, fav){


let result=Mat4.identity();

let q= 1 / Math.tan(Math.toRadian(0.5 * fov))
let a= q/acpect;
let b= (near + far) / (near - far);
let c= (2.0 * near * far) / (near - far);

result[0+0*4] = a;
result[1+1*4] = q;
result[2+2*4] = b;
result[3+2*4] = -1.0;
result[2+3*4] = c;

return result;


}

//Inputs is vec3
static translation(translation){

let result=Mat4.identity();
result[0+3*4]=translation.x;
result[1+3*4]=translation.y;
result[2+3*4]=translation.z;
return result;

}

//Inputs is vec3
static scale(scale){
let result=Mat4.identity();
result[0+0*4]=scale.x;
result[1+1*4]=scale.y;
result[2+2*4]=scale.z;
return result;
}

//Inputs 0-360 , vec3
static rotation(angle, axis){
let result =Mat4.identity();

let r=Math.toRadian(angle);

let c=Math.cos(r), s=Math.sin(r), omc=1.0-c;

let x=axis.x, y=axis.y, z=axis.z;


result[0+0*4]= x * omc + c;
result[1+0*4]= y * x * omc + z * s;
result[2+0*4]= x * z * omc - y * s;

result[0+1*4]= x * y * omc - z * s;
result[1+1*4]= y * omc + c;
result[2+1*4]= y * z * omc + x * s;

result[0+2*4]= x * z * omc + y * s;
result[1+2*4]= y * z * omc - x * c;
result[2+2*4]=  z * omc + s;

return result;
}




//mul
static mul(og, other){

let result=Mat4.identity();

for(let y=0;y<4;++y){
 
for(let x=0;x<4;++x){

let sum=0;

for(let e=0;e<4;++e){

sum+=og[e+x * 4] * other[e+y * 4];

}

result[x+y * 4]=sum;

}

}

return result;

}


//multiply
static multiply(og, other){

//let result=Mat4.identity();

for(let y=0;y<4;++y){
 
for(let x=0;x<4;++x){

let sum=0;

for(let e=0;e<4;++e){

sum+=og[e+x * 4] * other[e+y * 4];

}

og[x+y * 4]=sum;

}

}

return og;

}



}
//mat4//








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




















let SPHR={

//type start here
type:{

//vertex
vertex:{

attribute:[
"vec3",
"vec3",
],

//uniforms
uniform:[
"mat4",
"",
],

//varyings
varying:[
"vec3",
"",
],

},

//fragment
fragment:{

attribute:[
"",
"",
],

uniform:[
"sampler2D",
"",
],

varying:[
"vec3",
"",
],

},

},
//type end here


//names start here
name:{
//vertex
vertex:{

attribute:[
"a_Pos",
"a_Color",
],

uniform: [
"camera_mat",
""
],

varying:[
"v_Color",
""
],

},


//fragment
fragment:{

attribute:[
"",
""
],

uniform:[
"tex0",
"",
],

varying:[
"v_Color",
"",
],

}

},
//names end here;

//values start here
value:{

//vertex
vertex:{
attribute:[

[0,0,0],

[1,0,0],

],

uniform:[

new Float32Array(16),

],

},


//fragment
fragment: {

uniform:[

0,

],

}

},
//values end here

Length: 3

};

const ShaderCodes={

template_vscode:`#version 300 es
precision mediump float;

//attribute//



//uniform//


//varying//



void main(){

gl_Position=vec4(a_pos, 1.0);

}

`,

template_fscode:`#version 300 es
precision mediump float;
out vec4 FragColor;



//uniform//


//varying//


void main(){

FragColor=vec4(v_color, 1.0);

}
`,











}


function ShaderMakerCode(SPHR){


let tempVertexAttributeStr="";
let tempFragmentAttributeStr="";

let tempVertexUniformStr="";
let tempFragmentUniformStr="";

let tempVertexVaryingStr="";
let tempFragmentVaryingStr="";




for(let i=0;i<SPHR.Length;++i){


//
if(SPHR.type.vertex.attribute[i] && SPHR.name.vertex.attribute[i] ){
tempVertexAttributeStr +=`in ${SPHR.type.vertex.attribute[i]} ${SPHR.name.vertex.attribute[i]};\n`;
}

if(SPHR.type.fragment.attribute[i] && SPHR.name.fragment.attribute[i] ){
tempFragmentAttributeStr +=`uniform ${SPHR.type.fragment.attribute[i]} ${SPHR.name.fragment.attribute[i]};\n`;
}

//
if(SPHR.type.vertex.uniform[i] && SPHR.name.vertex.uniform[i] ){
tempVertexUniformStr +=`uniform ${SPHR.type.vertex.uniform[i]} ${SPHR.name.vertex.uniform[i]};\n`;
}

if(SPHR.type.fragment.uniform[i] && SPHR.name.fragment.uniform[i] ){
tempFragmentUniformStr +=`uniform ${SPHR.type.fragment.uniform[i]} ${SPHR.name.fragment.uniform[i]};\n`;
}

//
if(SPHR.type.vertex.varying[i] && SPHR.name.vertex.varying[i] ){
tempVertexVaryingStr +=`out ${SPHR.type.vertex.varying[i]} ${SPHR.name.vertex.varying[i]};\n`;
}

if(SPHR.type.fragment.varying[i] && SPHR.name.fragment.varying[i] ){
tempFragmentVaryingStr +=`in ${SPHR.type.fragment.varying[i]} ${SPHR.name.fragment.varying[i]};\n`;
}


}

//let FragUniformCode=temFragUniCode;

let vsCode=ShaderCodes.template_vscode;
let fsCode=ShaderCodes.template_fscode;


//replace("//uniform//",FragUniformCode);

//let newVSC=temFragUniCode;


vsCode=vsCode.replace("//attribute//", tempVertexAttributeStr);
fsCode=fsCode.replace("//attribute//", tempFragmentAttributeStr);


vsCode=vsCode.replace("//uniform//", tempVertexUniformStr);
fsCode=fsCode.replace("//uniform//", tempFragmentUniformStr);


vsCode=vsCode.replace("//varying//", tempVertexVaryingStr);
fsCode=fsCode.replace("//varying//", tempFragmentVaryingStr);



return {vs: vsCode, fs: fsCode};
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

const bistor={
canvas:canvas,
gl:gl,
SC:ShaderCodes,
SMC:ShaderMakerCode,
getUnion : getUnion,
MathUtils: {

// vector's
vec2: Vec2,
vec3: Vec3,
vec4: Vec4,

//matrice's


mat4: Mat4,

},
method:{},
//w:Webs
}

//console.log("game is too good thanx for playing with us we hope we will play agian as a team not as opanent");
//gg()









export  {bistor};
//export default bistor;
