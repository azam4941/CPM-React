import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

export class TeacherView extends Component {
  constructor(props) {
    super(props);
    this.state = { teachers: []};
  }
  refreshList() {
    fetch("http://localhost:58526/api/TeacherMsts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ teachers: data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  
  render() {
    var { teachers } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <Table className="mt-4" variant="dark" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Branch</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Qualification</th>
              <th>Enrollment date</th>
              <th>Address</th>
              <th>City</th>
              <th>Pin code</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.ID}>
                <td>{teacher.Name}</td>
                <td>{teacher.BranchName}</td>
                <td>{teacher.Email}</td>
                <td>{teacher.Mobile}</td>
                <td>{teacher.Qualification}</td>
                <td>{teacher.Edate}</td>
                <td>{teacher.Address}</td>
                <td>{teacher.City}</td>
                <td>{teacher.Pincode}</td>
                <td>{teacher.Gender}</td>
                
              </tr>
             ))}
         </tbody>
        </Table>
      </div>
    );
  }

}