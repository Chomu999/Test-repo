#ifndef VEL_SHADER
#define VEL_SHADER

vec4 ga=vec4(-1.0, -1.0, -1.0, 1.0);

#endif

//#define haeder
// #ifdef USE_ALPHAMAP tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;#endif;
//#ifdef USE_ALPHAMAP\tuniform sampler2D alphaMap;#endif;
/*

 
#ifdef USE_ALPHATEST\tif ( diffuseColor.a < alphaTest ) discard;#endif;



 #ifdef USE_ALPHATEST\tuniform float alphaTest;#endif;


 
#ifdef USE_AOMAP\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\treflectedLight.indirectDiffuse *= ambientOcclusion;\t#if defined( USE_ENVMAP ) && defined( STANDARD )\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\t#endif#endif;
 
#ifdef USE_AOMAP\tuniform sampler2D aoMap;\tuniform float aoMapIntensity;#endif;
 
vec3 transformed = vec3( position );;


#endif