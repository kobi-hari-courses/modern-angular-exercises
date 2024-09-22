# Exercise 03: Angular Basics - Guessing Game
## Introduction
In this exercise, you're going to create a simple number guessing game in a single Angular component. The game will generate a random number between 1 and 100 and the player will need to guess it.

## Instructions

### Step 1. Set Up Your Angular Project 
Start by setting up a new Angular project. You can use the Angular CLI for this.

### Step 2. Union Types 
Create a `GameState` type using TypeScript's **union types** to represent the different states of the game ('playing', 'won', 'lost'). 

### Step 3. Component Class
In your component class, you'll need to store the secret number, the current game state, and the list of guesses made by the player. Each guess should be an object with the guessed number and whether it was too high, too low, or correct. Think about the best ways to initialize these values in the component's constructor, and how to update them as the game progresses.

### Step 4. Making Guesses
The player will need a way to make guesses. Create a method that accepts a number, checks it against the secret number, and adds it to the list of guesses with the correct result. You'll need to think about how to update the game state as well.

### Step 5. Component Template
Your template should have a button for starting a new game, an input and button for making guesses, a message displaying the game state when the game is not in the 'playing' state, and a list of guesses. Use the `@If` control flow to conditionally display elements based on the game state and `@For` to display the list of guesses. Each guess should be displayed differently depending on whether it was too high, too low, or correct.

### Step 6. Event Bindings 
The new game button and the guess button should have click events bound to them. The guess input should have a template reference variable so that its value can be passed to the method making the guess. The guess input should also be cleared after a guess is made.

### Step 7. Styling 
Use CSS classes to style your game. Apply the classes to the guesses depending on whether they were too high, too low, or correct.

## Hints

- The game state, the secret number, and the list of guesses should be properties of the component class.
- The `Math.random` function can be used to generate the secret number.
- The `Math.ceil` function can be used to round the number up to the next integer.
- The spread operator `[...arry]` can be used to create a new array that contains all the previous items plus more
- Remember to bind the click event of the guess button to the method that makes a guess and the click event of the new game button to the method that starts a new game.
- Template reference variables can be used to access the value of the guess input.
- The `[class.xxx]` binding can be used to conditionally apply a CSS class to an element.
- The `Number()` function translates a string into number
- 

