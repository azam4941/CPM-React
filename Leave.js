import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { AddLeaveModel } from "./ApplyLeave";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Leave extends Component {
    constructor(props) {
      super(props);
      this.state = { leaves: [], addModalShow: false, editModalShow: false };
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
      componentDidUpdate() {
        this.refreshList();
      }
      render() {
        var { leaves, LID, Rollno, Name, BranchName, Message, Nodays ,Edate  } = this.state;

        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <div>
              <Table className="mt-4" stripped border hover size="sm">
                <thead>
                  <tr>
                      <th>RollNo</th>
                      <th>Name</th>
                      <th>BranchName</th>
                      <th>Message</th>
                      <th>Nodays</th>
                      <th>EDate</th>
                  </tr>
          </thead>
          <tbody>
          {leaves.map((leave) => (
              <tr key={leave.LID}>
                <td>{leave.Rollno}</td>
                <td>{leave.Name}</td>
                <td>{leave.BranchName}</td>
                <td>{leave.Message}</td>
                <td>{leave.Nodays}</td>
                <td>{leave.Edate}</td>
                </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
              Add
          </Button>
          <AddLeaveModel
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }

}
export default Leave;