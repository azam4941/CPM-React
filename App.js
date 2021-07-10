/* //import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'


import {Home} from './Admin/Home'
import {Student} from './Admin/Student'
import {Teacher} from './Admin/Teacher'
import {Navigation} from './Admin/Navigation'


import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <Button variant="primary">Admin Panel</Button>

      <h3 className="m-3 d-flex justify-content-center">
       Admin wep api demo
      </h3>

      <h2 className="m-3 d-flex justify-content-center">
       Admin wep api withou demo
      </h2>



      <Navigation/>


      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/student' component={Student} exact />
        <Route path='/teacher' component={Teacher} exact />
        

      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App; */










/// this is for login and signup
/*   import React from 'react';  
//import logo from './logo.svg';  
import './App.css';  
import LoginUser from './LoginUser';  
import RegisterUser from './RegisterUser';
//import AppLogin from './components/AppLogin';  
import Dashboard from './Dashboard';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
function App() {  
  return (  
    <Router>
      <div>
        <h3>COLLEGE PORTAL MANAGEMENT</h3></div>    
      <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/LoginUser'} className="nav-link">Login</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/RegisterUser'} className="nav-link">Register</Link>    
              </li>    
                 
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/LoginUser' component={LoginUser} />    
          <Route path='/RegisterUser' component={RegisterUser} /> 
          
 
        </Switch>    
        <Switch>  
        <Route path='/Dashboard' component={Dashboard} />    
        </Switch>  
      </div>    
    </Router>   
  );  
}  
 
export default App; 
   */

// this is for addstudent 

/* //import logo from "./logo.svg";
import "./App.css";
import { Student } from "./Student";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <Student />;
}

export default App; */





/* import "./App.css";
//import Register from "./components/Registration";

import { Feedback } from "./Feedback/feedbackform";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <Feedback />;
}

export default App;  */



/* import React from 'react';
import Feedback from './Feedback/feedbackform';
import './App.css'
//import Appp from './Practise';
function App() {
  return <Feedback/>;
}

export default App; */



/* import React , {Component } from 'react';
import { Link,Switch,Route } from 'react-router-dom'
import Login from './components/Login'
import Admin from './components/Admin'
import Logout from './components/Logout'
class App extends Component {
  render() {
  return (
    <Switch>
    <Route exact path="/" component={Login} />
    <Route  path="/admin" component={Admin} />
    <Route  path="/logout" component={Logout} />
    </Switch>
  );
  }
}  */

/*  const A =()=>{
  return (
    <div>
    <h1>This is component A Page</h1>
    <Link to="/b">B component</Link>
    </div>
  )
}
const B =()=>{
  return (
    <div>
    <h1>This is component B Page</h1>
    <Link to="/">A component</Link>
    </div>
  )
}  
export default App;
*/


 //import logo from "./logo.svg";
 
 
 
 
 /* import "./App.css";
 import  AppLogin  from "./LoginAdmin/AppLogin";
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 function App() {
   return <AppLogin />;
 }
 
 export default App;  
 */



 //import  LoginTeacher  from "./LoginTeacher";
// import  RegisterTeacher  from "./LoginTeacher/RegisterTeacher";
 import  RegisterUser  from "./LoginStudent/RegisterUser";
 //import  LoginUser  from "./LoginUser";
 import 'bootstrap/dist/css/bootstrap.min.css';
import NewsEventsView from './CNavBar/Pages/ViewNewsEvents';
 
 function App() {
   return <RegisterUser />;
   //return <NewsEventsView/>;
 }
 
 export default App;  

/*  import  Navbar  from "./Navbar/NavbarElement";
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 function App() {
   return <Navbar />;
 }
 
 export default App; */



/*  import "./App.css";
import { Student } from "./ViewDetails/ViewStudentdetail";
//import { Teacher } from "./ViewDetails/ViewTeacherdetail";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <Student />;
}

export default App; */

//import { AddComplainModel } from "./Complain/AddComplaint";
//import  ComplainDetails  from "./Complain/StudentComplainPage"
/* import Complain from './Complain/complaint';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <Complain />;
}

export default App; */



