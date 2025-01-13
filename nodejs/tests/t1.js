import assert from "node:assert";

import test from "node:test";


let [a,b,c] = [1, 1, 3];


test("a  and b is equal", ()=>{
  test.it("alo bhalo", ()=>{
    assert.strictEqual(a, b);
  })
})


run("a  and c is equal", ()=>{
  test.it("alo bhalo chalo", ()=>{
    assert.notEqual(a, c);
  })
})


//console.log("hola");