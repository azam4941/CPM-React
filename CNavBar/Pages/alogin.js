import React from 'react';
//import App from '../../StudentLogin/App';
//import AppLogin from '../../Admin/AdmApp';
//import './App.css';  
import AppLogin from '../../LoginAdmin/AppLogin';
//import Reg from '../../StudentLogin/Reg'; 
//import DashApp from '../../Admin/Dashboard/DashApp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
//import Logout from '../../Admin/Logout';

const AdminLogin = () => {
  return (
   
      
      <Router>
      <div>
        <h3>COLLEGE PORTAL MANAGEMENT</h3></div>    
      <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/Applogin'} className="nav-link">Login</Link>    
              </li>    
            
                
            </ul>    
          </div>  
         
        </nav> <br />    
        <Switch>    
          <Route  path='/Applogin' component={AppLogin} />    
          
 
        </Switch>    
        {/* <Switch>  
        <Route path='/admin' component={DashApp} />    
        </Switch>  */}
        {/*
        <Switch>
          <Route path='/logout' component={Logout}></Route>
        </Switch> */}
        
           
      </div>    
    </Router>   
    
    
  );
};

export default AdminLogin;