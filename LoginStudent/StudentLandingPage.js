import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplyLeaves from './ApplyLeaves';
import ViewLeaves from './LeaveList';
import ApplyComplains from './ApplyComplain';
import Feedback from './StudentFeedback';
import ResetYourPassword from './ResetPassword';
import Logout from './Logout';

class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RollNo: this.props.RegNo,
            students: [],
            refined: [],
            gotoPage: "studentLandingPage"
        }

    }

    refreshList() {
        fetch("http://localhost:58526/api/StudentMsts")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ students: data });
            });

    }
    componentDidMount() {
        this.refreshList();

    }
    handleLeave = () => {
        this.setState({ gotoPage: this.state.gotoPage = "leave" });
    }
    handleLeaveList = () => {
        this.setState({ gotoPage: this.state.gotoPage = "leavelist" });
    }
    handleComplain = () => {
        this.setState({ gotoPage: this.state.gotoPage = "complain" });
    }
    handleFeedback = () => {
        this.setState({ gotoPage: this.state.gotoPage = "feedback" });
    }
    handleReset = () => {
        this.setState({ gotoPage: this.state.gotoPage = "reset" });
    }
    handlelg = () => {
        this.setState({ gotoPage: this.state.gotoPage = "lg" });
    }
    render() {
        //console.log(this.props)
        console.log(this.state)
        const { RollNo, students, refined, gotoPage } = this.state;
        students.forEach(element => {
            if (element.RollNo === RollNo) {

                refined.push(element);
            }
        });

        return (
            <div>
                {gotoPage === "studentLandingPage" &&
                    (<div>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handleLeave} variant="primary" size="lg">Apply  for Leave</Button>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handleLeaveList} variant="primary" size="lg">View your Leaves</Button>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handleComplain} variant="primary" size="lg">Complain</Button>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handleFeedback} variant="primary" size="lg">FeedBack</Button>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handleReset} variant="primary" size="lg">ResetPassword</Button>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handlelg} variant="primary" size="lg">Logout </Button>
                        <div style={{ marginLeft: "5%", marginRight: "10%", width: "60%" }}>
                            <Table className="mt-4" striped variant="dark" bordered hover >
                                {refined.map((refine) => (
                                    <tbody>
                                        <h2 style={{ paddingLeft: "10px" }}>Hello, {refine.Name}</h2>
                                        <tr>
                                            <th>RollNo</th>
                                            <td>{refine.RollNo}</td>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>{refine.Name}</td>
                                        </tr>
                                        <tr>
                                            <th>Branch Name</th>
                                            <td>{refine.BranchName}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{refine.Email}</td>
                                        </tr>
                                        <tr>
                                            <th>Mobile Number</th>
                                            <td>{refine.MobileNumber}</td>
                                        </tr>
                                        <tr>
                                            <th>Date Of Birth</th>
                                            <td>{refine.DateOfBirth}</td>
                                        </tr>
                                        <tr>
                                            <th>Enrollment Date</th>
                                            <td>{refine.EnrollmentDate}</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>{refine.Address}</td>
                                        </tr >
                                        <tr>
                                            <th>City</th>
                                            <td>{refine.City}</td>
                                        </tr >
                                        <tr>
                                            <th>Pincode</th>
                                            <td>{refine.Pincode}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </Table>
                        </div>
                    </div>)
                }

                {gotoPage === "leave" && <ApplyLeaves RollNo={RollNo} refined={refined[0]} />}
                {gotoPage === "leavelist" && <ViewLeaves refined={refined[0]} />}
                {gotoPage === "complain" && <ApplyComplains RollNo={RollNo} refined={refined[0]} />}
                {gotoPage === "feedback" && <Feedback RollNo={RollNo}  Email={refined[0].Email} MobileNumber={refined[0].MobileNumber} />}
                {gotoPage === "reset" && <ResetYourPassword RollNo={RollNo} refined={refined[0]} />}
                {gotoPage === "lg" && <Logout />}
                
            </div>);


    }
}

export default StudentDetails;