import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import TeacherDetails from './TeacherLandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditLeaveStatusOfStudent from './EditLeaveStatus';

export class ViewStudentLeaves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.Name,
            RegNo: this.props.RegNo,
            leaves: [],
            filtered: [],
            refined:[],
            goto: "leavelist"
        };
    }
    refreshList() {
        fetch("http://localhost:58526/api/LeaveMsts")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ leaves: data });
            });
    }
    componentDidMount() {
        this.refreshList();
    }
    editleavestatus = (filter) => {
        
        this.state.refined[0] = filter;
        console.log(this.state.refined[0]);
        this.setState({ goto: this.state.goto = "editstatus" });
    }


    render() {
        var { leaves, goto, filtered, Name, RegNo,refined } = this.state;
        leaves.forEach(element => {
            if (element.TeacherName === Name) {

                filtered.push(element);
            }
        });
        console.log(leaves);
        return (
            <div>
                {goto === "leavelist" && (<div>
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>RollNo</th>
                                <th>Name</th>
                                <th>BranchName</th>
                                <th>Message</th>
                                <th>Number Of Days</th>
                                <th>Teacher Name</th>
                                <th>Reply</th>
                                <th>Date</th>

                            </tr>
                        </thead>
                        {filtered.map((filter) => (
                            <tbody>

                                <tr >
                                    <td>{filter.RollNo}</td>
                                    <td>{filter.Name}</td>
                                    <td>{filter.BranchName}</td>
                                    <td>{filter.Message}</td>
                                    <td>{filter.NumberOfDays}</td>
                                    <td>{filter.TeacherName}</td>
                                    <td>{filter.Reply}</td>
                                    <td>{filter.Date}</td>

                                    <td>
                                        <ButtonToolbar>

                                            <Button className="mr-2" variant="warning"
                                                onClick={() => this.editleavestatus(filter)}>
                                                EditStatus
                                            </Button>

                                        </ButtonToolbar>
                                    </td>
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
                {goto === "editstatus" && <EditLeaveStatusOfStudent RegNo={RegNo} filtered={refined[0]} />}
            </div>
        );
    }

}
export default ViewStudentLeaves;