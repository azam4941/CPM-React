import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class AddComplainModel extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let content = JSON.stringify({

            RollNo: event.target.RollNo.value,
            Name: event.target.Name.value,
            MobileNumber: event.target.MobileNumber.value,
            Complaint: event.target.Complaint.value
        });
        const config = { headers: { 'Content-Type': 'application/json' } };
        axios.post("http://localhost:58526/api/ComplainMsts", content, config)
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
                            Apply Complain
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="RollNo">
                                        <Form.Label>RollNo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="RollNo"
                                            required
                                            //Value={RollNo} disabled
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
                                    <Form.Group controlId="MobileNumber">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control
                                            type="mobile"
                                            name="MobileNumber"
                                            required
                                            //defaultValue={this.props.EnrollmentDate}
                                            placeholder="Mobile Number"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Complaint">
                                        <Form.Label>Complain</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Complain"
                                            required
                                            //defaultValue={this.props.BranchName}
                                            placeholder="Complain"
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
export default AddComplainModel;