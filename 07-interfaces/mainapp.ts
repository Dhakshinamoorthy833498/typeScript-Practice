import { criccoach } from "./criccoach";
import { fbcoach } from "./fbCoach";
import { coach } from "./coach";

let mycric = new criccoach();
let myfb = new fbcoach();

let coacharray : string[] = [];
coacharray.push(mycric.getDailyWorkout());
coacharray.push(myfb.getDailyWorkout());
for( let theCoach of coacharray){
    
    console.log(theCoach);
}