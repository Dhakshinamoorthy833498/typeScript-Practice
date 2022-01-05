"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(theX, theY, _length, _width) {
        super(theX, theY);
        this._length = _length;
        this._width = _width;
    }
    calculateArea() {
        return this._length * this._width;
    }
    get Length() {
        return this._length;
    }
    set Length(value) {
        this._length = value;
    }
    get Width() {
        return this._width;
    }
    set Width(value) {
        this._width = value;
    }
    getInfo() {
        return super.getInfo() + `, length= ${this._length}, width = ${this._width}`;
    }
}
exports.Rectangle = Rectangle;
