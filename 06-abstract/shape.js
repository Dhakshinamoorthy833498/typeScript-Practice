"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get X() {
        return this._x;
    }
    set X(value) {
        this._x = value;
    }
    get Y() {
        return this._y;
    }
    set Y(value) {
        this._y = value;
    }
    getInfo() {
        return `x=${this._x}, y= ${this._y}`;
    }
}
exports.Shape = Shape;
