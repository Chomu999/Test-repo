
var b1 = new Buffer.from([10]);
var b2 = new Buffer.from([103, 120, 130, 148, 149, 108]);
var b3 = new Buffer.from("something", "utf-8");


console.log(b1);
console.log(b2.toString());
console.log(b3.toString());