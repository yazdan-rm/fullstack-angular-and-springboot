"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
// default array for coaches
let coaches = [];
// add coaches to the array
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);
for (let tempCoach of coaches) {
    console.log(tempCoach.getDailyWorkout());
}
