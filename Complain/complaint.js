import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import  AddComplainModel  from "./AddComplain";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Complain extends Component {
    constructor(props) {
      super(props);
      this.state = { complains: [], addModalShow: false, editModalShow: false };
    }
    refreshList() {
        fetch("http://localhost:58526/api/ComplainMsts")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ complains: data });
          });
      }
      componentDidMount() {
        this.refreshList();
      }
      componentDidUpdate() {
        this.refreshList();
      }
      render() {
        var { complains, CID, RollNo, Name, Complaint  } = this.state;

        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <div>
              <Table className="mt-4" stripped border hover size="sm">
                <thead>
                  <tr>
                      <th>RollNo</th>
                      <th>Name</th>
                      <th>MobileNumber</th>
                      <th>Complaint</th>
                  </tr>
          </thead>
          <tbody>
          {complains.map((complain) => (
              <tr key={complain.CID}>
                <td>{complain.RollNo}</td>
                <td>{complain.Name}</td>
                <td>{complain.MobileNumber}</td>
                <td>{complain.Complaint}</td>
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
          <AddComplainModel
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }

}
export default Complain;