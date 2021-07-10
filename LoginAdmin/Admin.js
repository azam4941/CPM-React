/* import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Admin extends Component {
     constructor(props){
        super(props)
        const token =localStorage.getItem("token")

        let loggedIn =true
        if(token == null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    } 
    render() {
        if(this.state.loggedIn===false){
            return <Redirect to="/" />
        } 
        return (
            <div>
               <h1>This is an Admin page.</h1>
               <Link to="/logout">Logout</Link> 
            </div>
        )
    }
}
 */

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../Dashboard/dash.css';
import Navbar from '../Dashboard/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Dashboard/Home';
import Students from '../Dashboard/Stud';
import Student from '../AdminResigtration/Studentfl/Student';
import Teacher from '../AdminResigtration/Teacherfl/Teacher';
//import Teachers from '../Dashboard/Teacher';
import News from '../Dashboard/News';
//import TimeTable  from '../Dashboard/TimeTable';
import Logout from './Logout';
import { StudentView } from '../ViewDetails/ViewStudentdetail';
import { TeacherView } from '../ViewDetails/ViewTeacherdetail';
import {NewsEvents} from '../NEvents/NewsEvents';
import ComplainView from '../Complain/ViewComplain';

export default class Admin extends Component {
     constructor(props){
        super(props)
        const token =localStorage.getItem("token")

        let loggedIn =true
        if(token == null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    } 
    render() {
        if(this.state.loggedIn===false){
            return <Redirect to="/" />
        } 
        return (
            <div>
               <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />

        <Route path='/stud' exact component={Student} />

        <Route path='/teach' exact component={Teacher} />

        <Route path='/newsevents' exact component={NewsEvents} />

        <Route path='/studview' exact component={StudentView} />

        <Route path='/teacview' exact component={TeacherView} />

        <Route path='/complains' exact component={ComplainView} />

        <Route  path="/logout" component={Logout} /> 
         
        
        </Switch>
    </Router>
    </>
    
    <Link style={{ width: "40%", marginLeft: "50%", marginTop: "10%" }} to="/logout">Logout</Link>
    </div>
          
        );
    }
}
 