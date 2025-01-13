
const canvas = document.createElement("canvas");
const gl = canvas.getContext("webgl2");

//width or height

const maxSize = (innerWidth>innerHeight)?innerHeight:innerWidth;
canvas.width=maxSize;
canvas.height=maxSize;
document.body.appendChild(canvas);


console.log(gl);


const img1 = document.getElementById("img1");
//console.log(img1)


const vertexShaderSource=`#version 300 es
layout (location=0) in vec4 aPos;
layout (location=1) in vec2 aUv;

out vec2 vUv;

void main(){
vUv = aUv;
gl_Position = vec4(aPos);
}
`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);
if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)){
console.log(`vertexShader error ${gl.getShaderInfoLog(vertexShader)} \n  ${gl.getShaderSource(vertexShader)}`);
}


const fragmentShaderSource=`#version 300 es
precision mediump float;
layout (location=0) out vec4 FragColor;

uniform sampler2D uTex;

in vec2 vUv;

void main(){
FragColor = texture( uTex, vUv);
}
`;

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);
if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)){
console.log(`fragmentShader error ${gl.getShaderInfoLog(fragmentShader)} \n  ${gl.getShaderSource(fragmentShader)}`);
}

const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader)
gl.attachShader(shaderProgram, fragmentShader)

gl.linkProgram(shaderProgram);
if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)){
console.log(`link not sucsses ${gl.getProgramInfoLog(shaderProgram)}`);
}
gl.validateProgram(shaderProgram);
if(!gl.getProgramParameter(shaderProgram, gl.VALIDATE_STATUS)){
console.log(`invalide shaderProgram ${gl.getProgramInfoLog(shaderProgram)}`);
}
gl.useProgram(shaderProgram);






const geometryVerticesData = [
//       xy           uv
   0.5,   0.5,   1.0, 1.0,
  -0.5,   0.5,   0.0, 1.0,
  -0.5,  -0.5,   0.0, 0.0,
   0.5,  -0.5,   1.0, 0.0,
];
const cupVerticsBuffer= new Float32Array(geometryVerticesData);

const geometryIndeicesData = [
0, 1, 2,
2, 3, 0,
];

const cpuIndeicesBuffer= new Uint8Array(geometryIndeicesData);

const vbo1 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo1);
gl.bufferData(gl.ARRAY_BUFFER, cupVerticsBuffer, gl.STATIC_DRAW);

const ibo1 = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo1);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, cpuIndeicesBuffer, gl.STATIC_DRAW);

const aPosLoc = gl.getAttribLocation(shaderProgram, "aPos");
console.log(aPosLoc);

const aUvLoc = gl.getAttribLocation(shaderProgram, "aUv");
console.log(aUvLoc);

const uTexLoc = gl.getUniformLocation(shaderProgram, "uTex");
console.log(uTexLoc);


gl.uniform1f(uTexLoc, 0.0);

const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img1 );
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);




gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 4 * 4, 0 * 4);
gl.enableVertexAttribArray(aPosLoc);

gl.vertexAttribPointer(aUvLoc, 2, gl.FLOAT, false, 4 * 4, 2 * 4);
gl.enableVertexAttribArray(aUvLoc);






function update(dt){
//console.log("loop", dt);
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.2, 0.2, 0.2, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);


// gl.activeTexture(gl.TEXTURE0);
// gl.bindTexture(gl.TEXTURE_2D, tex);



gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, null);
// gl.drawArrays(gl.TRIANGLES, 0, 3);

}



let lastTime=0;
function animate(timeStamp) {
const dt = timeStamp - lastTime;
lastTime = timeStamp;
update(dt);
webkitRequestAnimationFrame(animate)
}
webkitRequestAnimationFrame(animate)



//console.log(window)

// const a = Intl;
// console.log(a);

// let idk2 = a.DateTimeFormat("in")
// console.log(idk2);


// let _textDecoder = new TextDecoder();
// let _textEncoder = new TextEncoder();


// console.log(_textDecoder);
// console.log(_textEncoder);

// let wa = WebAssembly;


// console.log(wa);

// let waCode=`
// int a=9;

// `;

// let waBufferCode = _textEncoder.encode(waCode).buffer;
// console.log(waBufferCode);


// let idk1 = wa.compile( waBufferCode);
// idk1.then((err, data)=>{
// 	console.log(err, data);
// })

//console.log(idk1);

//let idk1 = new wa.Module();
//console.log(idk1);

// let idk3=new wa.Tag();
// console.log(idk3);

//let idk4= new wa.Memory();
//console.log(idk4);

// let idk3=wa.validate(new Uint16Array(16).buffer);
// console.log(idk3);
