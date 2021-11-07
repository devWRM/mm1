import React, {  useState } from 'react';

import Guess from './Guess.js';




function GuessList({ codeNumbers, guessList }) {
    const[list, updateList] = useState("")
    
    // debugger;

    let guesses =   guessList.map(guess => {
                            
                        return <div key={Math.floor(Math.random() * 10000)}>
                            {/* <Guess guess={guess} /> */}

                            { guess.join("")}
                        </div>
                    })


    return (
        <div>
                <b> You have { 10 - guessList.length } guesses left. </b>
                
                { guesses }

        </div>
    )
}

export default GuessList;
