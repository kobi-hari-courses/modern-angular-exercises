import { Shape } from './shapes';

export type ShapeCalculator = (shape: Shape) => number;

export const calculateArea: ShapeCalculator = (shape) => {
    switch (shape.kind) {
        case 'circle': 
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return 0.5 * shape.base * shape.height;
    }
}

export const calculateCircumference: ShapeCalculator = (shape) => {
    switch (shape.kind) {
        case 'circle': 
            return 2 * Math.PI * shape.radius;
        case 'rectangle':
            return 2 * (shape.width + shape.height);
        case 'triangle':
            return shape.base + shape.height + Math.sqrt(shape.base ** 2 + shape.height ** 2);
    }
}