import React from 'react';
import './Nav.css';
import Navbar from './Components/ind';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Home from './pages';
import About from './Pages/about';
import StudSignUp from './Pages/ssignup';
import Contact from './Pages/contact';
import NewsEventsView from './Pages/ViewNewsEvents';
import TeachSignUp from './Pages/tsignup';
//import AdminSignUp from './Pages/asignup';
//import Admin from '../Admin/Adm';
//import AppLogin from '../Admin/AdmApp';
//import Login from '../Admin/Login';
//import AppLogin from '../Admin/AdmApp';
import AppLogin from './Pages/AppLogin';
import RegisterUser from '../LoginStudent/RegisterUser';
import LoginUser from '../LoginUser';
import RegisterTeacher from '../LoginTeacher/RegisterTeacher';
import ComplainView from '../Complain/ViewComplain';
import HomeApp from '../Home/Home';
//import Login from '../Admin/Login';

function NavApp() {
  return (
      <>
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path='/' exact component={Home} />  */}
        
        
        <Route path='/home' component={HomeApp} />
        <Route path='/newsevents' component={NewsEventsView} />
        <Route path='/complains' component={ComplainView} />
        <Route path='/signin' component={LoginUser} />
        <Route path='/studsignup' component={RegisterUser} />
        <Route path='/techsignup' component={RegisterTeacher} />
        {/* <Route path='/studsignup' component={StudSignUp} /> */}
        
        <Route path='/' component={AppLogin} />
        {/* <Route path='/' */}
      </Switch>
    </Router>
    </>
  );
}

export default NavApp;