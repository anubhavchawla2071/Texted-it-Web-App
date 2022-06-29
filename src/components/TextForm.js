import React,{useState} from "react";
  
export default function TextForm(props) {
    const  [text, setText] = useState("")
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleCopy=()=>{
        var text=document.getElementById('exampleFormControlTextarea1')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    placeholder="Enter text here"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UPPPER CASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to lower case</button>
            <button className="btn btn-primary mx-2" onClick={handleSpace} >Remove extra spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>

            <p>Words Are :{text.split(" ").length} Characters are {text.length}</p>
            <p>{text}</p>

        </>
    );
}
