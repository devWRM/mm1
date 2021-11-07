import React, { useState } from 'react';

import DisplayCodeNumbers from './DisplayCodeNumbers';
import Input1 from './Input1';

import StatusMessage from './StatusMessage.js';

function StartMastermind() {

    const[codeNumbers, updateCodeNumbers] = useState("")
    const[guess, updateGuess] = useState("")
    const[showStart, updateStart] = useState(true)
    const[showInput1, updateShowInput1] = useState(false)
    const[message, updateMessage] = useState("")
    const[checker, updateChecker] = useState("")
    


    // Fetch the number code
    // Change to number array & pop off empty space
    // Then store in state
    function fetchSecretCode() {
        fetch("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new")            
        .then(resp => resp.text())
        .then(numbers => { 
            let codedNumbers = numbers.split("\n")
            codedNumbers.pop()        
            updateCodeNumbers(codedNumbers)
        })

        updateStart(!showStart)
        updateShowInput1(!showInput1)
        
    }


    function handleUserGuess(userGuessInput){
    
        let guessNumbers = userGuessInput.split("")

        updateGuess(guessNumbers)
        
// debugger;

        // NOTE CanNOT use code below because do NOT have access to secret 4-number code codeNumbers state
        // if((guessNumbers[0] === codeNumbers[0]) && (guessNumbers[1] === codeNumbers[1]) && (guessNumbers[2] === codeNumbers[2]) && (guessNumbers[3] === codeNumbers[3]) && ) {
        //     updateMessage("You broke the code!")
        //     alert("You broke the code!")
        // }  
        
    }


let testing = codeNumbers;
// message && alert(message)
console.log(codeNumbers)
console.log("GUESS", guess)

    return (
        <div style={{marginTop: "10px"}}> 
            { showStart && 
                (<div>
                    Start Mastermind
                    <br />
                    <button onClick={fetchSecretCode}>click</button>

                    </div>
                )
            }


                <DisplayCodeNumbers codeNumbers={codeNumbers} />


                { 
                    showInput1 && <Input1 codeNumbers={codeNumbers} handleUserGuess={handleUserGuess} />
                }


                <StatusMessage message={message} />

            </div>
    )
}

export default StartMastermind;
