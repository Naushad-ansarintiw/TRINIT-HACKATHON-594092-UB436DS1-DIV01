import React, { useContext } from 'react'
import noteContext from './context/noteContext';

// import 'boostrap/dist/css/bootstrap.css';

//to make page unrefreshable on opening each liknk
import {NavLink} from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.css'


const Nav = () => {

    // Using Context api
    const context = useContext(noteContext);
    // const { products,getNotes } = context; // used to set the cart number dynamically

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="#">
      <img src="" alt="" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/contact" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Contact
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="#">Action</NavLink>
            <NavLink className="dropdown-item" to="#">Another action</NavLink>
            <div class="dropdown-divider"></div>
            <NavLink class="dropdown-item" to="#">Something else here</NavLink>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default Nav;