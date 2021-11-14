import React, {  useState } from 'react';

// import Guess from './Guess.js';

import { Typography } from '@material-ui/core';






function GuessList({ guessList }) {    
    // debugger;

    let guesses =   guessList.map(guess => {
                            
                        return <div key={guess.id}>
                            
                            {/* { guess.code} [ {guess.status} ] */}

                            <Typography variant="h5" color="textPrimary" gutterBottom marginTop="10px">{ guess.code} [ {guess.status} ]</Typography>


                        </div>
                    })

                    console.log(guessList.length) 

    return (
        <div>   {/*         <i class="material-icons">cloud</i>     */}
                
                <p> <b> You have { 10 - guessList.length } {guessList.length === 9 ? "guess" : "guesses"}. </b> </p>
               
               
                <Typography  variant="h7" color="textSecondary">
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
