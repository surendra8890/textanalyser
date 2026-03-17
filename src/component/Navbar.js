import React from 'react'
import PropTypes from "prop-types"
 import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(Props) {
  return (
    
<nav className={`navbar navbar-expand-lg bg-${Props.mode} navbar-${Props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" > Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{Props.aboutText}</Link>
        </li>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{Props.togglemode('primary')}}style={{height:'40px',width:'40px'}}
            ></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{Props.togglemode('danger')}}style={{height:'40px',width:'40px'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{Props.togglemode('success')}}style={{height:'40px',width:'40px'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{Props.togglemode('warning')}}style={{height:'40px',width:'40px'}}></div>
        </div>
        
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">{Props.surendra2}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>

  <div className={`form-check form-switch text-${Props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={()=>Props.togglemode(null)} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault mx-3" >Mode switch</label>
</div>
</nav>

   
  )
}
Navbar.Props={
surendra: PropTypes.string
}
Navbar.defaultProps={
    surendra:'set title here'
}
