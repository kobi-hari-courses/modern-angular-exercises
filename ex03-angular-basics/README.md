# Exercise 03: Angular Basics - Guessing Game
[Solution Video](https://youtu.be/pS5rY1uimhw)
## Introduction
In this exercise, you're going to create a simple number guessing game in a single Angular component. The game will generate a random number between 1 and 100 and the player will need to guess it. The game allows the user maximum of 7 guesses, after which the game completes and the user has lost. If the user guesses the correct number in 7 guesses or less, the game completes and the user has won. When the game is completed, the user may click a restart button and start over with a new random number.

## Instructions

### Step 1. Set Up Your Angular Project 
Start by setting up a new Angular project. You can use the Angular CLI for this.

### Step 2. Models and Union Types 
- Create a `GameState` type using TypeScript's **union types** to represent the different states of the game ('playing', 'won', 'lost'). 
- Create a `GuessResult` union type with the values ('exact', 'high', 'low')
- Create a `Guess` ineterface with the following properties: value (number), result(GameResult)

### Step 3. Helper functions
In this exercise we will leave the decision of which helper functions to create for you. Remember that helper functions are pure functions that help you with immutable work. These should be pure functions that help you calculate state changes.

### Step 4. Component core state
In this exercise, some of the state is "core" and some is derived. The core state should be represented by writeable signals, the derived state is represented by computed - readonly signals. Create the following core signals:
- The computer random number (number)
- The guesses the user has entered so far (Guess[])

### Step 5. Derived state
Create the following computed signals. Don't put too much code inside the computed signal itself. If the calculation is more than a trivial expression - move the logic to a helper function.
- The current game status - playing, won or lost. Note that while there are less than 7 guesses, the game is still playing.
- The latest guess

### Step 6. Actions
Implement the following actions. Remember that actions only changes state, and that you should use immutable data so do not modify objects or arrays - create new ones that are derived from the old ones, and use helper pure functions for that.
- Add Guess (guess number)
- Start Over

### Step 7. The template
- Display a list of guesses the user has already made. For each guess write the number and the result (too high, too low, or exact)
- Try to give different styling to the guesses depending on the guess result
- If the game is not completed, display an input box of type number, and a "submit" button that submits the next guess
- If the game is completed, display a button to restart the game
- If the game is lost - display a proper message, and the correct number
- If the game is won, display a proper message

### Step 8. Styling
- Style the guess records different depending of their result. 
- Style the entire game screen different depending on the game state (won, lost, playing)

## Hints
- The `Math.random` function can be used to generate the secret number.
- The `Math.ceil` function can be used to round the number up to the next integer.
- The spread operator `[...arry]` can be used to create a new array that contains all the previous items plus more
- Template reference variables can be used to access the value of the guess input.
- The `[class.xxx]` binding can be used to conditionally apply a CSS class to an element.
- The `Number()` function translates a string into number

