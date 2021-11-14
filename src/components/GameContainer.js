import React from 'react';

import StartMastermind from './StartMastermind';

import { Card, CardContent, CardActions, CssBaseline, Container  } from '@material-ui/core';


function GameContainer() {
    return (
        <div>
            {/* Default Material UI styling */}
            <CssBaseline />
                <main>
                    <div>
                        <Container>
                            <StartMastermind />
                        </Container>
                    </div>
                </main>
        </div>
    )
}

export default GameContainer;
