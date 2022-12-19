
import React, { useState } from 'react'

export default function TextForm(props) {
    const uppercase =()=>{
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert(" Sucessfully Converted to UpperCase", "success");
    }
    const lowercase =()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert(" Sucessfully Converted to LowerCase", "success");
      }
    const onchange= (event) =>{
        setText(event.target.value);
    }
    const copy= () =>{
        navigator.clipboard.write(text);
        props.showAlert(" Sucessfully Copied", "success");
    }
    const[text,setText]=useState('');
  return (
  
    <>
     <div className="container my-3"style={{color:props.mode==='light'?'black' : 'white'}} >
      <h2 htmlFor="exampleFormControlTextarea1 mx-5" >{props.heading}</h2>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={onchange}
       style={{backgroundColor:props.mode==='light'?'white' : 'grey', color:props.mode==='dark'?'white' : 'black'}}></textarea>
      <button className="btn btn-primary my-3" onClick={uppercase}>Upper Case</button>
      <button className="btn btn-primary my-3 mx-4" onClick={lowercase}>Lower Case</button>
      <button className="btn btn-primary my-3 mx-3" onClick={copy}>Copy</button>
     </div>
     <div className="container">
        <h2>Your Text Summary</h2>
        <h6>{text.split(" ").length-1} Words and {text.length} Charcters</h6>
        <h6>{0.008 * text.split(" ").length} Minutes To Read</h6>
        <h5>Preview</h5>
        <h6>{text.length>0?text:"Enter Text Above To Preview Here"}</h6>
     </div>
   </>
  )
}
