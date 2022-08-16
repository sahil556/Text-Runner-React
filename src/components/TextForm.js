import React, { useState } from 'react'


export default function TextForm(props) {
    let color = props.mode === 'dark' ? 'grey' : 'white';
    let numberofword = 0;
    color = props.mode2 === 'dark' ? '#d5f4e6' : color;
    let btncolor = props.mode2 === 'dark' ? 'success' : 'primary';
    const handleUpClick = () => {
        // console.log("handle uppercase " + text);
        // let newText = text.toUpperCase();
        // setText(newText);
        // can be optimized bty
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleExtraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extraspaces Removed", "success");
    }

    const handleLpClick = () => {
        // console.log("handle lower case")
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard", "success");
    }
    const handleClearClick = () => {
        // console.log("hanlde clear")
        setText("");
        setRedo("");
    }
    const handleUndoClick = () => {
        let arr = text.split(" ");
        console.log(arr);
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
        // console.log("handle on change");
        setText(event.target.value);

        let newarr = text.split(/[ ]+/);
        let str = newarr.join(" ");
        console.log(str);
        let arr = str.split(" ");
        let len = arr.length;
        numberofword = len;
        if (str === " ")
            return;
        if (arr[0] === "" || arr[0] === " " || arr[len - 1] === "" || arr[len - 1] === " ")
            numberofword--;
        setWordCount(numberofword);
        console.log(numberofword);

        // setText(event.target.value.toUpperCase());
        // on change upper case
    }
    const [text, setText] = useState('');
    const [redotext, setRedo] = useState('');
    const [wordcount, setWordCount] = useState(0);
    // setText("Enter Your Text Here");
    return (

        <>
            <div className='container' style={{ color: color !== 'white' ? 'white' : 'Black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: color, color: props.mode === 'dark' ? 'white' : '#1c1b35' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${btncolor} mx-3 my-3`} onClick={handleUpClick}>Convert To Uppercase</button>
                <button className={`btn btn-${btncolor} mx-3`} onClick={handleLpClick}>Convert To Lowercase</button>
                <button className={`btn btn-${btncolor}`} onClick={handleUndoClick}>Undo</button>
                <button className={`btn btn-${btncolor} mx-3 my-3`} onClick={handleRedoClick}>Redo</button>
                <button className={`btn btn-${btncolor} mx-3`} onClick={handleClearClick}>Clear</button>
                <button className={`btn btn-${btncolor} `} onClick={handleExtraspaces}>Remove Extra spaces</button>
                <button className={`btn btn-${btncolor} mx-3 `} onClick={handleCopy}>Copy Text</button>
            </div>
            <div className='container my-2' style={{ color: color !== 'white' ? 'white' : 'Black' }}>
                <h2>Your Text Summary</h2>
                <p>{wordcount} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something To preview it."}</p>
            </div>
        </>
    )
}
