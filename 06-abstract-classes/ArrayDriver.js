"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// declare array of shapes .. initially empty
let theShape = [];
// add the shapes to the array
theShape.push(myCircle);
theShape.push(myRectangle);
theShape.forEach((el) => {
    console.log(el.getInfo());
    console.log(el.claculateArea());
    console.log();
});
