import { Table, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Leave from '../Leave';
import React, { Component } from "react";
import ViewStudentLeaves from "./StudentLeaveList";
import ResetYourPassword from "./ResetPasswordTeacher";
import ViewFeedback from "./TeacherFeedbackView";
import LoginUser from "../LoginUser";
import Logout from "./Logout";


class TeacherDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RegNo: this.props.RegNo,
            teachers: [],
            refined: [],
            gotoPage: "teacherLandingPage"
        }

    }

    refreshList() {
        fetch("http://localhost:58526/api/TeacherMsts")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ teachers: data });
            });

    }
    componentDidMount() {
        this.refreshList();

    }
    handleLeavelist = () => {
        this.setState({ gotoPage: this.state.gotoPage = "leavelist" });
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
        const { RegNo, teachers, refined, gotoPage } = this.state;
        teachers.forEach(element => {
            if (element.RegNo === RegNo) {

                refined.push(element);
            }
        });

        return (
            <div>
                {gotoPage === "teacherLandingPage" &&
                    (<div>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handleLeavelist} variant="primary" size="lg">View Leaves</Button>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handleFeedback} variant="primary" size="lg">View your FeedBack</Button>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handleReset} variant="primary" size="lg">Reset Password</Button>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handlelg} variant="primary" size="lg">Logout </Button>
                        <div style={{ marginLeft: "5%", marginRight: "10%", width: "60%" }}>
                            <Table className="mt-4" striped variant="dark" bordered hover >
                                {refined.map((refine) => (
                                    <tbody>
                                        <h2 style={{ paddingLeft: "10px" }}>Hello, {refine.Name}</h2>
                                        <tr>
                                            <th>RegNo</th>
                                            <td>{refine.RegNo}</td>
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
                                            <td>{refine.Mobile}</td>
                                        </tr>
                                        <tr>
                                            <th>Qualification</th>
                                            <td>{refine.Qualification}</td>
                                        </tr>
                                        <tr>
                                            <th>Gender</th>
                                            <td>{refine.Gender}</td>
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

                {gotoPage === "leavelist" && <ViewStudentLeaves Name={refined[0].Name} RegNo={refined[0].RegNo} />}
                {gotoPage === "feedback" && <ViewFeedback Name={refined[0].Name} RegNo={refined[0].RegNo} />}
                {gotoPage === "reset" && <ResetYourPassword Name={refined[0].Name} RegNo={refined[0].RegNo} />}
                {gotoPage === "lg" && <Logout />}
                
            </div>);


    }
}

export default TeacherDetails;