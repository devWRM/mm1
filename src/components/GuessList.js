import React, {  useState } from 'react';

import Guess from './Guess.js';




function GuessList({ codeNumbers, guessList }) {    
    // debugger;

    let guesses =   guessList.map(guess => {
                            
                        return <div key={guess.id}>
                            {/* <Guess guess={guess} /> */}

                            {/* { guess.join("")} */}
                            { guess.code}
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
