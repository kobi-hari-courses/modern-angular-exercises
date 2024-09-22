import { ShapeCalculator } from "./calculations";
import { Shape, ShapeKind } from "./shapes"

export interface ReportRecord {
    readonly kind: ShapeKind;
    readonly value: number;
}

export function createShapeReport(shapes: Shape[], calculator: ShapeCalculator): ReportRecord[] {
    const res: ReportRecord[] = [];

    for (const shape of shapes) {
        const value = calculator(shape);
        res.push({ kind: shape.kind, value });
    }

    return res;
}