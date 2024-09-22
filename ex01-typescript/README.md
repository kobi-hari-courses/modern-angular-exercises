# Exercise 01: TypeScript - Shape Calculation and Reporting
[Solution Video](https://youtu.be/kz9DJVaBk6w) 


## Introduction
In this exercise, you will practice:
* Interfaces
* Union Types
* Functional programming
* Typescript project structure 


## Goal 
Implement a shape calculation and reporting system. The app will calculate the area and circumference of different shapes, including circles, rectangles, and triangles. You will then generate a shape report based on the calculated values.

## Instructions

### Step 1: Set up the project structure
   - `shapes.ts`: Define the interfaces for specific shapes and export the `Shape` type and the `ShapeKind` type.
   - `calculations.ts`: Implement the shape calculation functions and export the `ShapeCalculator` type, `calculateArea` function, and `calculateCircumference` function.
   - `report.ts`: Create the `createShapeReport` function that generates a shape report and export it.
   - `index.ts`: Use the implemented functions to calculate the area and circumference of shapes and generate the shape report.


### Step 2: Implement the `shapes.ts` file:
   - Define the interfaces `Circle`, `Rectangle`, and `Triangle` for each specific shape. Each shape interface should have a `kind` property of a discriminated union type. Export these interfaces.
   - Define the `Shape` type as a union type of `Circle`, `Rectangle`, and `Triangle`.
   - Define the `ShapeKind` type as the mapped type that extracts the `kind` property values from the `Shape` type.

### Step 3: Implement the `calculations.ts` file:
   - Import the `Shape` type from `shapes.ts`.
   - Define the `ShapeCalculator` type as a function type that accepts a shape of type `Shape` and returns a number.
   - Implement the `calculateArea` function that calculates the area based on the shape type using a switch statement. Export this function.
   - Implement the `calculateCircumference` function that calculates the circumference based on the shape type using a switch statement. Export this function.

### Step 4: Implement the `report.ts` file:
   - Import the `Shape` and `ShapeKind` types from `shapes.ts`, and the `ShapeCalculator` type from `calculations.ts`.
   - Implement the `createShapeReport` function that takes an array of shapes and a shape calculator function. Iterate through the shapes using a `for...of` loop and generate an array of shape reports. Each shape report should have a `kind` property of type `ShapeKind` and a `value` property of type `string`, which represents the calculated value. Export this function.

### Step 5: Implement the `index.ts` file:
   - Import the necessary types and functions from `shapes.ts`, `calculations.ts`, and `report.ts`.
   - Create instances of different shapes (e.g., circle, rectangle, triangle).
   - Create an array of shapes containing the instances created in the previous step.
   - Use the `createShapeReport` function with `calculateArea` to generate a shape report for the areas of the shapes. Iterate through the resulting array using a `for...of` loop and log each shape's kind and calculated area to the console.
   - Use the `createShapeReport` function with `calculateCircumference` to generate a shape report for the circumferences of the shapes. Iterate through the resulting array using a `for...of` loop and log each shape's kind and calculated circumference
