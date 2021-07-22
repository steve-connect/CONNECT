import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ClassSelection(props) {
    const selectClass = (myClass) =>{
        window.location = myClass
    }
    const { color } = useParams()

    const color1 = color.replace('color=', '')

    useEffect(() => {
        console.log(color)
        console.log(props.match)
    }, [])
    return (
        <>
        <h1>Select your Class</h1>
        <div className='class-selection'>
            <div className='class-number' onClick={()=>{selectClass('/start/class0')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 0</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class0b')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 0b</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class1')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 1</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class2')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 2</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class3')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 3</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class4')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 4</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class5')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 5</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class6')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 6</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class8')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 8</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class9')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 9</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class10')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 10</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class11')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 11</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class12')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 12</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class13')}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 13</h1>
            </div>
        </div>
        </>
    )
}

export default ClassSelection
