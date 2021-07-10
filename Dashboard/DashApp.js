import './dash.css';
import Navbar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Students from './Stud';
import Teachers from './Teacher';
import News from './News';
import TimeTable  from './TimeTable';
import Logout from '../Admin/Logout';
import ViewStudentdetail from '../ViewDetails/ViewStudentdetail';
import ViewTeacherdetail from '../ViewDetails/ViewTeacherdetail';


function DashApp() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />

        <Route path='/stud' exact component={Students} />

        <Route path='/teach' exact component={Teachers} />

        <Route path='/news' exact component={News} />

        <Route path='/studview' exact component={ViewStudentdetail} />

        <Route path='/teacview' exact component={ViewTeacherdetail} />

        <Route  path="/logout" component={Logout} />

        {/* <Route path='/teacher/addteacher' exact component={Addteacher} />
        <Route path='/teacher/editteacher' exact component={Editteacher} />
        <Route path='/teacher/deleteteacher' exact component={Deleteteacher} /> */}

        
        {/* <Route path='/student/addstudent' exact component={Addstudents} />
        <Route path='/student/editstudent' exact component={Editstudents} />
        <Route path='/student/deletestudent' exact component={Deletestudents} /> */}

        
        {/* <Route path='/news/addnews' exact component={AddNews} />
        <Route path='/news/deletenews' exact component={DeleteNews} /> */}

        
        {/* <Route path='/timetable/addtimetable' exact component={AddTimetable} />
        <Route path='/timetable/deletetimetable' exact component={DeleteTimetable} /> */}

        
      </Switch>
    </Router>
    </>
  );
}

export default DashApp;