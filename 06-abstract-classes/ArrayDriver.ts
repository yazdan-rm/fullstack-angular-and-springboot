import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCircle = new Circle(5, 10, 20);

let myRectangle = new Rectangle(0, 0, 3, 7);

// declare array of shapes .. initially empty
let theShape: Shape[] = [];

// add the shapes to the array
theShape.push(myCircle);
theShape.push(myRectangle);

theShape.forEach((el) => {
  console.log(el.getInfo());
  console.log(el.claculateArea());
  console.log();
});