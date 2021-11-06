import React, { useState } from 'react';

import DisplayCodeNumbers from './DisplayCodeNumbers';

function StartMastermind() {

    const[codeNumbers, updateCodeNumbers] = useState("")
    const[guess, updateGuess] = useState(0)
    const[showStart, updateStart] = useState(true)


    // Fetch the number code
    // Change to number array & pop off empty space
    // Then store in state
    function fetchNumberCode() {
        fetch("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new")            
        .then(resp => resp.text())
        .then(numbers => { 
            let codedNumbers = numbers.split("\n")
            codedNumbers.pop()        
            updateCodeNumbers(codedNumbers)
        })

        updateStart(!showStart)

    }


console.log(codeNumbers)


    return (
        <div style={{marginTop: "10px"}}> 
            { showStart && 
                (<div>
                    Start Mastermind
                    <br />
                    <button onClick={fetchNumberCode}>click</button>
                </div>
                )
            }


                <DisplayCodeNumbers codeNumbers={codeNumbers} />
            </div>
    )
}

export default StartMastermind;
