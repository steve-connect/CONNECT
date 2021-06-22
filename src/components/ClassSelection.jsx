import React from 'react'

function ClassSelection() {
    const selectClass = (myClass) =>{
        window.location = myClass
    }
    return (
        <>
        <h1>Select your Class</h1>
        <div className='class-selection'>
            <div className='class-number' onClick={()=>{selectClass('/start/class0')}}>
                <h1>Class 0</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class0b')}}>
                <h1>Class 0b</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class1')}}>
                <h1>Class 1</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class2')}}>
                <h1>Class 2</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class3')}}>
                <h1>Class 3</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class4')}}>
                <h1>Class 4</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class5')}}>
                <h1>Class 5</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class6')}}>
                <h1>Class 6</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class8')}}>
                <h1>Class 8</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class9')}}>
                <h1>Class 9</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class10')}}>
                <h1>Class 10</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class11')}}>
                <h1>Class 11</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class12')}}>
                <h1>Class 12</h1>
            </div>
            <div className='class-number' onClick={()=>{selectClass('/start/class13')}}>
                <h1>Class 13</h1>
            </div>
        </div>
        </>
    )
}

export default ClassSelection
