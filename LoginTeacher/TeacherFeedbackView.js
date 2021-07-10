 import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import TeacherDetails from './TeacherLandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
//import EditLeaveStatusOfStudent from './EditLeaveStatus';

export class ViewFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.Name,
            RegNo: this.props.RegNo,
            feedbacks: [],
            filtered: [],
            goto: "feedbacklist"
        };
    }
    refreshList() {
        fetch("http://localhost:58526/api/FeedbackMsts")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ feedbacks: data });
            });
    }
    componentDidMount() {
        this.refreshList();
    }


    render() {
        var { feedbacks, goto, filtered, Name, RegNo } = this.state;
        feedbacks.forEach(element => {
            if (element.TeacherName === Name) {

                filtered.push(element);
            }
        });
        console.log(feedbacks);
        return (
            <div>
                {goto === "feedbacklist" && (<div>
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>RollNo</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Feedbackentered</th>
                                <th>FeedbackEnrollmentDate</th>
                                <th>Teacher Name</th>


                            </tr>
                        </thead>
                        {filtered.map((filter) => (
                            <tbody>

                                <tr >
                                    <td>{filter.RollNo}</td>
                                    <td>{filter.Email}</td>
                                    <td>{filter.Mobile}</td>
                                    <td>{filter.Feedbackentered}</td>
                                    <td>{filter.FeedbackEnrollmentDate}</td>
                                    <td>{filter.TeacherName}</td>



                                </tr>


                            </tbody>
                        ))}
                    </Table>
                    <ButtonToolbar>
                        <Button
                            variant="primary"
                            onClick={() => this.setState({ goto: goto = "teacherlandingpage" })}
                        >
                            TeacherHome
                        </Button>

                    </ButtonToolbar>
                </div>)}
                {goto === "teacherlandingpage" && <TeacherDetails RegNo={RegNo} />}

            </div>
        );
    }

}
export default ViewFeedback; 

