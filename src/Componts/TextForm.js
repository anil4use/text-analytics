import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const [Text, setText] = useState('')
    const hendelOnClick = () => {
        let newText = Text.toUpperCase();
        setText(newText)
        props.Alertm("Text conveted to UpperCase", "success")
    }
    const hendelOnClicked = () => {
        let newText = Text.toLowerCase();
        setText(newText)
        props.Alertm("Text conveted to LowerCase", "success")
    }
    const hendelOnClearClick = () => {
        props.Alertm("This text  deleted ", "danger")
        let newText = "";
        setText(newText)
    }
    const hendelOnCopyClick = () => {
        const text = document.getElementById('Textarea');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.Alertm("Text coped", "success")
    }
    const hendelOnRemoveClick = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.Alertm("extra space removed successfullly", "success")
    }
    const hendleOnchanged = (e) => {
        setText("")
        setText(e.target.value);
    }
    return (
        <>
            <div className='container'>
                <div className="mb-3 ">
                    <h1 className={`text-center my-4 text-${props.Mode === 'dark' ? 'light' : 'dark'}`}>{props.Heading} </h1>
                    <textarea className={`bg-${props.Mode}  form-control text-${props.Mode === 'dark' ? 'light' : 'dark'}`} onChange={hendleOnchanged} value={Text} id="Textarea" rows="5"></textarea>
                </div>
                <button className='btn btn-primary my-4' onClick={hendelOnClick}>Uppercase</button>
                <button style={{ marginLeft: '5px' }} className='btn btn-primary ' onClick={hendelOnClicked}>Lovercase</button>
                <button style={{ marginLeft: '5px' }} className='btn btn-primary' onClick={hendelOnClearClick}>Clear Text</button>
                <button style={{ marginLeft: '5px' }} className='btn btn-primary ' onClick={hendelOnCopyClick}>Copy Text</button>
                <button style={{ marginLeft: '5px' }} className='btn btn-primary ' onClick={hendelOnRemoveClick}>Remove extra Spase</button>
            </div>
            <div className={`container my-4 text-${props.Mode === 'dark' ? 'light' : 'dark'}`}>
                <h2 className='text-center'>Your text Summery</h2>
                <p><b> {Text.split(" ").length}</b> Word and <b>{Text.length} </b>Charactors  </p>
                <p>Time to Read this- <b>{0.008 * Text.split(" ").length}</b> minutes</p>
                <h4>Privewe</h4>
                <p className={`bg-${props.Mode}   text-${props.Mode === 'dark' ? 'light' : 'dark'}`}>{Text}</p>
            <br></br>
            <h5 className='my-4'>Online Text Editor - Edit Your Plain Text on Wordpad
            There are endless customizable options for you to play around with your text. Experiment with different text colors, change text transparency, rotate text ...
            </h5>
            </div>
        </>
    )
}
