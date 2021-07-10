import React from 'react';
import './Nav.css';
import Navbar from './Components/ind';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Home from './pages';
import About from './Pages/about';
import StudSignUp from './Pages/ssignup';
import Contact from './Pages/contact';

import TeachSignUp from './Pages/tsignup';
//import AdminSignUp from './Pages/asignup';
//import Admin from '../Admin/Adm';
//import AppLogin from '../Admin/AdmApp';
//import Login from '../Admin/Login';
//import AppLogin from '../Admin/AdmApp';
import AdminSignUp from './Pages/alogin';

function NavApp() {
  return (
      <>
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path='/' exact component={Home} />  */}
        <Route path='/about' component={About} />
        
        <Route path='/contact-us' component={Contact} />
        <Route path='/studsignup' component={StudSignUp} />
        <Route path='/teachsignup' component={TeachSignUp} />
        <Route path='/adminlogin' component={AdminSignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default NavApp