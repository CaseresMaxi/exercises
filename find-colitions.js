const obj1 = { x: 10, y: 10, speed: [2, 2] };
const obj2 = { x: 0, y: 0, speed: [1, 1] };

const getColition = (obj1, obj2) => {
  tx = (obj1.x - obj2.x) / (obj2.speed[0] - obj1.speed[0]);
  ty = (obj1.y - obj2.y) / (obj2.speed[1] - obj1.speed[1]);
  console.log(`tx: ${tx} \nty: ${ty}`);
  if (tx == Infinity || ty == Infinity || tx !== ty || tx < 0 || ty < 0)
    console.log("no habra colicion");
  else {
    console.log(
      ` punto de encunetro x: ${obj1.x + obj1.speed[0] * tx} y: ${
        obj1.y + obj1.speed[1] * ty
      }`
    );
  }
};

getColition(obj1, obj2);
