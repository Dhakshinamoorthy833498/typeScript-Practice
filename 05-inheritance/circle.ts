
import { Shape} from "./shape";
export class Circle extends Shape{
    constructor( theX : number,  theY : number , private _radius:number){
        super(theX,theY);
    }
public get Radius():number{
    return this._radius;
}
public set Radius(value:number){
    this._radius = value;
}
getInfo():string{
    return super.getInfo() + `, radius= ${this._radius}`;
}
}