import React,{useState} from 'react'

export default function Textform(props) {
  const handleclick1=()=>{
    const newtext="";
    setText(newtext);
  }
  
    const handleclick=()=>{
        console.log("you clicked on handleclick" +text)
        let newtext=text.toUpperCase();
        setText(newtext)
        
    }
    const buttonclick=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const[text,setText]=useState("set text here")
     
  return (
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'grey'}}>{props.heading}</h1>
<div className="mb-3" style={{color:props.mode==='dark'?'white':'grey'}}>
  {/* { <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> } */}
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={buttonclick}  style={{backgroundColor:props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'grey'}}></textarea>
</div>
<button className="btn btn-primary" onClick={handleclick}>Convert UpperCase</button> 
<button className="btn btn-primary mx-3" onClick={handleclick1}>clear</button>    
   <h1>your text summary</h1> 
   <p>  no of word= {text.split(" ").length} no of character={text.length}</p> </div>
   
   
  )
}
