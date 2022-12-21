import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase button was clicked!");
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleLowerClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleClear = () => {
        setText('');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        alert("Copied : " + text);
    }
    
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // setText("New Text") //Correct way;

    return (
        <>
        <div className="container" style={{color: props.mode ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" style={{color: props.mode ? 'white' : 'black'}}>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ? 'gray' : 'white', color: props.mode ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            <button className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter(word => word  !=='').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
        </div>
        <div className="container my-3" style={{color: props.mode ? 'white' : 'black'}}>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
        </div>
        </>
    )
}
