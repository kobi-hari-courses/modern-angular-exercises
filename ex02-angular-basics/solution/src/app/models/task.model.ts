export interface Task {
    readonly name: string;
    readonly completed: boolean;
}

export const tasks: Task[] = [
    { name: 'Wash the dishes', completed: false },
    { name: 'Do the laundry', completed: true },
    { name: 'Take out the trash', completed: false }, 
    { name: 'Vacuum the floor', completed: false }, 
    { name: 'Mop the floor', completed: false }, 
    { name: 'Clean the bathroom', completed: false },
    { name: 'Clean the kitchen', completed: false },
    { name: 'Clean the living room', completed: false },
]