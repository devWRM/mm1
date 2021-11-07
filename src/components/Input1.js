import React, { useState } from 'react';

function Input1({ codeNumbers, handleUserGuess }) {
    const[userGuess, updateUserGuess] = useState("")

    function handleUserGuessInput(e) {
        updateUserGuess(e.target.value)
    }

    function handleSubmitUserInput(e) {
// debugger;
        e.preventDefault();

        if(!!userGuess && (userGuess.length === 4) ) {
            // handleUserGuess(userGuess)
            handleUserGuess(userGuess)
        } else {
            updateUserGuess("")
        }

        // Reset state
        updateUserGuess("")
    }







    return (
        <form onSubmit={handleSubmitUserInput}>
            
                
                    <label>Enter 4 numbers: 0 - 7</label>
                    <input  type="text" 
                            value={userGuess}
                            onChange={handleUserGuessInput}
                            style={{width: "150px"}}                            
                    />
                    <button type="submit">submit</button>
                
        
        </form>
    )
}

export default Input1;
