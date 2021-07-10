import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class AddLeaveModel extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let content = JSON.stringify({

            Rollno: event.target.Rollno.value,
            Name: event.target.Name.value,
            Edate: event.target.Edate.value,
            BranchName: event.target.BranchName.value,
            Message: event.target.Message.value,
            Nodays: event.target.Nodays.value
        });
        const config = { headers: { 'Content-Type': 'application/json' } };
        axios.post("http://localhost:58526/api/LeaveMsts", content, config)
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
                            Apply Leave
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Rollno">
                                        <Form.Label>RollNo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="RollnO"
                                            required
                                            //  defaultValue={this.props.RollNo}
                                            placeholder="Roll Number"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Name"
                                            required
                                            // defaultValue={this.props.Name}
                                            placeholder="Student Name"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Edate">
                                        <Form.Label>Enrollment Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="Edate"
                                            required
                                            //defaultValue={this.props.EnrollmentDate}
                                            placeholder="Date of enrollment"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="BranchName">
                                        <Form.Label>Branch Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="BranchName"
                                            required
                                            //defaultValue={this.props.BranchName}
                                            placeholder="Branch Name"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Message">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Message"
                                            required
                                            //defaultValue={this.props.BranchName}
                                            placeholder="Message"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Nodays">
                                        <Form.Label>No of Days</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="Nodays"
                                            required
                                            //defaultValue={this.props.EnrollmentDate}
                                            placeholder="No of Days"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Apply Leave
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
export default AddLeaveModel;