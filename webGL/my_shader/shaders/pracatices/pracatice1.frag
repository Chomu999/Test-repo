#version 300 es
precision mediump float;
out vec4 FragColor;

uniform float uTime;
uniform vec4 uMouse;
uniform vec2 uRes;


vec3 palette(float t){

vec3 a = vec3(0.2, 0.1, 0.4);
vec3 b = vec3(0.1, 0.9, 0.6);
vec3 c = vec3(1.0, 0.5, 0.0);
vec3 d = vec3(0.0, 0.5, 1.0);

return a + b * cos(6.28318*c*t+d);
}

void main(void){

vec3 finalColor;//=vec3(0.0);
vec2 uv = (gl_FragCoord.xy * 2.0  - uRes.xy) / uRes.y;
vec2 uv0 = uv;

for(float i = 0.0; i < 4.0; i+=1.0){
uv = (fract(uv) * 2.0) - 1.0;

float d = length(uv) * exp(-length(uv0));

vec3 col = palette(length(uv0) + i*0.2 + uTime*0.5);



d = sin(d * 8.0 + uTime) / 8.0;

d = abs(d);


d = pow(0.02 / d, 1.07);

//d = 0.02 / d;


finalColor += col * d;
}

FragColor = vec4(finalColor, 1.0);

}
