import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Table, ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StudentDetails from './StudentLandingPage';

class ApplyLeaves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RollNo: this.props.refined.RollNo,
            Name: this.props.refined.Name,
            BranchName: this.props.refined.BranchName,
            status: "Pending for Approval",
            goto: "leave"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        let content = JSON.stringify({

            RollNo: event.target.RollNo.value,
            Name: event.target.Name.value,
            Message: event.target.Message.value,
            NumberOfDays: event.target.NumberOfDays.value,
            TeacherName: event.target.TeacherName.value,
            Reply: event.target.Reply.value,
            Date: event.target.Date.value,
            BranchName: event.target.BranchName.value
        });
        const config = { headers: { 'Content-Type': 'application/json' } };
        axios.post("http://localhost:58526/api/LeaveMsts", content, config)
            .then(responce => {
                console.log(responce)
            })
            .then(msg => {
                alert("Your Responce Was Recorded");
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {


        var { RollNo, Name, BranchName, status, goto } = this.state;

        return (
            <div>

                {goto === "leave" && (<div>
                    <div style={{ textAlign: "center" }}><h1>Apply for Leave</h1></div>

                    <Table>
                        <tbody>

                            <tr>
                                <td>
                                    <div style={{ width: "50%", marginLeft: "25%" }}>

                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="RollNo">
                                                <Form.Label>Reg no</Form.Label>
                                                <Form.Control type="text" name="RollNo" Value={RollNo} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="Name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" name="Name" Value={Name} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="BranchName">
                                                <Form.Label>Branch Name</Form.Label>
                                                <Form.Control type="text" name="BranchName" Value={BranchName} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="TeacherName">
                                                <Form.Label>Teacher Name</Form.Label>
                                                <Form.Control type="text" name="TeacherName" />
                                            </Form.Group>
                                            <Form.Group controlId="Message">
                                                <Form.Label>Reason</Form.Label>
                                                <Form.Control as="textarea" rows={3} name="Message" />
                                            </Form.Group>
                                            <Form.Group controlId="NumberOfDays">
                                                <Form.Label>Number of Days</Form.Label>
                                                <Form.Control type="number" name="NumberOfDays" />
                                            </Form.Group>
                                            <Form.Group controlId="Reply">
                                                <Form.Label>Status</Form.Label>
                                                <Form.Control type="text" value={status} name="Reply" disabled />
                                            </Form.Group>
                                            <Form.Group controlId="Date">
                                                <Form.Label>Date Applied</Form.Label>
                                                <Form.Control type="date" name="Date" />
                                            </Form.Group>
                                            <Form.Group>
                                                <Button variant="primary" type="submit" >
                                                    Submit
                                                </Button>
                                            </Form.Group>
                                        </Form>
                                        <ButtonToolbar>
                                            <Button
                                                variant="primary"
                                                onClick={() => this.setState({ goto: goto = "studentlandingpage" })}
                                            >
                                                StudentHome
                                            </Button>

                                        </ButtonToolbar>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </Table>

                </div>)}
                {goto === "studentlandingpage" && <StudentDetails RegNo={RollNo} />}

            </div>
        );
    }
}

export default ApplyLeaves;