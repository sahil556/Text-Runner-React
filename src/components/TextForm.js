import React, { useState } from 'react'


export default function TextForm(props) {
    let color = props.mode === 'dark' ? '#13466e' : 'white';
    color = props.mode2 === 'dark' ? '#d5f4e6' : color;
    let btncolor = props.mode2 === 'dark' ? 'success' : 'primary';
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleExtraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extraspaces Removed", "success");
    }

    const handleLpClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard", "success");
    }
    const handleClearClick = () => {
        setText("");
        setRedo("");
    }
    const handleUndoClick = () => {
        let arr = text.split(" ");
        if (arr[0] === '' && arr.length === 1) {
            props.showAlert("Text Box is Empty !", "warning");
            return;
        }
        else {
            let word = arr.pop();
            let tet = arr.join(" ");
            setRedo(redotext + " " + word);
            setText(tet);
            props.showAlert("Text Undo", "success");
        }
    }
    const handleRedoClick = () => {

        let arr = redotext.split(" ");
        let len = arr.length;
        if (len === 1) {
            props.showAlert("Nothing To Redo", "warning");
            return;
        }
        let word = arr.pop();
        let tet = arr.join(" ");
        setText(text + " " + word);
        setRedo(tet);
        props.showAlert("Text Redo !", "success");
        if (len <= 2) {
            setRedo("");
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        // setText(event.target.value.toUpperCase());
        // on change upper case
    }
    const [text, setText] = useState('');
    const [redotext, setRedo] = useState('');
    // setText("Enter Your Text Here");
    return (

        <>
            <div className='container' style={{ color: color !== 'white' ? 'white' : 'Black' }}>
                <h1 className='mb-4'>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: color, color: color === 'dark' ? 'white' : '#1c1b35' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${btncolor} mx-1 my-1`} onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${btncolor} mx-1 my-1`} onClick={handleLpClick}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${btncolor} mx-1 my-1`} onClick={handleUndoClick}>Undo</button>
                <button disabled={text.length === 0} className={`btn btn-${btncolor} mx-1 my-1`} onClick={handleRedoClick}>Redo</button>
                <button disabled={text.length === 0} className={`btn btn-${btncolor} mx-1 my-1`} onClick={handleClearClick}>Clear</button>
                <button disabled={text.length === 0} className={`btn btn-${btncolor} mx-1 my-1`} onClick={handleExtraspaces}>Remove Extra spaces</button>
                <button disabled={text.length === 0} className={`btn btn-${btncolor} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
            </div>
            <div className='container my-2' style={{ color: color !== 'white' ? 'white' : 'Black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing To preview it."}</p>
            </div>
        </>
    )
}
