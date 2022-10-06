import { Circle } from "./Circle";

const circle = new Circle(1, 2, { color: "blue", size: "XXL" });

const clonedCircle = circle.clone();

circle.border.color = "red";

circle.render();
clonedCircle.render();

console.log("Is same: ", circle === clonedCircle);
console.log("Is same border: ", circle.border === clonedCircle.border);
console.log("Is same render: ", circle.render === clonedCircle.render);
