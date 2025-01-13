


const canvasResizer=(canvas)=>{
let cSize = (innerWidth > innerHeight)?innerHeight:innerWidth;
canvas.width=cSize;
canvas.height=cSize;
}


const { PI:pi, min, max, cos, abs, sin, tan, random, floor, ceil, } = Math;



class Rand{

static Float(min=1, max=2){
return random() * (max-min+1) + min;
}

static Int(min=10, max=20){
return floor(Rand.Float(min, max));
}

static Choice(...args){
return args[Rand.Int(0, args.length - 1)];
}

}


class ShaderUtil{


static createGLShader(gl, type, src){
let vof = type == gl.VERTEX_SHADER ? "VERTEX": "FRAGMENT";

const shader = gl.createShader(type)
gl.shaderSource(shader, src);
gl.compileShader(shader);

if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
console.error(`${vof} Shader compilation failed: ${gl.getShaderInfoLog(shader)}`);
gl.deleteShader(shader);
return null;
}
return shader;
}


static createGLProgram(gl, vShaderSource, fShaderSource){





let vs = ShaderUtil.createGLShader(gl, gl.VERTEX_SHADER, vShaderSource);


let fs = ShaderUtil.createGLShader(gl, gl.FRAGMENT_SHADER, fShaderSource);


//Link shaders together
const prog = gl.createProgram();

gl.attachShader(prog,vs);
gl.attachShader(prog,fs);
gl.linkProgram(prog);


//Check if successful
if(!gl.getProgramParameter(prog, gl.LINK_STATUS)){
console.error("Error creating shader program", gl.getProgramInfoLog(prog));
gl.deleteProgram(prog); return null;
}


gl.validateProgram(prog);
if(!gl.getProgramParameter(prog,gl.VALIDATE_STATUS)){
console.error("Error validating program", gl.getProgramInfoLog(prog));
gl.deleteProgram(prog); return null;
}


//Can delete the shaders since the program has been made.

gl.detachShader(prog, vs);
//, detaching might cause issues on some browsers, Might only need to delete.
gl.detachShader(prog, fs);
gl.deleteShader(vs);
gl.deleteShader(fs);

//gl.useProgram(null);

return prog;


}




static createGLBuffer(gl,arr){
const buffObj = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffObj);
gl.bufferData(gl.ARRAY_BUFFER, arr, gl.STATIC_DRAW);

//gl.bindBuffer(gl.ARRAY_BUFFER, null);

return buffObj;
}

static createGLTexture(gl,imgSrc){



const ImgTexture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, ImgTexture);
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(
gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
gl.UNSIGNED_BYTE,
imgSrc
);
gl.bindTexture(gl.TEXTURE_2D, null);





return ImgTexture;
}

static ACTIVEGLTexture(gl,TexTure){
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D,TexTure);

}


static getGLAtrbLoc(gl,myProg,velName){
return gl.getAttribLocation(myProg, velName);
}

static getGLUnfmLoc(gl,myProg,velName){
return gl.getUniformLocation(myProg,velName);
}

static createRectArray(x=0,y=0,w=1,h=1){

return new Float32Array([
    x,y,
    x+w,y,
    x,y+h,

    x,y+h,   //r(),r(),r(),
    x+w,y,
    x+w,y+h,
]);
}






}




//


class MakeGLProgram{

constructor(gl,vSRc,fSRc){

let myVertShr= ShaderUtil.createGLShader(gl,vSRc,gl.VERTEX_SHADER);

let MyFragShr = ShaderUtil.createGLShader(gl,fSRc, gl.FRAGMENT_SHADER);


this.Program = ShaderUtil.createGLProgram(gl,myVertShr,MyFragShr);


}


}


//




class Sprite{
constructor(gl,imgUrl,vsh,fsh){
this.isLoaded=false;
this.material = new MakeGLProgram(gl,vsh,fsh)
this.image= new Image();this.image.src=imgUrl;
this.image.sprite = this;
this.image.onload = ()=>{
this.setup();

}
//this.
}
setup(){



gl.useProgram(this.material.Program);

this.gl_tex=ShaderUtil.createGLTexture(gl,this.image);



this.tex_buff=ShaderUtil.createGLBuffer(gl,ShaderUtil.createRectArray());
this.geo_buff=ShaderUtil.createGLBuffer(gl,ShaderUtil.createRectArray());


this.aPositionLoc = ShaderUtil.getGLAtrbLoc(gl,this.material.Program, "a_position");
this.aTexcoordLoc = ShaderUtil.getGLAtrbLoc(gl,this.material.Program, "a_texCoord");
this.uImageLoc = ShaderUtil.getGLUnfmLoc(gl,this.material.Program, "u_image");

gl.useProgram(null);
this.isLoaded=true;


}

render(){
if(this.isLoaded){
//let gl = this.gl;


gl.useProgram(this.material.Program);

ShaderUtil.ACTIVEGLTexture(gl,this.gl_tex)

//gl.activeTexture(gl.TEXTURE0);
//gl.bindTexture(gl.TEXTURE_2D, this.gl_tex);


gl.uniform1i(this.uImageLoc, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, this.tex_buff);
gl.enableVertexAttribArray(this.aTexcoordLoc);
gl.vertexAttribPointer(this.aTexcoordLoc,2,gl.FLOAT,false,0,0);
			
gl.bindBuffer(gl.ARRAY_BUFFER, this.geo_buff);
gl.enableVertexAttribArray(this.aPositionLoc);
gl.vertexAttribPointer(this.aPositionLoc,2,gl.FLOAT,false,0,0);

gl.drawArrays(gl.TRIANGLE_STRIP, 0, 6);

gl.useProgram(null);

}


}
}























(()=>{
console.log(`thanx for using over ShaderUtil lib have u noice DAY\n \t\t\t\t : ) `);
})();

//console.log(ShaderUtil);

//console.log(performance)