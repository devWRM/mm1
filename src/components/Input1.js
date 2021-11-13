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
           
                       
                // MASTERMIND HINTS
                // White indicates ⚪️	=>>	Correct color Incorrect column  =>> correct number / incorrect column
                // Red indicates 🔴	=>> Correct color Correct column    =>> correct number / correct column
                // Blue indicates 🔵 =>> NOT a correct color =>> incorrect number
                // NOTE Check for red & remove red pairs from both codes
                // NOTE Then iterate

                let hints = "";

             
                    setTimeout( () => { 
                    
                        // let hints = "";
                        let codeMaker = codeNumbers.split("")
                        let codeBreaker = userGuess.code.split("")
                        let codeLength = codeMaker.length
                        let correctIndices = []
            
                        for(let idx = 0; idx < codeLength; idx++) {
                        // DO ALL BALLS 🔴 ⚪️ 🔵 INSIDE OF FOR LOOP

                        // Correct number in correct location =>> 🔴
                            if(codeMaker[idx] === codeBreaker[idx]) {
                                hints = hints + " 🔴 "   
                                
                                // collect indices to be removed outside of if statement
                                // correctIndices.push(idx)

                                codeMaker[idx] = "x"
                                codeBreaker[idx] = "x"
                            }

                            // For loop with if statement checks for .includes
                            
                            // If statement check for blue

                        }

                        // Check if remaining codeBreaker numbers are included in codeMaker
                        for(let codeBreakerIdx = 0; codeBreakerIdx < codeLength; codeBreakerIdx++) {
                            if(codeBreaker[codeBreakerIdx] !== "x") {
                                if(codeMaker.includes(codeBreaker[codeBreakerIdx])) {
                                    hints = hints + " ⚪️ "

                                    let xMaker = codeMaker.indexOf(codeBreaker[codeBreakerIdx])
                                    codeMaker[xMaker] = "x"
                                    // codeBreaker[codeBreakerIdx] = "x"
                                } else {
                                    hints = hints + " 🔵 "
                                }
                            }

                        }

                     
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

        // NOTE If statement set to 8 (NOT 10) because: 
        // -> guessList is NOT updated HERE until AFTER submit clicked for NEXT guess input
        // -- so guessList showing HERE always reflects 1 guess behind
        // -- so has to be triggered earlier due to the delayed update
        // So when 9 guesses are shown in browser, ONLY 8 reflected HERE
        // So ACTUAL BROWSER 10 guesses is reflected here by (guessList.length > 8) setting guessList to trigger at 9
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
