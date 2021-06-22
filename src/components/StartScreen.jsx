import React, { useState, useEffect} from 'react'
import { Button } from '@material-ui/core'

function StartScreen({match}) {
    var [classNumber, setClassNumber] = useState(0)

    useEffect(()=>{
        setClassNumber(classNumber = match.params.class)
        return () =>{

        }
    }, [])

    const startGame = () =>{
        window.location = `/game/${classNumber}`
    }


    return (
        <div>
            <h1>SMART Communication 1</h1>
            <h1 id='bold-text'>CONNECT!</h1>
            <br/><h2>{classNumber}</h2> 
            <br/><p>Match the cards!</p>
            <p>1 second is added for each mistake.</p>
            <br/><Button
                    id='button-start' 
                    variant="contained" 
                    color="secondary" 
                    size='big'
                    onClick={()=>{startGame(classNumber)}}
                    >
                    Start
                </Button>
        </div>
    )
}

export default StartScreen
