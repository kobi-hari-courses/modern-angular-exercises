export interface Circle {
    readonly kind: 'circle';
    readonly radius: number;
}

export interface Rectangle {
    readonly kind: 'rectangle';
    readonly width: number;
    readonly height: number;
}

export interface Triangle {
    readonly kind: 'triangle';
    readonly base: number;
    readonly height: number;
}

export type Shape = Circle | Rectangle | Triangle;
export type ShapeKind = Shape['kind'];

