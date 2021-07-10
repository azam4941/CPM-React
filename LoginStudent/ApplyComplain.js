/* import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Table, ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StudentDetails from './StudentLandingPage';

class ApplyComplains extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RollNo: this.props.refined.RollNo,
            Name: this.props.refined.Name,
            MobileNumber: this.props.refined.MobileNumber,
            //status: "Pending for Approval",
            goto: "complain"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        let content = JSON.stringify({

            RollNo: event.target.RollNo.value,
            Name: event.target.Name.value,
            Complaint: event.target.Complaint.value,
            //Date: event.target.Date.value,
            MobileNumber: event.target.MobileNumber.value
        });
        const config = { headers: { 'Content-Type': 'application/json' } };
        axios.post("http://localhost:58526/api/ComplainMsts", content, config)
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


        var { RollNo, Name, MobileNumber, Complaint, goto } = this.state;

        return (
            <div>

                {goto === "complain" && (<div>
                    <div style={{ textAlign: "center" }}><h1>Apply for Complain</h1></div>

                    <Table>
                        <tbody>

                            <tr>
                                <td>
                                    <div style={{ width: "50%", marginLeft: "25%" }}>

                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="RollNo">
                                                <Form.Label>Roll No</Form.Label>
                                                <Form.Control type="text" name="RollNo" Value={RollNo} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="Name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" name="Name" Value={Name} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="BranchName">
                                                <Form.Label>MobileNumber</Form.Label>
                                                <Form.Control type="text" name="MobileNumber" Value={MobileNumber} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="Complaint">
                                                <Form.Label>Complaint</Form.Label>
                                                <Form.Control type="text" name="Complaint" />
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
export default ApplyComplains; 
*/



import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Table, ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StudentDetails from './StudentLandingPage';

class ApplyComplains extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RollNo: this.props.refined.RollNo,
            Name: this.props.refined.Name,
            MobileNumber: this.props.refined.MobileNumber,
            //status: "Pending for Approval",
            goto: "complain"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        let content = JSON.stringify({

            RollNo: event.target.RollNo.value,
            Name: event.target.Name.value,
            Complaint: event.target.Complaint.value,
            //Date: event.target.Date.value,
            MobileNumber: event.target.MobileNumber.value
        });
        const config = { headers: { 'Content-Type': 'application/json' } };
        axios.post("http://localhost:58526/api/ComplaintMsts", content, config)
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


        var { RollNo, Name, MobileNumber, Complaint, goto } = this.state;

        return (
            <div>

                {goto === "complain" && (<div>
                    <div style={{ textAlign: "center" }}><h1>Apply for Complain</h1></div>

                    <Table>
                        <tbody>

                            <tr>
                                <td>
                                    <div style={{ width: "50%", marginLeft: "25%" }}>

                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="RollNo">
                                                <Form.Label>Roll No</Form.Label>
                                                <Form.Control type="text" name="RollNo" Value={RollNo} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="Name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" name="Name" Value={Name} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="BranchName">
                                                <Form.Label>MobileNumber</Form.Label>
                                                <Form.Control type="text" name="MobileNumber" Value={MobileNumber} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="Complaint">
                                                <Form.Label>Complaint</Form.Label>
                                                <Form.Control type="text" name="Complaint" />
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
export default ApplyComplains;