#version 300 es
precision mediump float;
layout (location=0) out vec4 FragColor;



uniform vec2 uRes;
uniform float uTime;
uniform vec4 uMouse;



mat2 rot2d(float angle){
float c=cos(angle);
float s=sin(angle);
return mat2(c, -s, s, c);
}


vec3 palette(float t){
vec3 a = vec3(1.0, 0.9, 1.0);
vec3 b = vec3(0.0, 0.0, 1.0);
vec3 c = vec3(0.6, 0.6, 0.0);
vec3 d = vec3(1.0, 0.9, 0.0);
return a + b * cos(6.28*(c+t*d));
}

float sdSphere(vec3 p, float r){
return length(p) - r;
}


float sdBox( vec3 p, vec3 b){
vec3 q = abs(p) - b;
return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}


float smin(float a, float b, float k){
float h = max(k-abs(a-b), 0.0)/k;
return min(a, b) - h*h*h*k*(1.0/6.0);
}


float map(vec3 p){

//p.y += uTime;

vec3 spherePos=vec3(0.0, cos(uTime) * 3.0, 0.0);

float sphere = sdSphere( p - spherePos, 1.5);

vec3 q = p;

q.xz *= rot2d(uTime);
q.xz *= rot2d(uTime);

q.xy *= rot2d(uTime);
q.xy *= rot2d(uTime);

float box = sdBox( q, vec3(0.9));


float ground = p.y + 0.976;

return smin(smin(sphere, box, 2.0), ground, 1.0);
}





void main()
{


vec2 uv = (gl_FragCoord.xy * 2. - uRes.xy) / uRes.y;
vec2 m = (uMouse.xy * 2. - uRes.xy) / uRes.y;


//

vec3 col = vec3(0.0);

//
vec3 ray_origin = vec3(0.0, 0.0, -3.0);
vec3 ray_direction = normalize(vec3(uv * 1.5, 1.0));

//travall distance
float t=0.0;

// rotation
ray_direction.yz *= rot2d(-m.y);
ray_direction.yz *= rot2d(-m.y);

// rotation
ray_direction.xz *= rot2d(-m.x);
ray_direction.xz *= rot2d(-m.x);

for(int i=0;i<80;i++){

vec3 p = ray_origin + ray_direction * t;

float d = map(p);

t += d;

col = vec3(float(i)) / 80.;

if(d < 0.001 || t > 100.) break;

}

col = vec3(t * 0.2);

FragColor = vec4(col, 1.0);

}