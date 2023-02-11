// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import './App.css'


//importing files all our files here
import Nav from './components/Nav';
import Home from './components/Home';
import Image from './components/Image';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup1 from './components/Signup1';
import Signup2 from './components/Signup2';

//making router files
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NgoDetails from './components/Ngodetails';

function App() {
  return (
    <>
      <Nav/>
      
      <Route path="/home" >
      <Home />
      </Route>


      <Route path="/about">
        <About />
      </Route>
      
      <Route path="/img">
        <Image />
      </Route>

      <Route path="/ngoDetails/:id">
        <NgoDetails />
      </Route>


      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register1">
        <Signup1 />
      </Route>

      <Route path="/register2">
        <Signup2 />
      </Route>

  
      {/* <Nav />

      <Route>
        <Home path="/" />
      </Route>

      <Route path="/about">
        <About />
      </Route>


      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route> */}
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
    </>
  );
}

export default App;
