# Exercise 07: NgRx - Interop with RxJs - Tasks App

## Introduction
In the following exercise we will build on the previous exercise ([ex 06](../ex06-ngrx-signals/README.md)) and add interoperability with rxjs. We will: 
1. Create a service that uses `HttpClient` to communicate with the server. 
2. Practice `rxMethod` in signal store
3. Connect the signal store to asyncronous services


## Instructions
### Step 1 - Duplicate the previous exercise
- Copy the source and public folders, make sure not to copy the `node-modules` and `.angular` folders which are auto-generated
- run `npm i` to create the dependencies
- run the project `ng s`

### Step 2 - Run the server attached to this project
- Go to the [server folder](./server/)
- run `npm i` to install dependencies
- run `npm start` to start the server
- This starts a json server running in port 3000.
- Now you can run http restful commands to add, change, read, and delete posts

### Step 3 - Create a `DataService` that communicates with the server
- Create a service
- Inject `HttpClientModule`
- Make sure to provide http in the `app.config.ts` file
- Add methods for each of the following: 
    - Get all tasks
    - Update a task
    - Create a new task
    - Delete a task

### Step 4 - Add a "LoadState" property to the signal store
- Possible values: 'Idle', 'Loading'
- Add setters to set as loading, and set as idle

### Step 5 - load todo items from http
- Add a "reload" method that: 
  - sets load state as 'loading'
  - calls 'Get all tasks' methods from the data service
  - Flatten the observable using the proper operator
  - add side effect that sets the current tasks in the store, and sets load state to idle

### Step 6 - Add Loading indicator to the UI
- Add an overlay with the Loading caption
- Place it on top of the UI
- Add `@if` so that it only appears when the UI is loading

### Step 7 - connect other methods to http
- Implement the `add` method using the service
- Implement the `delete` method using the service
- Implement the `toggle` method using the service
- Remember to set state to 'loading' at the begining of each action
- Remember to call `reload` at the end of each action.

## Summary
In this exercise you practiced:
1. Using RxJS observables and operators
2. Working with HTTP
3. Connecting Signals and RxJS using `rxMethod`



