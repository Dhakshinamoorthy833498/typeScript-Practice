export abstract class Shape{

constructor(private _x:number,private _y:number){

}
public get X():number{
    return this._x;
}
public set X(value:number){
    this._x = value;
}
public get Y():number{
    return this._y;
}
public set Y(value:number){
    this._y = value;
}
getInfo(): string{
    return `x=${this._x}, y= ${this._y}`;
}
abstract calculateArea():number;
}