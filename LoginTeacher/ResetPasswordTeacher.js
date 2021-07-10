import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';

class ResetYourPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RegNo: this.props.RegNo,
            //Email: this.props.refine.Email,
            users: [],
            refined: [],
            gotoPage: "studentLandingPage"
        }
    }
    refreshList() {
        fetch("http://localhost:58526/api/Registers")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ users: data });
            });
    }
    componentDidMount() {
        this.refreshList();
    }
    handleSubmit = event => {
        event.preventDefault();
        if ((event.target.PasswordReset.value === event.target.PasswordReset2.value)) {
            let content = JSON.stringify({
                ID: event.target.ID.value,
                RegNo: event.target.RegNo.value,
                Email: event.target.Email.value,
                Password: event.target.PasswordReset.value,
                UserType: "T"
            })
            const config = { headers: { 'Content-Type': 'application/json' } };
            axios.put("http://localhost:58526/api/Registers/" + event.target.ID.value, content, config)
                .then(responce => {
                    console.log(responce)
                })
                .then(msg => {
                    alert("Password Updated");
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            alert("Retype Password Correctly");
        }
    }

    render() {
        const { RegNo, Email, users, refined, gotoPage } = this.state;
        users.forEach(element => {
            if (element.RegNo === RegNo) {

                refined.push(element);
            }
        });
        return (
            <div style={{ width: "40%", marginLeft: "10%", marginTop: "5%" }}>
                <h1>Reset Your Password !</h1>
                {refined.map((refine) => (
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="ID">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="number" placeholder="ID" name="ID" value={refine.ID} disabled />
                        </Form.Group>
                        <Form.Group controlId="RegNo">
                            <Form.Label>User RegNo</Form.Label>
                            <Form.Control type="text" placeholder="RegNo" name="RegNo" value={refine.RegNo} disabled />
                        </Form.Group>
                        <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="Email" value={refine.email} disabled />
                        </Form.Group>
                        <Form.Group controlId="Password">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control type="password" name="Password" placeholder="Enter Old Password" />
                        </Form.Group>
                        <Form.Group controlId="PasswordReset">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" name="PasswordReset" placeholder="Enter New Password" />
                        </Form.Group>
                        <Form.Group controlId="PasswordReset2">
                            <Form.Label>Re-Enter New Password</Form.Label>
                            <Form.Control type="password" name="PasswordReset2" placeholder="ReType New Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>
                ))}
            </div>
        );
    }
}

export default ResetYourPassword;