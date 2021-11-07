import React, { useState } from 'react';

function Input1({ guessList, handleUserGuess, revealSecretCode }) {
    const[userGuess, updateUserGuess] = useState("")

    function handleUserGuessInput(e) {
        updateUserGuess(e.target.value)
    }

    function handleSubmitUserInput(e) {
        let userGuessToArr = userGuess.split("")
// debugger;
        e.preventDefault();

        if(!!userGuess && (userGuess.length === 4) && (!userGuessToArr.includes("8")) && (!userGuessToArr.includes("9"))) {
            // handleUserGuess(userGuess)
            handleUserGuess(userGuessToArr)
            updateUserGuess("")
        } else {
            alert("enter 4 numbers - use numbers from 0 to 7 - do not use 8 or 9")
            updateUserGuess("")
        }


        if(guessList.length > 8) {
            revealSecretCode(true)
        }

        // Reset state
        updateUserGuess("")
    }







    return (
        <form onSubmit={handleSubmitUserInput}>
            
                
                    <label>Enter 4 numbers: 0 - 7</label>
                    <input  type="number" 
                            value={userGuess}
                            onChange={handleUserGuessInput}
                            style={{width: "150px"}}                            
                    />
                    <button type="submit">submit</button>
                
        
        </form>
    )
}

export default Input1;
