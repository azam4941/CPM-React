import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';

class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RegNo: "",
            email: "",
            Password: "",
            UserType: "S"
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });


    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        const config = { headers: { 'Content-Type': 'application/json' } };
        axios.post('http://localhost:58526/api/Registers', this.state)
            .then(responce => {
                console.log(responce)
            })
            .then(msg => {
                alert("Register Successfully");
            })
            .catch(error => {
                console.log(error)
            })
            
    }

    render() {
        const { RegNo, email, Password } = this.state
        return (
            <div style={{ width: "40%", marginLeft: "30%", marginTop: "10%" }}>
                <h2>Register Yourself!!</h2>
                <Form>
                    <Form.Group controlId="UserRegId">
                        <Form.Label>User RegNo</Form.Label>
                        <Form.Control type="text" placeholder="RegNo" value={RegNo} name="RegNo" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="Password" placeholder="Password" value={Password} onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default RegisterUser;