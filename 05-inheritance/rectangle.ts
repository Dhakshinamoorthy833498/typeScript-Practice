import { Shape } from "./shape";

export class Rectangle extends Shape{
    constructor( theX : number, theY : number,private _length:number,private _width:number){
    super(theX,theY);
}
public get Length():number{
    return this._length;
}
public set Length(value:number){
    this._length = value;
}

public get Width():number{
    return this._width;
}
public set Width(value:number){
    this._width = value;
}
getInfo():string{
    return super.getInfo() + `, length= ${this._length}, width = ${this._width}`;
}}

