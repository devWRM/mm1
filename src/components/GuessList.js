import React, {  useState } from 'react';

import Guess from './Guess.js';




function GuessList({ message, guessList }) {    
    // debugger;

    let guesses =   guessList.map(guess => {
                            
                        return <div key={guess.id}>
                            
                            { guess.code} [ {guess.status} ]


                        </div>
                    })

    

    return (
        <div>   
                <p> <b> You have { 10 - guessList.length } guesses. </b> </p>
                {message}

                {/* { 10 - guessList.length === 0 && <div>Sorry... Try again!</div>} */}
               
                <p>
                    🔴 Correct number in correct location | 
                    ⚪️  Correct number in wrong location | 
                    🔵 Incorrect number
                </p>
                
                { guesses }

                {/* NOTE Code in notes for blinking text */}


        </div>
    )
}

export default GuessList;
