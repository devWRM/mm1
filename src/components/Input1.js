import React, { useState } from 'react';

function Input1({ handleShowNewGameButton, handleShowInput1, codeNumbers, guessList, handleUserGuess, revealSecretCode }) {
// debugger;
    const[userGuess, updateUserGuess] = useState({
        id: "",
        code: "",
        status: ""
    })


    function handleUserGuessInput(e) {
        updateUserGuess({ ...userGuess, code: e.target.value })
    }

    function handleSubmitUserInput(e) {
        e.preventDefault();

        // Used to check for 8 & 9
        let userGuessToArr = userGuess.code.split("")

// debugger;      

        if(!!userGuess.code && (userGuess.code.length === 4) && (!userGuessToArr.includes("8")) && (!userGuessToArr.includes("9"))) {
            // handleUserGuess(userGuessToArr)

            if(codeNumbers === userGuess.code) {
                handleUserGuess({ ...userGuess, id: Math.floor(Math.random()*10000), status: "CONGRATULATIONS! You broke the code!" })
                revealSecretCode(true)
                handleShowNewGameButton(true)
                handleShowInput1(false)
            } else {
                handleUserGuess({ ...userGuess, id: Math.floor(Math.random()*10000), status: "Checking status..." })
                updateUserGuess({ ...userGuess, id: "", code: "", status: ""})            
            }

            
        } else {
            alert("enter 4 numbers - use numbers from 0 to 7 - do not use 8 or 9")
            updateUserGuess({ ...userGuess, id: "", code: "", status: ""})            
        }


        if(guessList.length > 8) {
            revealSecretCode(true)
            handleShowNewGameButton(true)
            handleShowInput1(false)
        }

        // Reset state
        updateUserGuess({ ...userGuess, id: "", code: "", status: ""})            
    }







    return (
        <form onSubmit={handleSubmitUserInput}>
            
                
                    <label>Enter 4 numbers: 0 - 7</label>
                    <input  type="number" 
                            value={userGuess.code}
                            onChange={handleUserGuessInput}
                            style={{width: "150px", margin: "5px"}}                            
                    />
                    <button type="submit">submit</button>
                
        
        </form>
    )
}

export default Input1;
