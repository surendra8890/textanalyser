import  React,{ useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Textform from './component/Textform';

import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App(){
  const[alert,alertmode]=useState(null);
  const showalert=(message,type)=>{
    alertmode({
     mess:message,
     type:type 
    })
    setTimeout(()=>{
      alertmode(null)
    },3000)
  }
  const remove=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');

  }
 
 
  const[mode,upmode]=useState('light');
  const togglemode=(cla)=>{
    console.log(cla)
    remove();
    document.body.classList.add('bg-'+cla)
    
    if(mode=='dark'){
      upmode('light')
      document.body.style.backgroundColor='white';
       showalert("light mode has been activated","success")
      document.title="surendra"
    }
    else{
      upmode('dark')
      document.body.style.backgroundColor='grey';
     showalert("dark mode has been activated","success")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar surendra2="chaudhary"abouttext="Home" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
    
    <div className="container my-3"><Switch>
          <Route path="/about">
            <About  mode={mode}/>
          </Route>
          <Route path="/">
            <Textform mode={mode}/>
          </Route>
        </Switch>
         </div></BrowserRouter>
    
    </>
  );
}

export default App;
