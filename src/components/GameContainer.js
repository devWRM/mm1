import React from 'react';

import StartMastermind from './StartMastermind';

import { Card, CardContent, CardActions, CssBaseline, Grid, Container  } from '@material-ui/core';


function GameContainer() {
    return (
        <div>
            {/* Default Material UI styling */}
            <CssBaseline />
                <main>
                    <div>
                        <container>
                            <StartMastermind />
                        </container>
                    </div>
                </main>
        </div>
    )
}

export default GameContainer;
