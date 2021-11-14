import React, {  useState } from 'react';

// import Guess from './Guess.js';

import { Typography } from '@material-ui/core';






function GuessList({ message, guessList }) {    
    // debugger;

    let guesses =   guessList.map(guess => {
                            
                        return <div key={guess.id}>
                            
                            { guess.code} [ {guess.status} ]


                        </div>
                    })

                    console.log(guessList.length) 

    return (
        <div>   {/*         <i class="material-icons">cloud</i>     */}
                
                <p> <b> You have { 10 - guessList.length } {guessList.length === 9 ? "guess" : "guesses"}. </b> </p>
               
                {/* {message} */}

                {/* { 10 - guessList.length === 0 && <div>Sorry... Try again!</div>} */}
               
                <Typography  variant="h7" color="textSecondary" gutterBottom>
                    🔴 Correct number in correct location | 
                    ⚪️  Correct number in wrong location | 
                    🔵 Incorrect number
                </Typography>
                
                { guesses }

                {/* NOTE Code in notes for blinking text */}


        </div>
    )
}

export default GuessList;
