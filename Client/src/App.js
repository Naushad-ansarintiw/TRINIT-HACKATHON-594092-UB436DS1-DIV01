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
import Login from './components/Loginplentro';
import Loginngo from './components/Loginngo'
import Signup1 from './components/Signup1';
import Signup2 from './components/Signup2';
import Dashboard from './components/Dashboard';
import Messenger from './components/messanger/Messenger';

//making router files
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NgoDetails from './components/Ngodetails';
import Details from './components/Details';
import StripeContainer from './components/StripeContainer';

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

      <Route path="/details/:id">
        <Details />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login/plentropist">
        <Login />
      </Route>

      <Route path="/login/ngo">
        <Loginngo />
      </Route>

      <Route path="/register1">
        <Signup1 />
      </Route>

      <Route path="/deshboard/:id">
        <Dashboard />
      </Route>

      

      <Route path="/register2">
        <Signup2 />
      </Route>

      <Route path="/messenger/:id">
        <Messenger />
      </Route>

      <Route path="/payment">
        <StripeContainer />
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
