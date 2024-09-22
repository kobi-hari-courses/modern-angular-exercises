import { calculateArea, calculateCircumference } from "./calculations";
import { createShapeReport } from "./report";
import { Shape } from "./shapes";

const shapes: Shape[] = [
  {
    kind: "circle",
    radius: 5,
  },
  {
    kind: "rectangle",
    width: 10,
    height: 5,
  },
  {
    kind: "triangle",
    base: 10,
    height: 5,
  },
  {
    kind: "circle",
    radius: 10,
  },
  {
    kind: "rectangle",
    width: 20,
    height: 10,
  },
  {
    kind: "triangle",
    base: 20,
    height: 10,
  },
];


// first we calculate all areas
const areasReport = createShapeReport(shapes, calculateArea);
const circumferenceReport = createShapeReport(shapes, calculateCircumference);


console.log("Areas:");
for (const record of areasReport) {
  console.log(`- ${record.kind}: ${record.value}`);
}

console.log("Circumferences:");
for (const record of circumferenceReport) {
  console.log(`- ${record.kind}: ${record.value}`);
}