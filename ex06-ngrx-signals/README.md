# Exercise 06: NgRx Signals - Tasks App

## Introduction
In this exercise we will practice using `@ngrx/signals` features like `withState`, `withComputed`, `withMethods`, and `withHooks` by building a simple task tracker application.

## Instructions
### Step 1. Setup
- Create a new Angular project using Angular CLI.
- Install `@ngrx/signals` for state management.

### Step 2. Model
- Create a `Task` model entity with `id` (number), `title`, and `completed` properties.
- Create a list with mock tasks as starting state

### Step 3. Create a Task Slice and Store
- Define a `TasksSlice` interface that contains a list of tasks
- Define a `TaskStore` using `withState` to manage a list of tasks.
- Initialize the store with a default array of mock tasks.

### Step 4. Adding Computed Properties
- Use `withComputed` to add properties for:
  - `completedTasksCount`: The number of completed tasks.
  - `pendingTasksCount`: The number of tasks that are not completed.
  - `totalTasksCount`: The total number of tasks.

### Step 5. Create Task Methods
- Implement the following methods in the store:
  - Create a helper function that generates new random ids.
  - `addTask(title: string)`: Add a new task to the store.
  - `toggleTaskCompletion(taskId: number)`: Toggle a task's `completed` status.
  - `removeTask(taskId: number)`: Remove a task by its `id`.

### Step 6. Task Component
- Download 3 icons from the internet: 
  1. That looks like trash - for delete operation
  2. That looks like an empty square - for non completed task
  3. That looks like a full (or checked) square - for completed task
- Create a `Task` component that displays a single task
  - Use a required input of task id
  - Inject the store
  - Define a computed signal of the task with the matching id
  - Use the delete icon, and when clicked, delete the task (using the store)
  - Present either the icon for completed or for non completed according to the task state
  - When clicked, call the toggle method on the store

### Step 7. Tasks List Component
- Create a `TaskListComponent` to display all tasks.
- Inject the store
- Create a computed signal of the list of ids (you can create it in the store itself)
- Loop over the ids and present a `TaskComponent` for each one.
- Display the numbers of tasks, completed tasks and pending tasks at the bottom of the list
- Add an input (type text) with an "Add" button next to it.
- Use `viewChild` to inject the input to the component ts
- When clicking the add button, create a new task with the content of the input **And clean the input**
- 

### 8. Add Filtering Options
- In the signal store, add a filter string property to the state
- Add a computed signal that contains only filtered tasks
- Add a filter input box to the `ListBoxComponent`
- When the value of the input changes, modify the current filter accordingly
- Display only the tasks that pass the filter

### 9. Keep persistancy using hooks
- Use `withHooks` to:
    1. Save the state to the local storage whenever it changes
    2. Load the state from the local storage when the store is created


## Summary
By completing this exercise, you'll gain hands-on experience with:
- Creating and managing state with the signal store.
- Working with computed properties.
- Binding the store's state to the UI using Angular's signal-based reactivity.

