// const bundle = require("node:bundle");

module.exports={
input:"server/server.js",
inputDir:"public",
input:"server/server.js",


output:"bundle.js",
outputDir:"dict",
filename: "bundle.js",

minify:true,
compress:true,
mangle:true,

exclude:["node_modules"]
}
