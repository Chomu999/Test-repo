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
vec3 d = vec3(0.89, 0.5, 0.430);

return a + b * cos(6.28318*c*t+d);
}


mat2 rot2D(float angle){
float c=cos(angle);
float s=sin(angle);
return mat2(c, -s, s, c);
}

void main(void){

//vec3 col;

float angle = 0.2*uTime;
vec2 uv = (gl_FragCoord.xy * 2.0 - uRes.xy) / uRes.y;

for(float i = 0.0;i < 32.0; i += 1.0){
uv = abs(uv);
uv -= 0.5;
uv *= 1.21;
uv *= rot2D(angle);
}



vec3 finalColor = vec3(
length(uv * vec2(0.3, 0.1)),
length(uv * vec2(-0.4, 0.5)),
length(uv * vec2(0.3, -0.2)));
FragColor = vec4(finalColor, 1.0);

}
