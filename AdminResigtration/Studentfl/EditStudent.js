import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class EditStudentModel extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     fetch("http://localhost:50338/api/Students/" + event.target.ID.value, {
    //         method: 'PUT',
    //         header: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    // ID: event.target.ID.value,
    // RollNo: event.target.RollNo.value,
    // Name: event.target.Name.value,
    // Email: event.target.Email.value,
    // MobileNumber: event.target.MobileNumber.value,
    // DateOfBirth: event.target.DateOfBirth.value,
    // Address: event.target.Address.value,
    // City: event.target.City.value,
    // Pincode: event.target.Pincode.value,
    // EnrollmentDate: event.target.EnrollmentDate.value,
    // BranchName: event.target.BranchName.value
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then(responce => {
    //             console.log(responce)
    //         })

    // }
    handleSubmit(event) {
        event.preventDefault();
        let content = JSON.stringify({
            ID: event.target.ID.value,
            RollNo: event.target.RollNo.value,
            Name: event.target.Name.value,
            Email: event.target.Email.value,
            MobileNumber: event.target.MobileNumber.value,
            DateOfBirth: event.target.DateOfBirth.value,
            Address: event.target.Address.value,
            City: event.target.City.value,
            Pincode: event.target.Pincode.value,
            EnrollmentDate: event.target.EnrollmentDate.value,
            BranchName: event.target.BranchName.value
        });
        const config = { headers: { 'Content-Type': 'application/json' } };
        axios.put("http://localhost:58526/api/StudentMsts/" + event.target.ID.value, content, config)
            .then(responce => {
                console.log(responce)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Student
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="ID">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control type="number" name="ID" required disabled defaultValue={this.props.ID}
                                            placeholder="ID" />
                                    </Form.Group>
                                    <Form.Group controlId="RollNo">
                                        <Form.Label>RollNo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="RollNO"
                                            required
                                            defaultValue={this.props.RollNo}
                                            placeholder="Roll Number"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Name"
                                            required
                                            defaultValue={this.props.Name}
                                            placeholder="Student Name"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="Email"
                                            required
                                            defaultValue={this.props.Email}
                                            placeholder="Email"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="MobileNumber">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="MobileNumber"
                                            required
                                            defaultValue={this.props.MobileNumber}
                                            placeholder="Mobile Number"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="DateOfBirth">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="DateOfBirth"
                                            required
                                            defaultValue={this.props.DateOfBirth}
                                            placeholder="Date Of Birth"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Address"
                                            required
                                            defaultValue={this.props.Address}
                                            placeholder="Address"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="City">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="City"
                                            required
                                            defaultValue={this.props.City}
                                            placeholder="City"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Pincode">
                                        <Form.Label>Pincode</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Pincode"
                                            required
                                            defaultValue={this.props.Pincode}
                                            placeholder="Pincode"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="EnrollmentDate">
                                        <Form.Label>Enrollment Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="EnrollmentDate"
                                            required
                                            defaultValue={this.props.EnrollmentDate}
                                            placeholder="Date of enrollment"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="BranchName">
                                        <Form.Label>Branch Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="BranchName"
                                            required
                                            defaultValue={this.props.BranchName}
                                            placeholder="Branch Name"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Student
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}