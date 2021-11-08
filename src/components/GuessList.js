import React, {  useState } from 'react';

import Guess from './Guess.js';




function GuessList({ guessList }) {    
    // debugger;

    let guesses =   guessList.map(guess => {
                            
                        return <div key={guess.id}>
                            {/* <Guess guess={guess} /> */}

                            {/* { guess.join("")} */}
                            { guess.code} [{guess.status}]
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
