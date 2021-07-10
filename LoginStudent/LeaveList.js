import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import StudentDetails from './StudentLandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

export class ViewLeaves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RollNo: this.props.refined.RollNo,
            leaves: [],
            filtered: [],
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

    deleteLeave(ID) {
        if (window.confirm('Are you sure ?')) {
            fetch("http://localhost:58526/api/LeaveMsts/" + ID, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        var { leaves, goto, filtered, RollNo } = this.state;
        leaves.forEach(element => {
            if (element.RollNo === RollNo) {

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

                                            <Button className="mr-2" variant="danger"
                                                onClick={() => this.deleteLeave(filter.ID)}>
                                                Delete
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
                            onClick={() => this.setState({ goto: goto = "studentlandingpage" })}
                        >
                            StudentHome
                        </Button>

                    </ButtonToolbar>
                </div>)}
                {goto === "studentlandingpage" && <StudentDetails RegNo={RollNo} />}

            </div>
        );
    }

}
export default ViewLeaves;