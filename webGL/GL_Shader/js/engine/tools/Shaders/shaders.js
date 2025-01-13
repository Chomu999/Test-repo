
//
const Simple={
vertex:`#version 300 es
precision mediump float;

layout (location = 0) in vec4 aPosition;

void main(){
gl_Position= vec4(aPosition.xy, 0.0, 1.0);
gl_PointSize= 50.0;
}
`,
fragment:`#version 300 es
precision mediump float;

layout (location = 0) out vec4 FragColor;

void main(){
FragColor = vec4(1.0);
}
`
}




//alert("shader")


export {Simple}