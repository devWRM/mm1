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

    function handleStatusHints(hints) {
        return updateUserGuess({ ...userGuess, status: hints})
    }

    function handleSubmitUserInput(e) {
        e.preventDefault();

        // Used to check for 8 & 9
        let userGuessToArr = userGuess.code.split("")

// debugger;      

        if(!!userGuess.code && (userGuess.code.length === 4) && (!userGuessToArr.includes("8")) && (!userGuessToArr.includes("9"))) {
            // handleUserGuess(userGuessToArr)
            // updateUserGuess({ ...userGuess, id: Math.floor(Math.random()*10000) })

            if(codeNumbers === userGuess.code) {
                handleUserGuess({ ...userGuess, id: Math.floor(Math.random()*10000), status: "🔴🔴🔴🔴 CONGRATULATIONS Code-Breaker!" })
                revealSecretCode(true)
                handleShowNewGameButton(true)
                handleShowInput1(false)
            } else {
           
                // handleUserGuess({ ...userGuess, id: Math.floor(Math.random()*10000), status: "Checking status..." })
                // updateUserGuess({ ...userGuess, id: "", code: "", status: ""}) 
                
                // MASTERMIND HINTS
                // White indicates ⚪️	=>>	Correct color Incorrect column  =>> correct number / incorrect column
                // Red indicates 🔴	=>> Correct color Correct column    =>> correct number / correct column
                // NOTE Check for red & remove red pairs from both codes
                // NOTE Then iterate

                let hints = "";

             
                    setTimeout( () => { 
                    
                        // let hints = "";
                        let codeMaker = codeNumbers.split("")
                        let codeBreaker = userGuess.code.split("")
            
                        for(let idx = 0; idx < codeMaker.length; idx++) {
                            if(codeMaker[idx] === codeBreaker[idx]) {
                                hints = hints + " 🔴 "                           
                            }
                        }

              
                        // handleUserGuess({ ...userGuess, id: Math.floor(Math.random()*10000), status: handleStatusHints(hints) })
                        // updateUserGuess({ ...userGuess, id: "", code: "", status: ""})
                     
                        handleStatusHints(hints)
                        
                       
                    }, 15);       // Set enough time (5000 & NOT 1000) to capture hints

                
                    function getHandler() {
                        handleUserGuess({ ...userGuess, id: Math.floor(Math.random()*10000), status: hints })

                    }
                    setTimeout(getHandler, 20);

                    // handleUserGuess({ ...userGuess, id: Math.floor(Math.random()*10000) })
                    
                    function getReset() {
                        updateUserGuess({ ...userGuess, id: "", code: "", status: ""})

                    }
                    setTimeout(getReset, 25)
                    


            }


            
        } else {
            alert("enter 4 numbers - use numbers from 0 to 7 - do not use 8 or 9")
            updateUserGuess({ ...userGuess, id: "", code: "", status: "" })            
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
