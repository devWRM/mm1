#   MASTERMIND

![Mastermind](Mastermind.png)

[Video demonstration of Mastermind](https://youtu.be/VTS817iEO7c "Video demonstration of Mastermind")


## About Mastermind

This Mastermind game application allows a user to play "against" the computer. A player tries to guess the four digit number combination. At the end of each attempt to guess the four digit number combination, the computer will provide feedback (red, white, or blue circles) indicating whether the player guessed a correct number in the correct location (red circle), guessed a correct number but in the wrong location (white circle), or guessed an incorrect number (blue circle). A player must guess the right number combinations within 10 attempts to win the game.

## Tech Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The Material-UI library was installed to add additional styling to components.

* React
* Material-UI

## How to run Mastermind locally on your computer

* You must have React installed on your computer
* Fork and clone the Mastermind repo from Github:

https://github.com/devWRM/mm1

* cd into the mm1 directory
* npm install dependencies run:
    npm install
* npm start application run:
    npm start
* yarn install dependencies run:
    yarn install (or: yarn add) (or: yarn)
* yarn start application run:
    yarn start
    
## How to play Mastermind

NOTE Click the Game Instructions link for a video detailing how to play Mastermind

Start the Mastermind game by clicking the start button:
* enter 4 numbers between 0 and 7 then click submit
* use the 4 colored spheres (circles) to plan your next guess attempt
* red sphere: correct number & correct location
* white sphere: correct number but wrong location
* blue sphere: incorrect number
* repeat until you guess the right secret code or you make 10 guesses

## Future Features

* give players the ability to adjust the number of numbers that are used (select difficulty level)
* keep track of scores
* add a timer

## Application Build

I was challenged to build a Mastermind game in which a player could play against the computer. I was not familar with the game so I researched and discovered it was similar to a game called Battleship which I was familiar with.

I used the command line tool create-react-app to generate the React application. I made a components folder in the autogenerated src folder to hold all of my components.

#### StartMastermind component
I created the StartMastermind functional component to be the "central command" of the application. This component ties everything together and is responsible for starting the game, tracking the state of the game, passing props to prompt players for guess input and then pass that input as props to display results to the player.

The game initiates with the selection of a secret code, necessary to compare against the player's guesses. So I started building the functionality to fetch a random 4 digit number & clean it up before storing it as a string. I used Random.org end point (https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new) in my fetch request then passed the fetch function name to the onClick event on the Mastermind click button to start the game.

Once the player clicks start, a secret code is fetched but kept hidden from the player using the showSecretCode state until the game is over and the secret code is revealed. 

#### DisplayCodeNumbers component
I built the DisplayCodeNumbers to display the secret code.

#### Input1 component
The showGuesses state gives the player access to a form to input a 4 digit number guess. I put in conditions that will only allow 4 numbers from 0-7 to be entered to prevent bad data being entered.

After the player enters an appropriate guess, it's stored in a userGuess object with 3 properties: a unique id set using Math.random, a code which is the player's guess, and a status based on a comparison of the userGuess code to the secret code. I used red, white, and blue circles (spheres) to give the player "hints" as a status for each guess. And if the guess cracks the code, the status is given a winning message.

The object is returned to the StartMastermind component containing all the information necessary to display to the player. 

#### GuessList component
The StartMastermind component updates the guessList state then passes the guessList state variable as props to the GuessList component. The prop is destructured then mapped over to dispay each guess and its status.

#### End Game
The game concludes when a player wins or after attempting 10 guesses (whichever happens first). Once the game is over, the player is given access to a button to start a new game which resets the Mastermind application back to its original page and initial state.

I included a link in the header that the player can always access for a video demonstration of how to play a Mastermind game. I also implemented states to give and restrict player access based on the status of the game.

### CHALLENGES
The most challenging part was when I had to conduct a major refactor to change the guessList from containing arrays of only the number guesses of the player, to containing guess objects storing a unique id, the guess code, and status properties and values. I did this because initially, all I could display was the player's guesses but I needed to be able to display the status of each guess. Using an object instead of an array was the most efficient way to accomplish this.

Another challenging process was learning how to use Material UI. This was my first time implementing it in an application. For styling, I relied on some default styling from React combined with some basic Material UI styling to deliver a minimalist visual. I listed a great video resource on Material UI below:

Learn Material UI in One Hour - React Material UI Project Tutorial [2021]
by: JavaScript Mastery
	https://www.youtube.com/watch?v=Xoz31I1FuiY













