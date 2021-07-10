import { Table, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Complain from './complaint';
import React, { Component } from "react";

class ComplainDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RollNo: this.props.RegNo,
            complains: [],
            refined: [],
            gotoPage: "studentComplainPage"
        }

    }

    refreshList() {
        fetch("http://localhost:58526/api/ComplainMsts")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ students: data });
            });

    }
    componentDidMount() {
        this.refreshList();

    }
    handleLeave = () => {
        this.setState({ gotoPage: this.state.gotoPage = "leave" });
    }

    render() {
        //console.log(this.props)
        console.log(this.state)
        const { RollNo, complains, refined, gotoPage } = this.state;
        complains.forEach(element => {
            if (element.RollNo === RollNo) {

                refined.push(element);
            }
        });

        return (
            <div>
                {gotoPage === "studentComplainPage" &&
                    (<div>
                        <Button style={{ marginTop: "5%", marginLeft: "5%" }} onClick={this.handleLeave} variant="primary" size="lg">Apply  for Complain</Button>
                        <div style={{ marginLeft: "5%", marginRight: "10%", width: "60%" }}>
                            <Table className="mt-4" striped variant="dark" bordered hover >
                                {refined.map((refine) => (
                                    <tbody>
                                        <h2 style={{ paddingLeft: "10px" }}>Hello, {refine.Name}</h2>
                                        <tr>
                                            <th>RollNo</th>
                                            <td>{refine.RollNo}</td>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>{refine.Name}</td>
                                        </tr>
                                        <tr>
                                            <th>Mobile Number</th>
                                            <td>{refine.MobileNumber}</td>
                                        </tr>
                                        <tr>
                                            <th>Complain</th>
                                            <td>{refine.Complaint}</td>
                                        </tr>
                                        {/* <tr>
                                            <th>Enrollment Date</th>
                                            <td>{refine.EnrollmentDate}</td>
                                        </tr> */}
                                        
                                    </tbody>
                                ))}
                            </Table>
                        </div>
                    </div>)
                }

                {gotoPage === "complain" && <Complain RollNo={RollNo} />}
            </div>);


    }
}

export default ComplainDetails;