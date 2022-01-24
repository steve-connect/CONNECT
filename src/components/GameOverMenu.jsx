import React from 'react'
import { Button } from '@material-ui/core'

function GameOverMenu({number}) {
    var colors = ['red', 'gold', 'green']
    var number = parseInt(number);

    const quit = () => {
        window.location = '/'
    }
    const tryAgain = () => {
        window.location.reload()
    }

    return (
        <div style={{marginTop:'30vh'}}>
            <Button id='button-start' variant="contained" size='large' style={{backgroundColor:colors[number - 1], color:'white',marginBottom:'30px'}} onClick={()=>{tryAgain()}}>TRY AGAIN</Button>
            <br/><Button style={{marginTop:'10vh'}} id='button-start' size='large' variant="contained" style={{backgroundColor:colors[number - 1], color:'white',marginBottom:'30px'}} onClick={()=>{quit()}}>QUIT</Button>
        </div>
    )
}

export default GameOverMenu
