# Exercise 02 - Angular Basics - Todo App
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

### Step 2: Update the App Component
- Create a task interface that defines the structure of a task (e.g., `{ name: string, completed: boolean }`).
- Add a property to the `AppComponent` class to hold an array of tasks.
- Initialize the task list property with some sample tasks as an array of task objects.
- Open the `app.component.html` file.
- Add an `<h2>` heading for the task list.
- Use an `<ul>` element to create an unordered list.
- Use `*ngFor` directive to iterate over the tasks array and display each task as an `<li>` element.
- Inside each `<li>`, display the task name and an appropriate button for marking the task as complete.
- Add a form section to allow users to input new tasks.
- Use `#newTaskRef` as a template reference variable for the input field.
- Use appropriate event bindings to handle adding tasks and marking them as complete.

### Step 3: Test the Task List
- Test adding new tasks by entering text into the input field and clicking the "Add Task" button.
- Test marking tasks as complete by clicking the appropriate "Mark Complete" button for each task.

