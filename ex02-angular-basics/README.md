# Exercise 02 - Angular Basics - Todo App
[Solution Video](https://youtu.be/6g4u_I88vGk)
## Introduction
In this exercise, you will pracice:
* Setting up the angular development environment
* Component State using signals
* Using control flows
* Using directives
* Using template references

## Instructions
### Step 1: Set up the Angular Project
- Install Angular CLI globally if not already installed. (`npm i -g @angular/cli`)
- Create a new Angular project using the CLI command. (`ng new <project-name> --standalone`)
- Navigate to the project directory.
- Start the development server to see the initial application. (`ng serve`)

### Step 2: Create the model and helpers
- Create a task interface that defines the structure of a task (e.g., `{ name: string, completed: boolean }`).
- Create some data - a constant that contains a list of tasks
- Create a file for helpers functions that calculate new states based on original state
- Add the following functions

```typescript
    function addTask(tasks: Task[], name: string): Task[] {}

    function completeTask(tasks: Task[], name: string): Task[] {}
```

- Implement the functions. make sure you create a **new** array, and not modify the original one. The functions should be **pure**

### Step 3: Create the component
- Create the state - a signal that holds an array of tasks
- Create the actions: addTask and completeTask. Both should take a single string parameter (the name). Both should use the helper methods to modify the signal state

### Step 4: Create the component Template
- Add an `<h2>` heading for the task list.
- Use an `<ul>` element to create an unordered list.
- Use `@for` control flow to iterate over the tasks array and display each task as an `<li>` element. track by the task name
- Inside each `<li>`, display the task name and an appropriate button for marking the task as complete.
- Style the page for your liking
- Connect the button with the proper method and pass the correct parameter data

## Step 5: The Add Task form
- Add a div section to allow users to input new tasks.
- Add an input of type text and a button
- Use `#newTaskRef` as a template reference variable for the input field.
- Use appropriate event bindings to handle adding tasks
- 
### Step 6: Test the Task List
- Test adding new tasks by entering text into the input field and clicking the "Add Task" button.
- Test marking tasks as complete by clicking the appropriate "Mark Complete" button for each task.

