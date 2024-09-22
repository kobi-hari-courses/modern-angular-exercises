# Exercise 05: Angular Components - Quiz app
## Introduction
In this exercise we will create a quiz application that will ask the user a list of single choice questions and will finally present a summary and score.

## Instructions
### Step 1: Data model
Create a `Question` interface containing the following properties
- caption (`string`) the content of the question
- answers (`string[]`) the possible answsers
- correctAnswerIndex (number) the index of the correct answer

Create an `Answer` interface 
- userAnswer (`number`)
- isCorrect (`boolean`)

Also create some DATA in json format, an array of questions.

### Step 2: The app component state
The root component is going to serve as the only smart component in the application. It will hold all the state and all the actions. 

The state includes:
- An array of questions
- An array of answers the user has provided

### Step 3: The app component methods
The actions are: 

- Reset quiz - empties the array of answers
- Add an answer (index) - receives an answer to the current question and adds it to the array of answers

### Step 4: The app component computed data
Create the following computed values from the core state:

- The index of the current question (you can derive it from the size of the answers array)
- The current question itself
- Is the quiz over (it is when there are as many asnwers as questions)
- Total correct answers
- Current score (total correct answers divided by total questions)

### Step 5: Question presenter component
Create a presentation component, that receives a question as input and:
1. Displays the question
2. Displays the possible answers
3. When the user clicks one of the answers, raises an event with the index of the answer as payload

In `AppComponent` use the new component to display the current question, and respond to the event

### Step 6: Progress indicator component
Create a presentation component, that receives 2 inputs:
- Total
- Value

The component will visually display the ratio between the value and the total.
- Create a computed `ratio` signal 
- Create a computed `percentage` signal the converts the ratio into percentage string (!!)
- Now use the percentage string and CSS to paint a proportional area of the component

Use this new component in the `AppComponent` to present to the user the progress of the quiz

### Step 7: Summary component
Create a presentation compontant that receives 1 input
- Score

* Also implement a `reset` output event
* Present it along with a message that the quiz is over an a button that allows to reset the quiz and start over
* In `App Component` when the quiz is over, present the summary component instead of the question presenter and the progress indicator
* In `AppComponent` also catch and implement the reset event







