import React, {  useState } from 'react';

import Guess from './Guess.js';




function GuessList({ guessList }) {    
    // debugger;

    let guesses =   guessList.map(guess => {
                            
                        return <div key={guess.id}>
                            
                            { guess.code} [ {guess.status} ]


                        </div>
                    })

    

    return (
        <div>
                <p> <b> You have { 10 - guessList.length } guesses left. </b> </p>
                
                { guesses }

                {/* NOTE Code in notes for blinking text */}


        </div>
    )
}

export default GuessList;
