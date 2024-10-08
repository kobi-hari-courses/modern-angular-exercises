# Exercise 08: Routing - Movies
[Solution Video](https://youtu.be/hIWdwGxc1ME)

## Introduction
In this exercise we will create a new application that displays movie information. We will use all the features we did in previous exercises and add routing.

1. Configuring and using the routing
2. Passing parameters to the page (and from there to the signal store)
3. Loading data from HTTP service based on router parameters
4. Using nested routing
5. Lazy loading in the router
   
Since this is an advanced exercise, the step description will be less detailed, and you should feel free to design your own architecture.


## Instructions
### Step 1 - server
In the `server` folder you will find a ready server. make sure to run `npm i` and then `npm start` to run it in port 3000

### Step 2 - Model and Service
- Create a proper model for the `movie` and `actor` entities (you can find the data in the data.json file in the server)
- Create a data service that allows to:
  - Get all movies (`http://localhost:3000/movies`)
  - Get specific movie by id (`http://localhost:3000/movies/12`)
  - Get all actors (`http://localhost:3000/actors`)
  - Get actor by name (`http://localhost:3000/actors?fullName=Dr.%20James%20Carter`)
  - Get all movies an actor played in (`http://localhost:3000//movies?cast_like=Dr.%20James%20Carter`)
- The service should return observables of the proper type

### Step 3 - Navbar component
- Create a navigation component which should have 3 links:
    1. Home page
    2. Movies page
    3. Actors page
- Create page component for each page
- Create the router configuration that allows to navigate to each page
- Make sure the navbar **shows** which is the current page (using the `routerLinkActive` directive)

### Step 4 - The list pages
- Create a signal store with a list of movies and a load state
- Add a "reload" method that loads the list of all movies
- Add busy indicator when the list is loading (you can add delay to the data service so you can see it is working)
- Call the reload method from the init hook
- Display a list of movies
- Do the same for the actors page

### Step 5 - The details page
- Create a component for list-details and for actor-details
- Configure the routes so that these pages are nested in the lists page
- Make it so that these pages receive an id input from the router
- Make it so that clicking one of the items in the lists, navigate to the details page
- Create a signal store for each detail page
- Create an rxMethod that loads a specific movie/actor by id
- Connect the id signal to it
- Make sure to use the proper flattening operator
- Create some HTML and CSS for each item
- Notice that there are also images in the server, which you can show in the actor and movie details pages

### Step 6 - The Actor movies page
- For each actor, also add a movies page that can be displayed next to the actors list page
- In the actor details page add a button that routes to this link
- Add a proper route in the router config page
- Add a store, and all the proper methods
- Add HTML and CSS presenting the list of movies

### Step 7 - Route Guard
- Add a `CounterService` service
  - This service has a method `isAllowed` which returns boolean
  - The service counts how many times you run the isAllowed methods
  - It returns true while the count is less than 20
  - Once it has passed 20, it returns false
- Add a `CounterGuard` function
  - This is a Guard function so it should be defined using the proper type
  - It injects the CounterService
  - It runs the `isAllowed` method once.
  - If the method returns true, so does the guard
  - If it returns false, it returns a `UrlTree` that points to the home page
  - In the home page, show the current counter
  - If the counter is above 20 - display a "reset counter" button.
  - When the button is clicked, reset the counter
  - Use the guard on the movies and actors section, so you cannot enter these sections when the counter is over 20
- **Challange**
  - Make the `isAllowed` method asyncronous and return a promise of boolean that takes 2 seconds to complete
  - Make the guard asyncronous as well



## Summary
In this exercise you practiced:
- Using the router and configuring it
- Using nested routing
- Lazy loading component pages
- Passing parameters to component inputs
- Using route guards




