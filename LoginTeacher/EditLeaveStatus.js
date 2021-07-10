import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Table, ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StudentDetails from '../LoginStudent/StudentLandingPage';
import ViewStudentLeaves from './StudentLeaveList'

class EditLeaveStatusOfStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: this.props.filtered.ID,
            RollNo: this.props.filtered.RollNo,
            Name: this.props.filtered.Name,
            BranchName: this.props.filtered.BranchName,
            TeacherName: this.props.filtered.TeacherName,
            Reply: "",
            Message: this.props.filtered.Message,
            Date: this.props.filtered.Date,
            NumberOfDays: this.props.filtered.NumberOfDays,
            RegNo: this.props.RegNo,
            goto: "editreply"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        let content = JSON.stringify({
            ID: event.target.ID.value,
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
        axios.put("http://localhost:58526/api/LeaveMsts/" + event.target.ID.value, content, config)
            .then(responce => {
                console.log(responce)
            })
            .then(msg => {
                alert("Leave Status Updated");
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {


        var { ID, RollNo, Name, BranchName, Reply, Date, TeacherName, NumberOfDays, Message, goto, RegNo } = this.state;

        return (
            <div>

                {goto === "editreply" && (<div>
                    <div style={{ textAlign: "center" }}><h1>Apply for Leave</h1></div>

                    <Table>
                        <tbody>

                            <tr>
                                <td>
                                    <div style={{ width: "50%", marginLeft: "25%" }}>

                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="ID">
                                                <Form.Label>ID</Form.Label>
                                                <Form.Control type="number" name="ID" Value={ID} disabled />
                                            </Form.Group>
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
                                                <Form.Control type="text" value={TeacherName} name="TeacherName" disabled />
                                            </Form.Group>
                                            <Form.Group controlId="Message">
                                                <Form.Label>Reason</Form.Label>
                                                <Form.Control as="textarea" rows={3} value={Message} name="Message" disabled />
                                            </Form.Group>
                                            <Form.Group controlId="NumberOfDays">
                                                <Form.Label>Number of Days</Form.Label>
                                                <Form.Control type="number" value={NumberOfDays} name="NumberOfDays" disabled />
                                            </Form.Group>
                                            <Form.Group controlId="Reply">
                                                <Form.Label>Status</Form.Label>
                                                <Form.Control type="text" defaultValue={Reply} name="Reply" />
                                            </Form.Group>
                                            <Form.Group controlId="Date">
                                                <Form.Label>Date Applied</Form.Label>
                                                <Form.Control type="date" name="Date" value={Date} disabled />
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
                                                onClick={() => this.setState({ goto: goto = "leavelist" })}
                                            >
                                                LeavesList
                                            </Button>

                                        </ButtonToolbar>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </Table>

                </div>)}
                {goto === "leavelist" && <ViewStudentLeaves Name={TeacherName} RegNo={RegNo} />}

            </div>
        );
    }
}

export default EditLeaveStatusOfStudent;