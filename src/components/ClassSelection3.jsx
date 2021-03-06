import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ClassSelection(props) {
    const selectClass = (myClass) =>{
        window.location = myClass
    }
    const { color } = useParams()

    var textbook = 'textbook3'

    const color1 = color.replace('color=', '')

    useEffect(() => {
        console.log(color)
        console.log(props.match)
    }, [])
    return (
        <>
        <h1>Select your Class</h1>
        <div className='class-selection'>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class0/0`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 0 (page 12)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class0b/0b`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 0b (page 13)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class1/1`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 1 (page 18)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class2/2`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 2 (page 20)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class3/3`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 3 (page 26)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class4/4`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 4 (page 28)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class5/5`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 5 (page 34)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class6/6`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 6 (page 36)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class8/8`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 8 (page 46)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class9/9`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 9 (page 48)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class10/10`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 10 (page 54)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class11/11`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 11 (page 56)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class12/12`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 12 (page 62)</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass(`/start/${textbook}/class13/13`)}}>
                <h1 style={{backgroundColor: color1, color:'white'}}>Class 13 (page 64)</h1>
            </div>
        </div>
        </>
    )
}

export default ClassSelection
