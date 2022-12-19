import React from 'react'

export default function Darkmode(props) {
  return (
    
     <div className="container">
    <form>
      <h1 >"Dark Mode Cheaker"</h1>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"style={{background:props.mode==='light'?'white':'black',color:props.mode==='dark'?'white' : 'black'}}></textarea>
    </form>
    <h1 style={{color:props.mode==='dark'?'black':'grey'}}>Hey! i am a div</h1>
    </div>
    
  )
}
