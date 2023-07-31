import React, { useState } from 'react'

export default function Textform(props) {

    const handleOnChange = (event) => {
        console.log("Handle on change");
        setText(event.target.value);
    }

    const handleOnClick = () => {
        console.log("Upper Case");
        let newText = text.toUpperCase();
        setText(newText);
        console.log(text.length);
        props.showAlert("success","Enable Upper Case")
    }

    const handleLowerClick = () => {
        console.log("Down Case");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success","Enable Lower Case")
    }


    const handleOnRemove = () => {
        let newValue = text.replace(/ /g, " ");
        let newStore = newValue.split(" ");
        console.log(newStore);

        let newVar = newStore.filter(variable)
        console.log(newVar);
        let newConsole = newVar.join(' ')
        setText(newConsole);
        console.log("Handle On Remove");
        props.showAlert("success","Enable Remove Extra Space")

        function variable(newStore) {
            if (newStore.length !== '') {
                return newStore
            }
        }

    }

    const handleOnClear = (text) => {
        if (text !== " ") {
            text = "";
        }
        setText(text);
        console.log("Clear Text");
        props.showAlert("success","Enable Clear Mode")
    }

    const handleOnEach = () =>{
        let newSplit = text.split(" ");
        for(let i=0;i<newSplit.length;i++){
            newSplit[i] = newSplit[i].charAt(0).toUpperCase()+newSplit[i].slice(1);
        }
        let newJoin = newSplit.join(" ");
        setText(newJoin)
        props.showAlert("success","Enable Each Word Capital")
    }

    const handleOnCopy=()=>{
        let copy = document.getElementById("exampleFormControlTextarea1");
        copy.select();
        navigator.clipboard.writeText(copy.value)
        props.showAlert("success","Enable Copy Word")
    }

    const [text, setText] = useState("Enter the Input")
    return (
        <>
            <div className='container' style={{color:props.mode==="light"?"Black":"white"}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?'white':'grey',color:props.mode==="light"?"black":"white"}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleOnClear}>Clear Input</button>
                <button className="btn btn-primary mx-2" onClick={handleOnEach}>Capital Each Words</button>
                <button className="btn btn-primary mx-2" onClick={handleOnRemove}>Remove extra Space</button>
                <button className='btn btn-primary mx-2' onClick={handleOnCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
                <p>Your word is {text.split(" ").length} and your character is {text.length}</p>
                <h1>Preview</h1>
                <p>{text}</p>
                {/* How to count the number of characters without spaces? */}
                {/* <p>{text.trim().length } characters</p> */}
                {/* <p>{text.replace(/ /g," ").split(' ').filter(value => value !=="").length} words</p> */}
            </div>
        </>
    )
}
