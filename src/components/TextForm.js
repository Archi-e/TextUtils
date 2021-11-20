import React,{useState} from "react";


export default function TextForm(props) {

  const handleUpClick =() =>{
      //console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Coverted to uppercase!","success");
  }
  const handleLowClick =() =>{
      //console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Coverted to lowercase!","success");
  }

  const handleExtraSpaces =() =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces!","success");
  }

  const handleClear= ()=>{
     setText("");
     props.showAlert("Text cleared!","success");
  }

  const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!","success");
  }

  const handleOnChange= (event) =>{
    setText(event.target.value);

  }

  
    
  const [text, setText] = useState('');
  //setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>  
      <div className="mb-3">
        <textarea
          className="form-control"
          value= {text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode ==='dark'?'#212529':'white',color: props.mode ==='dark'?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button type="button" className={`btn btn-${props.theme} mx-2`} onClick={handleUpClick}>Uppercase</button>
      <button type="button" className={`btn btn-${props.theme} mx-2`} onClick={handleLowClick}>Lowercase</button>
      <button type="button" className={`btn btn-${props.theme} mx-2`} onClick={handleClear}>Clear Text</button>
      <button type="button" className={`btn btn-${props.theme} mx-2`} onClick={handleCopy}>Copy Text</button>
      <button type="button" className={`btn btn-${props.theme} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    
    </div> 
    <div className="container my-5" style={{color: props.mode ==='dark'?'white':'black'}}>
          
        <h3>Your text summary</h3>
        <p>{text.length>0?text.split(" ").length:"0 words"} words and {text.length} characters</p>
        <p>{text.length>0?0.008 * text.split(" ").length:"0"} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>
    </>
  );
}
