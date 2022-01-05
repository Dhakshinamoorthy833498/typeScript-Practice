import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";


let mycircle = new Circle(3,4,15);
let myrectangle = new Rectangle(2,3,4,5);

let theShapes : Shape[] = [];

theShapes.push(mycircle);
theShapes.push(myrectangle);


for (let shapes of theShapes){
console.log(shapes.getInfo());
console.log(shapes.calculateArea());
console.log();
}
