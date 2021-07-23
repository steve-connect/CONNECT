import React, { useState } from 'react'

function TextbookSelection() {
    const selectTextbook1 = (loc) => {
        window.location = loc
    }
    const selectTextbook2 = (loc) => {
        window.location = loc
    }
    const selectTextbook3 = (loc) => {
        window.location = loc
    }

    return (
        <>
            <h1>Select your Textbook</h1>
            <div className='textbook-selection'>
                <div className='textbook' onClick={()=>{selectTextbook1(`/select-class/textbook1/color=red`)}}>
                    <h1 style={{backgroundColor: 'red', color:'white'}}>SMART Communication 1</h1>
                </div>
                <div className='textbook' onClick={()=>{selectTextbook2(`/select-class/textbook2/color=gold`)}}>
                    <h1 style={{backgroundColor: 'gold', color:'white'}}>SMART Communication 2</h1>
                </div>
                <div className='textbook' onClick={()=>{selectTextbook3(`/select-class/textbook3/color=green`)}}>
                    <h1 style={{backgroundColor: 'green', color:'white'}}>SMART Communication 3</h1>
                </div>
            </div>
        </>
    )
}

export default TextbookSelection
