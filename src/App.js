//import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import Navbar from "./Components/Navbar"
import TextForm from './Components/TextForm'
//import About from './Components/About';
import React, { useState } from 'react';


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  let toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode has been enabled","success");
    }
  }
  return (
    <>
     {/* <Navbar title="TextUtilss" About="About Us"/> */}
     {/* <Navbar/> */}
     <Navbar title="TextUtilss" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze Below" mode={mode}/>
    {/* <About/> */}

    </div>
    </>
  );
}

export default App;
