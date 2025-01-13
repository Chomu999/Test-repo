//VERT//
#version 300 es

//#include <vel_shader>

layout (location=0) in vec4 aPos;
layout (location=1) in vec2 aUV;
layout (location=2) in vec3 aNormal;

out vec2 vUV;
out vec4 vColor;

// #include <Header/vel.shader.glsl>


uniform vec3 uld;
uniform vec4 ulc;

float brightness;


void main(void)
{

gl_Position = aPos;

vUV = aUV;


brightness = max(dot(uld , aNormal), 0.0);

vColor= (ulc * 0.2) + (ulc * brightness * 0.6);


}



//FRAG//
#version 300 es
precision mediump float;
out vec4 FragColor;

in vec2 vUV;
in vec4 vColor;

uniform sampler2D [2]uTex;

void main(void)
{



FragColor = mix(texture(uTex[0], vUV) , texture(uTex[1], vUV), 0.5) * vColor;


}
