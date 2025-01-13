
import {gl, canvas} from "./gl.js"
import * as ShaderSource from "./Shaders/Shaders.js"

// console.log(gl, canvas);
const _inti=(width, height)=>{

const errorContainer=document.createElement("div");

canvas.classList.add("canvas")
document.body.appendChild(canvas)
canvas.width=width
canvas.height=height

errorContainer.classList.add("error_box")
document.body.appendChild(errorContainer)
}

// show_Error for mobile device becuse phone's dos not have inspecter aka console.log()
const show_Error=(msg)=>{
console.log(msg)
let elmt=document.querySelector(".error_box")
if(!elmt) return -1;
elmt.innerHTML+=`<p>${msg}</p>`
}







const Storage={
VAOs:[],
VBOs:[],
EBOs:[],
TEXTUREs:[],
PROGRAMs:[],
}





//Random utils functions
class Rand{

static Float(min=1, max=2){
return Math.random() * (max-min+1) + min;
}
static Int(min=10, max=20){
return Math.floor(Rand.Float(min, max));
}

static Choice(...args){
return args[Rand.Int(0, args.length - 1)]
}
}



// this Program class helps to make shader Programs
class Program{
constructor(Shader){
this.ID=this.#Make_Program(Shader.vertex, Shader.fragment);
Storage.PROGRAMs.push(this);
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


#Make_Shader(Type, Source){
const vof = Type==gl.VERTEX_SHADER?"vertex":"fragment";
const Shader=gl.createShader(Type)
gl.shaderSource(Shader, Source)
gl.compileShader(Shader)
if(!gl.getShaderParameter(Shader, gl.COMPILE_STATUS))
{
show_Error(`${vof} shader error : ${gl.getShaderInfoLog(Shader)}`)
show_Error(`${vof} shader source : ${gl.getShaderSource(Shader)}`)
}
return Shader;
}

#Make_Program(VertexShaderSource, FragmentShaderSource){
const VertexShader=this.#Make_Shader(gl.VERTEX_SHADER, VertexShaderSource);
const FragmentShader=this.#Make_Shader(gl.FRAGMENT_SHADER, FragmentShaderSource);

const ShaderProgram=gl.createProgram();

gl.attachShader(ShaderProgram, VertexShader)
gl.attachShader(ShaderProgram, FragmentShader)

gl.linkProgram(ShaderProgram)
if(!gl.getProgramParameter(ShaderProgram, gl.LINK_STATUS))
{
show_Error(`link error : ${gl.getProgramInfoLog(ShaderProgram)}`)
}
gl.useProgram(ShaderProgram)
gl.validateProgram(ShaderProgram)
if(!gl.getProgramParameter(ShaderProgram, gl.VALIDATE_STATUS))
{
show_Error(`validate error : ${gl.getProgramInfoLog(ShaderProgram)}`)
}
return ShaderProgram;
}


}


class Texture{
constructor( imgData){

this.ID=gl.createTexture();

//gl.activeTexture(gl.TEXTURE0+slot)

gl.bindTexture(gl.TEXTURE_2D, this.ID);
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !0);
//gl.uniform1i(loc, slot);

gl.texImage2D(gl.TEXTURE_2D, 0,
gl.RGBA, gl.RGBA,
gl.UNSIGNED_BYTE, imgData);

gl.generateMipmap(gl.TEXTURE_2D);

//gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
//gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);


//gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
//gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);


gl.bindTexture(gl.TEXTURE_2D, null);

Storage.TEXTUREs.push(this);
}

Bind(texUnit=0){
gl.activeTexture(gl.TEXTURE0+texUnit);
gl.bindTexture(gl.TEXTURE_2D, this.ID)
}

Unbind(){
gl.bindTexture(gl.TEXTURE_2D, null)
}

Delete(){
gl.deleteTexture(this.ID)
}
}



//VA class helps to make VertexArrays easy
class VA{
constructor(){
this.ID=gl.createVertexArray();
Storage.VAOs.push(this);
}

Bind(){
gl.bindVertexArray(this.ID)
}

Unbind(){
gl.bindVertexArray(null)
}

Delete(){
gl.deleteVertexArray(this.ID)
}

LinkAttrib(vbo, layoutLocation, numberOfComponents, type, normalize, stride, offset){

VA.LinkAttrib(vbo, layoutLocation, numberOfComponents, type, normalize, stride, offset);

}

static LinkAttrib(vbo=!1, layoutLocation, numberOfComponents, type, normalize, stride, offset){


if (vbo instanceof VB){
vbo.Bind();
//show_Error("va hai")
}
gl.enableVertexAttribArray(layoutLocation)
gl.vertexAttribPointer(layoutLocation, numberOfComponents,
type, normalize,
stride, offset);



}

}

//VB class helps to make VertexBuffer easy
class VB{
constructor(vertexData){
this.ID=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, this.ID);
gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

Storage.VBOs.push(this)
}


Bind(){
gl.bindBuffer(gl.ARRAY_BUFFER, this.ID);
}

Unbind(){
gl.bindBuffer(gl.ARRAY_BUFFER, null);
}

Delete(){
gl.deleteBuffer(gl.ARRAY_BUFFER, this.ID);
}

}

//EB class helps to make ElementBuffer easy
class EB{
constructor(indexData){
this.ID=gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ID);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexData, gl.STATIC_DRAW);

Storage.EBOs.push(this)
}


Bind(){
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ID);
}
Unbind(){
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}
Delete(){
gl.deleteBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ID);
}

}











//this loop class helps to make loops easy
class Loop{

static animate;

static lastTimePass=performance.now();
static startLoop(){

let currentTimePass =performance.now();

let dt = (currentTimePass - Loop.lastTimePass) / 1000;

Loop.lastTimePass = currentTimePass;
//show_Error(dt)

Loop.animate(dt);
requestAnimationFrame(Loop.startLoop);

}

}


class Object3D{
constructor(){
this.Childrens=[];
}

update(dt=0){
this.Position[0] += this.Velocity[0] * dt;
this.Position[1] += this.Velocity[1] * dt;
this.TimeRemaning -= dt;
}

add(...child){
this.Childrens(...child)
}

}



//Matrials
class Matrial{
constructor(){

}

Bind(){
this.Prog.Bind()
}
}


class SimpleMatrial extends Matrial{
constructor(){
super()
this.Prog=new Program(ShaderSource.Simple)
}
}

//Geometrys
class Geometry{
constructor(){

}
}

//Mashs
class Mash{

constructor(m, g){
this.m = m;
this.g = g;

}

render(){

}

}

// Scenes
class Scene extends Object3D{
constructor(){

}
}


class Renderer{
constructor(){

}


render(scene=0, camera=0){
if(!scene) return -1;

scene.Childrens.forEach((child)=>{

})


}


}






const PositionVertexData1=new Float32Array([
//		x	y
	 0.0,  0.5,
	-0.5, -0.5,
	 0.5, -0.5,
])

const PositionVertexData2=new Float32Array([
// x 	y
	 0.5,  0.5,
	-0.5,  0.5,
	-0.5, -0.5,
	 0.5, -0.5,
])


const ColorVertexData1=new Uint8Array([
//	  r 	g    b    a
	 255,  0, 255, 255,
	 255,  255, 0, 255,
	 0,  255, 255, 255,
])


const ColorVertexData2=new Uint8Array([
//	  r    g    b     a
	 255, 0,  255,  255,
	 255, 0,  0,  255,
	 255,  0,  0,  255,
]);

const ColorVertexData3=new Uint8Array([
//	  r    g    b     a
	 255,  165,  0, 255,
	 255,  255,  0,  255,
	 255,  255,  0,  255,
])

const UVVertexData1=new Float32Array([
//	  u    v
	 0.0,  1.0, 
	 0.0,  0.0,
	 1.0,  0.0,
]);

const UVVertexData2=new Float32Array([
//	  u    v
	1,  1, 
	0,  1,

	0, 0,
	1, 0,
]);


const imgData=new Uint8Array([
//	  r    g    b     a
	 255,  0,  0,
	 255,  0,  0,
	 255,  0,  0,
	 255,  0,  0,
])

const indicesData1=new Uint8Array([
0, 1, 2,
2, 3, 0,
])
















const func={
showError: show_Error,
init: _inti,
Rand,

}


const graphicsTool={
VB,
VA,
EB,
Texture,
Program,
}












export {canvas, gl};

export {graphicsTool};

export {SimpleMatrial};

export {func};
export {Storage};
