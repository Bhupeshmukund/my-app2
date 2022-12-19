
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';

import Navbar from './components/Navbar.js';
//import Darkmode from './components/Darkmode';
 import TextForm from './components/TextForm';
// import { BrowserRouter, Route, Routes} from "react-router-dom";


   
function App() {
  const[mode,Setmode]=useState('light');
  const[text,setText]=useState('Enable Dark Mode');

  const[alert,setalert]=useState(null);

  const showAlert = (message,type)=>{
    setalert({
          msg:message,
          type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);

  }
  const toggleMode= () =>{
    if(mode ==='light')
    {
      Setmode('dark')
      setText('Enable Light Mode')
      document.body.style.backgroundColor='#042740';
      document.body.style.color='white';
      showAlert("Dark Mode has been Enabled", "success");
      document.title="TextUtils - DarkMode";
      // setInterval(() => {
      //   document.title =" TextUtil is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title =" Dowload Now";
      // }, 1500);
    
    }
    else
    {
      Setmode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  }
  
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert}/>
      <TextForm heading ="Enter the text to Analys Below" mode={mode} showAlert={showAlert}/> 
      {/* <div className="container">
       <Routes>
          <Route path="/about"element={<About />}/>
          <Route path="/darkmode" element={<Darkmode mode={mode}/>} />
          <Route path="/" element={<TextForm heading ="Enter the text to Analys Below" mode={mode} showAlert={showAlert}/> }/>
        </Routes>
      </div>
   </BrowserRouter> */}
    </>
  );
}

export default App;
