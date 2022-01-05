"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const criccoach_1 = require("./criccoach");
const fbCoach_1 = require("./fbCoach");
let mycric = new criccoach_1.criccoach();
let myfb = new fbCoach_1.fbcoach();
let coacharray = [];
coacharray.push(mycric.getDailyWorkout());
coacharray.push(myfb.getDailyWorkout());
for (let theCoach of coacharray) {
    console.log(theCoach);
}
