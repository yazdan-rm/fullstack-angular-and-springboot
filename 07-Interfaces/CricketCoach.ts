import { Coach } from "./Coach";

export class CricketCoach implements Coach {
  getDailyWorkout(): string {
    return `Practice your spin bowing technique`;
  }
}
