import React from 'react'
import { Button } from '@material-ui/core'

function GameOverMenu() {
    const quit = () => {
        window.location = '/'
    }
    const tryAgain = () => {
        window.location.reload()
    }

    return (
        <div style={{marginTop:'30vh'}}>
            <Button id='button-start' variant="contained" color="secondary" size='big' onClick={()=>{tryAgain()}}>TRY AGAIN</Button>
            <br/><Button style={{marginTop:'10vh'}} id='button-start' variant="contained" color="secondary" size='big' onClick={()=>{quit()}}>QUIT</Button>
        </div>
    )
}

export default GameOverMenu
