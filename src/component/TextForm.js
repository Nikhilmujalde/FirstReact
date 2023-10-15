

import React, { useState } from 'react';



export default function TextForm(props) {
    // text ek variable jisko agar apan update karege to vo setText se karenge
    // we cannot directly update text or any variable we have to update them through function
    const [text, setText] = useState('');
    const changeUpcase = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        // console.log(newText)
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        // isse aisa hoga ki apn usme likh payege or vo jo pehle se tha + jo
        //  likh rahe hai vo nayi value ho jayegi text ki
        // console.log(event.target);
        setText(event.target.value);
        // console.log(text);
    }

    const changeLowercase = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted to lowercase", "success");
    }
    const changeCleartext = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text ", "success");
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied Text", "success");
    }

    const removeExtraSpaces = () => {
        // this line breaks the string text into an array removing spaces 
        let newText = text.split(/[ ]+/);
        // and this line join all the elements of array into a single string
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }



    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="container" >
                    <h1>{props.heading} </h1>
                    <div className="mb-3">
                        {/* on change se aisa hoga ki apan kuch change nhi kar payege par setText se kar skte hai */}
                        {/* first {} for js and second {} for writing prperties */}
                        <textarea className="form-control" value={text} style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }}
                            onChange={handleOnChange} id="MyBox" rows="8" ></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={changeUpcase} >Change to Uppercase</button>
                    <button className="btn btn-primary ms-3" onClick={changeLowercase} >Change to Lowercase</button>
                    <button className="btn btn-primary ms-3" onClick={changeCleartext} >Clear Text</button>
                    <button className="btn btn-primary ms-3" onClick={copyText} >Copy Text</button>
                    <button className="btn btn-primary ms-3" onClick={removeExtraSpaces} >Remove Extra space</button>
                </div>
                <div className="container my-4">
                    <h2>Your text summary</h2>
                    {/* text.split will give the array of words and length will count the no of arrays */}
                    <p>{text.split(" ").length > 1 ? text.split(" ").length - 1 : 0}
                        words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something to preview"}</p>
                </div>
            </div>
        </>
    )
}
