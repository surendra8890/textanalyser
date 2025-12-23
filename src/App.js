import  React,{ useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Textform from './component/Textform';

function App(){
  
  function App(){
  const[alert,alertmode]=useState(null);
  const showalert=(message,type)=>{
    alertmode({
     mess:message,
     type:type 
    })
    setTimeout(()=>{
      alertmode(null)
    },3000)}
  }

  const[mode,upmode]=useState('light');
  const togglemode=()=>{
    if(mode=='dark'){
      upmode('light')
      document.body.style.backgroundColor='white';
      // showalert("light mode has been activated","success")
      document.title="saurendra"
    }
    else{
      upmode('dark')
      document.body.style.backgroundColor='grey';
     // showalert("dark mode has been activated","success")
    }
  }
  return (
    <>
    
    <Navbar surendra2="chaudhary"abouttext="Home" mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
      
          <Textform mode={mode}/>
         </div>
    
    </>
  );
}

export default App;
