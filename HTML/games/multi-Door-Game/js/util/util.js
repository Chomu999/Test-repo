

const ISRectCollision = (ObjectA,ObjectB) => {
return (ObjectA.position.x + ObjectA.width >= ObjectB.position.x &&
ObjectA.position.x <= ObjectB.position.x + ObjectB.width &&
ObjectA.position.y + ObjectA.height >= ObjectB.position.y &&
ObjectA.position.y <= ObjectB.position.y + ObjectB.height)
}

Array.prototype = function parsh2D(){


console.log(this);
}