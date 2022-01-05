"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
    }
    get Radius() {
        return this._radius;
    }
    set Radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius= ${this._radius}`;
    }
}
exports.Circle = Circle;
