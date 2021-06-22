import React from 'react'

function TextbookSelection() {
    const selectTextbook = (loc) => {
        window.location= loc
    }
    return (
        <>
        <h1>Select your Textbook</h1>
        <div className='textbook-selection'>
            <div className='textbook' onClick={()=>{selectTextbook('/select-class/textbook1')}}>
                <h1>SMART Communication 1</h1>
            </div>
            <div className='textbook'>(Coming Soon)</div>
            <div className='textbook'>(Coming Soon)</div>
        </div>
        </>
    )
}

export default TextbookSelection
