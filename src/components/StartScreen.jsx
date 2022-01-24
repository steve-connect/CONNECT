import React, { useState, useEffect} from 'react'
import { Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'

function StartScreen({match}) {
    var [classNumber, setClassNumber] = useState(0)
    const { textbook, classNum } = useParams()

    var colors = ['red', 'gold', 'green']

    var number = textbook.replace('textbook', '')

    useEffect(()=>{
        setClassNumber(classNumber = match.params.class)
        return () =>{

        }
    }, [])

    const startGame = () =>{
        window.location = `/game/${textbook}/${classNumber}`
    }


    return (
        <div>
            <h1 style={{backgroundColor:colors[number - 1], color:'white', padding:'10px',marginTop:'0px'}}>SMART Communication {number}</h1>
            <h1 id='bold-text'>CONNECT!</h1>
            <br/><h2>Class {classNum}</h2> 
            <br/><p>Match the cards !</p>
            <p>5 seconds are added for each mistake !</p>
            <br/><Button
                    id='button-start' 
                    variant="contained" 
                    style={{backgroundColor:colors[number - 1], color:'white'}}
                    size='large'
                    onClick={()=>{startGame(classNumber)}}
                    >
                    Start
                </Button>
        </div>
    )
}

export default StartScreen
