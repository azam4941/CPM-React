/* import React, { Component } from 'react';
//import './App.css';  
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class Feedback extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Email: this.props.Email,
            Mobile: this.props.MobileNumber,
            Feedbackentered: '',
            FeedbackEnrollmentDate: '',
            RollNo: this.props.RollNo,
            TeacherName: ''

        }

        this.Email = this.Email.bind(this);
        this.Mobile = this.Mobile.bind(this);
        this.Feedbackentered = this.Feedbackentered.bind(this);
        this.FeedbackEnrollmentDate = this.FeedbackEnrollmentDate.bind(this);
        this.RollNo = this.RollNo.bind(this);
        this.TeacherName = this.TeacherName.bind(this);

        this.addfeedback = this.addfeedback.bind(this);

    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Mobile(event) {
        this.setState({ Mobile: event.target.value })
    }
    Feedbackentered(event) {
        this.setState({ Feedbackentered: event.target.value })
    }
    FeedbackEnrollmentDate(event) {
        this.setState({ FeedbackEnrollmentDate: event.target.value })
    }
    RollNo(event) {
        this.setState({ RollNo: event.target.value })
    }
    TeacherName(event) {
        this.setState({ TeacherName: event.target.value })
    }


    addfeedback(event) {
        debugger;
        fetch('http://localhost:58526/api/FeedbackMsts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Mobile: this.state.Mobile,
                Feedbackentered: this.state.Feedbackentered,
                FeedbackEnrollmentDate: this.state.FeedbackEnrollmentDate,
                RollNo: this.state.RollNo,
                TeacherName: this.state.TeacherName

            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                // if (result.Status == 'Invalid')  
                //     alert('Feedback not sent');  
                // else  {
                // //alert('Feedback sent successfully')
                //    this.props.history.push("/FeedbackDashboard");  
                alert("Feedback submitted");
            })
    }

    render() {
        console.log(this.state);
        var { Email, Mobile, Feedbackentered, FeedbackEnrollmentDate, RollNo, TeacherName } = this.state;
        return (
            <div style={{ marginTop: "5%" }} className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">

                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div class="row" className="mb-2 pageheading">
                                                <div class="col-sm-12 btn btn-primary">
                                                    Feedback
                                                </div>
                                            </div>
                                            <InputGroup className="mb-3">

                                                <Input type="text" onChange={this.Email} value={Email} placeholder="Enter Email" disabled />
                                            </InputGroup>
                                            <InputGroup className="mb-4">

                                                <Input type="text" onChange={this.Mobile} value={Mobile} placeholder="Enter Phone" disabled />
                                            </InputGroup>
                                            <InputGroup className="mb-4">

                                                <Input type="text" onChange={this.RollNo} value={RollNo} placeholder="Enter Roll Number" disabled />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="text" onChange={this.TeacherName} placeholder="Enter Teacher Name" />

                                            </InputGroup>

                                            <InputGroup className="mb-4">

                                                <textarea onChange={this.Feedbackentered} name="w3review" rows="4" cols="50"></textarea>
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="date" onChange={this.FeedbackEnrollmentDate} placeholder="Enter Date" />
                                            </InputGroup>
                                            <Button onClick={this.addfeedback} color="success" block>Submit</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Feedback; */

import React, { Component } from 'react';
//import './App.css';  
import StudentDetails from './StudentLandingPage';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, ButtonToolbar, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class Feedback extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Email: this.props.Email,
            Mobile: this.props.MobileNumber,
            Feedbackentered: '',
            FeedbackEnrollmentDate: '',
            RollNo: this.props.RollNo,
            TeacherName: '',
            goto: "feedback"
        }

        this.Email = this.Email.bind(this);
        this.Mobile = this.Mobile.bind(this);
        this.Feedbackentered = this.Feedbackentered.bind(this);
        this.FeedbackEnrollmentDate = this.FeedbackEnrollmentDate.bind(this);
        this.RollNo = this.RollNo.bind(this);
        this.TeacherName = this.TeacherName.bind(this);

        this.addfeedback = this.addfeedback.bind(this);

    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Mobile(event) {
        this.setState({ Mobile: event.target.value })
    }
    Feedbackentered(event) {
        this.setState({ Feedbackentered: event.target.value })
    }
    FeedbackEnrollmentDate(event) {
        this.setState({ FeedbackEnrollmentDate: event.target.value })
    }
    RollNo(event) {
        this.setState({ RollNo: event.target.value })
    }
    TeacherName(event) {
        this.setState({ TeacherName: event.target.value })
    }


    addfeedback(event) {
        debugger;
        fetch('http://localhost:58526/api/FeedbackMsts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Mobile: this.state.Mobile,
                Feedbackentered: this.state.Feedbackentered,
                FeedbackEnrollmentDate: this.state.FeedbackEnrollmentDate,
                RollNo: this.state.RollNo,
                TeacherName: this.state.TeacherName

            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                // if (result.Status == 'Invalid')  
                //     alert('Feedback not sent');  
                // else  {
                // //alert('Feedback sent successfully')
                //    this.props.history.push("/FeedbackDashboard");  
                alert("Feedback submitted");
            })
    }

    render() {
        console.log(this.state);
        var { Email, Mobile, Feedbackentered, FeedbackEnrollmentDate, RollNo, TeacherName, goto } = this.state;
        return (
            <div>
                {goto === "feedback" && (<div style={{ marginTop: "5%" }} className="app flex-row align-items-center">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="9" lg="7" xl="6">

                                <CardGroup>
                                    <Card className="p-2">
                                        <CardBody>
                                            <Form>
                                                <div class="row" className="mb-2 pageheading">
                                                    <div class="col-sm-12 btn btn-primary">
                                                        Feedback
                                                    </div>
                                                </div>
                                                <InputGroup className="mb-3">

                                                    <Input type="text" onChange={this.Email} value={Email} placeholder="Enter Email" disabled />
                                                </InputGroup>
                                                <InputGroup className="mb-4">

                                                    <Input type="text" onChange={this.Mobile} value={Mobile} placeholder="Enter Phone" disabled />
                                                </InputGroup>
                                                <InputGroup className="mb-4">

                                                    <Input type="text" onChange={this.RollNo} value={RollNo} placeholder="Enter Roll Number" disabled />
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <Input type="text" onChange={this.TeacherName} placeholder="Enter Teacher Name" />

                                                </InputGroup>

                                                <InputGroup className="mb-4">

                                                    <textarea onChange={this.Feedbackentered} name="w3review" rows="4" cols="50"></textarea>
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <Input type="date" onChange={this.FeedbackEnrollmentDate} placeholder="Enter Date" />
                                                </InputGroup>
                                                <Button onClick={this.addfeedback} color="success" block>Submit</Button>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                                <br />
                                <ButtonToolbar>
                                    <Button
                                        variant="primary"
                                        onClick={() => this.setState({ goto: goto = "studentlandingpage" })}
                                    >
                                        StudentHome
                                    </Button>

                                </ButtonToolbar>
                            </Col>
                        </Row>

                    </Container>
                </div>)}
                {goto === "studentlandingpage" && <StudentDetails RegNo={RollNo} />}
            </div>
        );
    }
}
export default Feedback;