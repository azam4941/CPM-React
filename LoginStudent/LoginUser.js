import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';
import StudentDetails from './StudentLandingPage';

class LoginUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RegNo: "",

            Password: "",
            users: [],
            userLogged: "NoUserLogged"
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

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });


    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        // axios.get('http://localhost:50338/api/Users')
        //     .then(res => {
        //         this.setState({ users: res.data });
        //     });
        var { RegNo, email, Password, userLogged } = this.state;
        this.state.users.forEach(element => {
            if (element.RegNo === RegNo && element.Password === Password && element.UserType === "S") {
                this.setState({ userLogged: userLogged = "student" })
            }
        });


    }

    render() {
        var { RegNo, email, Password, userLogged } = this.state
        if (userLogged === "NoUserLogged") {
            return (

                <div style={{ width: "40%", marginLeft: "10%", marginTop: "10%" }}>
                    <h1>Signin Yourself!!</h1>
                    <Form>
                        <Form.Group controlId="UserRegId">
                            <Form.Label>User RegNo</Form.Label>
                            <Form.Control type="text" placeholder="RegNo" value={RegNo} name="RegNo" onChange={this.handleChange} />
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={this.handleChange} />
                       <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                       </Form.Text>
                   </Form.Group> */}

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
        else {
            if (userLogged === "student") {

                return (
                    <StudentDetails RegNo={RegNo} />
                );
            }
        }

    }
}

export default LoginUser;