import React, { useState, useEffect} from 'react'
import { Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'

function StartScreen({match}) {
    var [classNumber, setClassNumber] = useState(0)
    const { textbook } = useParams()

    var number = textbook.replace('textbook', '')

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
            <h1>SMART Communication {number}</h1>
            <h1 id='bold-text'>CONNECT!</h1>
            <br/><h2>{classNumber}</h2> 
            <br/><p>Match the cards !</p>
            <p>5 seconds are added for each mistake !</p>
            <br/><Button
                    id='button-start' 
                    variant="contained" 
                    color='secondary' 
                    size='big'
                    onClick={()=>{startGame(classNumber)}}
                    >
                    Start
                </Button>
        </div>
    )
}

export default StartScreen
