import React, { useState } from 'react';


import DisplayCodeNumbers from './DisplayCodeNumbers.js';
import Input1 from './Input1.js';
import GuessList from './GuessList.js';

import Button from '@material-ui/core/Button';



function StartMastermind() {

    const[codeNumbers, updateCodeNumbers] = useState("")
    const[guessList, updateGuessList] = useState([])        //<<= []
    const[showStart, updateStart] = useState(true)
    const[showInput1, updateShowInput1] = useState(false)
    const[showSecretCode, updateShowSecretCode] = useState(false)  // <<= false initial
    const[showNewGameButton, updateShowNewGameButton] = useState(false)


    // Fetch the secret number code
    // Change fetched data to number array & pop off empty space then re-join
    // Then store the string secret code in state
    function fetchSecretCode() {
        fetch("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new")            
        .then(resp => resp.text())
        .then(numbers => { 
            let codedNumbers = numbers.split("\n")
            codedNumbers.pop() 
            codedNumbers = codedNumbers.join("")       
            updateCodeNumbers(codedNumbers)
        })

        // Hide start to restrict user access
        // Reveal the form for user guess input
        updateStart(!showStart)
        updateShowInput1(!showInput1)
        
    }


    // add user's guess to the list of guesses
    function handleUserGuess(userGuessInput){  
        updateGuessList([ userGuessInput, ...guessList ])
    }


    function revealSecretCode(revealStatus) {
        updateShowSecretCode(revealStatus)
    }

    // 
    function handleShowInput1(showStatus) {
        updateShowInput1(showStatus)
    }

    // Reset ALL states
    function handleNewGame() {
        updateCodeNumbers("")
        updateGuessList([])
        updateStart(true)
        updateShowInput1(false)
        updateShowSecretCode(false)
        updateShowNewGameButton(false)
    }

    // Shows the new game button when game is NOT in progress
    // Hides the new game button when a game IS in progress
    function handleShowNewGameButton(newGameButtonStatus) {
        updateShowNewGameButton(newGameButtonStatus)
    }



console.log(codeNumbers)
// console.log("GUESSES", guessList)

    return (
        <div style={{marginTop: "10px"}}> 

        {/* Show/Hide initial game message & button to start a new game */}
            { showStart && 
                (<div>
                    Start Mastermind
                    <br />
                    {/* <button onClick={fetchSecretCode}>click</button> */}
                    <Button variant="contained" onClick={fetchSecretCode}>click</Button>

                    </div>
                )
            }


                {
                    showSecretCode ? <DisplayCodeNumbers codeNumbers={codeNumbers} /> : ""
                }



                { 
                    showInput1 && <Input1 handleShowNewGameButton={handleShowNewGameButton} handleShowInput1={handleShowInput1} codeNumbers={codeNumbers} guessList={guessList} handleUserGuess={handleUserGuess} revealSecretCode={revealSecretCode} />
                }


                <GuessList guessList={guessList} />


                {
                    showNewGameButton ? <button onClick={handleNewGame} style={{ marginTop: "20px"}}>Click for New Game</button> : ""
                }



            </div>
    )
}

export default StartMastermind;
