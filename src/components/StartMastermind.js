import React, { useState } from 'react';


import DisplayCodeNumbers from './DisplayCodeNumbers.js';
import Input1 from './Input1.js';
import GuessList from './GuessList.js';

import Button from '@material-ui/core/Button';
import { Typography, Container } from '@material-ui/core';
// import SaveIcon from '@material-ui/icons/Save';


function StartMastermind() {

    const[codeNumbers, updateCodeNumbers] = useState("")
    const[guessList, updateGuessList] = useState([])        //<<= []
    const[showStart, updateStart] = useState(true)
    const[showGuesses, updateShowGuesses] = useState(false)  // <<= false initial
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

        // Hide guesses to restrict user access
        // Hide start to restrict user access
        // Reveal the form for user guess input
        updateShowGuesses(!showGuesses)
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
        updateShowGuesses(!showGuesses)
        updateShowInput1(false)
        updateShowSecretCode(false)
        updateShowNewGameButton(false)
    }

    // Give user access to guesses functionality
    // function handleShowGuesses() {
    //     updateShowGuesses(!showGuesses)
    // }

    // Shows the new game button when game is NOT in progress
    // Hides the new game button when a game IS in progress
    function handleShowNewGameButton(newGameButtonStatus) {
        updateShowNewGameButton(newGameButtonStatus)
    }



console.log(codeNumbers)
// console.log("GUESSES", guessList)

    return (
        // <div style={{marginTop: "10px"}}> 

    <>
    <container>

        {/* Show/Hide initial game message & button to start a new game */}
            { showStart && 
                (   
                    <div>
                        <Typography variant="h1">Start Mastermind</Typography>
                        <br />

                        <Button  variant="contained" color="primary" size="large" onClick={fetchSecretCode}>
                            <i class="material-icons">circle</i> 
                            click
                        </Button>


                    </div>
                )
            }


                {
                    showSecretCode ? <DisplayCodeNumbers codeNumbers={codeNumbers} /> : ""
                }



                { 
                    showInput1 && <Input1 handleShowNewGameButton={handleShowNewGameButton} handleShowInput1={handleShowInput1} codeNumbers={codeNumbers} guessList={guessList} handleUserGuess={handleUserGuess} revealSecretCode={revealSecretCode} />
                }


                {
                    showGuesses && <GuessList guessList={guessList} />
                }


                {
                    showNewGameButton ? <button onClick={handleNewGame} style={{ marginTop: "20px"}}>Click for New Game</button> : ""
                }

    </container>
    </>

    )
}

export default StartMastermind;
 
 
 
            {/* </div> */}
