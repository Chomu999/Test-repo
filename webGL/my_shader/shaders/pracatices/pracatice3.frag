#version 300 es
precision mediump float;

out vec4 FragColor;

uniform float uTime;
uniform vec2 uRes;
uniform vec4 uMouse;


vec3 palette(float t) {

  vec3 a = vec3(0.9, 0.3, 0.5);
  vec3 b = vec3(0.7, 0.1, 1.0);
  vec3 c = vec3(0.2, 0.3, 0.5);
  vec3 d = vec3(0.8, 1.0, 0.2);


  return a + b * cos(6.28*c+t*d);
}


mat2 rot2D(float angle) {
  float c = cos(angle),
  s = sin(angle);
  return mat2(c, -s, s, c);
}

float sdSpehere(vec3 p, float s) {
  return length(p) - s;
}

float sdOctahedren(vec3 p, float s) {
  vec3 q = abs(p) - s;
  return length(q) * 6.28;
}



float sdBox(vec3 p, vec3 b) {
  vec3 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}


float smin(float a, float b, float k) {
  float h = max(k-abs(a-b), 0.0)/k;
  return min(a, b) - h*h*h*k*(1.0/6.0);
}


float map(vec3 p) {
  vec3 speherePos = vec3(sin(uTime) * 1.0, max(cos(uTime) * 2.0, 0.0), cos(uTime) * 1.0);
  // vec3 q = p;
  //p = fract(p) * 2.0 - 1.0;
  //p.z += uTime;
  //p.xy *= rot2D(uTime * 0.3);
  float spehere = sdSpehere(p - speherePos.xyz, 0.25);
  vec3 q = p;

  q.xy *= rot2D(uTime);
  // q.xy *= rot2D(uTime);

  q.xz *= rot2D(uTime);
  // q.xz *= rot2D(uTime);

  float box = sdBox(q, vec3(0.24));
  float ground = p.y + 0.60;
  return smin(ground, smin(spehere, box, 0.74), 0.75);
}


void main(void) {
  vec3 finalColor;
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes.xy) / uRes.y;

  vec3 ro = vec3(0.0, 0.0, -3.0); // ray origine
  vec3 rd = normalize(vec3(uv, 1.0)); // ray dirrction
  vec3 col = vec3(0.0);

  float t = 0.0; // travell distences

  for (int i = 0; i < 80; i++) {

    vec3 p = ro + rd * t;

    float d = map(p);


    t += d;

    if (d < 0.001 || t > 100.0) break;
    //col = vec3(i) / 80.0;

  }

  finalColor = col + (t * 0.2);

  FragColor = vec4(finalColor, 1.0);
}