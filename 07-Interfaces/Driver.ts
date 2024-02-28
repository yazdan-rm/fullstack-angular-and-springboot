import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// default array for coaches
let coaches: Coach[] = [];

// add coaches to the array
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);

for (let tempCoach of coaches) {
  console.log(tempCoach.getDailyWorkout());
}
