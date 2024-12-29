import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }

    const handleClear = () => {
        setText('');
        props.showAlert('Text Cleared', 'success');
    }

    const handleOnChange = (e) => {
        // console.log(e);
        setText(e.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard', 'success');
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <h1>{ props.heading }</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={ text } placeholder='Enter text here' onChange={ handleOnChange } id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={ handleUpClick }>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={ handleLoClick }>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={ handleCopy }>Copy</button>
                <button className="btn btn-danger mx-1" onClick={ handleClear }>Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{ text.length > 0 ? text.split(' ').length : 0} words and { text.length } characters</p>
                <p>{0.008 * text.split(' ').length} minutes read</p>
            </div>
            <div className="container my-3">
                <h1>Preview</h1>
                <p>{ text.length > 0 ? text : "Enter something in the textbox above to preview it here" }</p>
            </div>
        </>
    )
}
