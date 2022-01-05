"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let mycircle = new circle_1.Circle(3, 4, 15);
let myrectangle = new rectangle_1.Rectangle(2, 3, 4, 5);
let theShapes = [];
theShapes.push(mycircle);
theShapes.push(myrectangle);
for (let shapes of theShapes) {
    console.log(shapes.getInfo());
    console.log(shapes.calculateArea());
    console.log();
}
