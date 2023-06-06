import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=>{
      console.log('Uppercase was clicked' + text);
      let newText = text.toUpperCase();
      setText(newText);
  }
  const handleLowClick = ()=>{
      console.log('Lowercase was clicked' + text);
      let newText = text.toLowerCase();
      setText(newText);
  }
  const handleClrClick = ()=>{
      console.log('clear was clicked' + text);
      let newText = " "
      setText(newText);
  }
  const handleCopyClick = ()=>{
      console.log('Copy was clicked');
      let newtext =  document.getElementById('txtarea')
      newtext.select();
      navigator.clipboard.writeText(newtext.value);
      
  }
  const handleEsClick = ()=>{
      console.log('Es was clicked');
      let newtext =  text.split(/[ ]+/);
      setText(newtext.join(" "))
      
  }

  const handleOnChange = (event)=>{
      console.log('On changed');
      setText(event.target.value);
  }



  const [text,setText]= useState('Enter Text Here');
  return (
      <>
    <div className="txtcontainer">
        <h1 className='h-one'>{props.heading}</h1>
        <div className="txtarea" >
            <textarea name="txtarea" id="txtarea"  value={text} onChange={handleOnChange}  cols="120" rows="25"></textarea>
        </div>
    </div>
    <div className='btns'>
        <button className='btn-primary '  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn-primary ' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn-primary ' onClick={handleClrClick}>Clear Text</button>
        <button className='btn-primary ' onClick={handleCopyClick}>Copy Text</button>
        <button className='btn-primary ' onClick={handleEsClick}>Remove ExtraSpaces</button>
    </div>
     
    </>
  )
}
