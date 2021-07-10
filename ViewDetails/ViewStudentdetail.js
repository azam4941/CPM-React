import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = { students: []};
  }
  refreshList() {
    fetch("http://localhost:58526/api/StudentMsts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ students: data });
      });
  }

  
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  
  render() {
    var { students,teachers } = this.state;
   
    return (
      <div>
        <Table className="mt-4" variant="dark" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Email</th>
              <th>Mobile number</th>
              <th>Date of Birth</th>
              <th>Enrollment date</th>
              <th>Address</th>
              <th>City</th>
              <th>Pin code</th>
              
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.ID}>
                <td>{student.RollNo}</td>
                <td>{student.Name}</td>
                <td>{student.BranchName}</td>
                <td>{student.Email}</td>
                <td>{student.MobileNumber}</td>
                <td>{student.DateOfBirth}</td>
                <td>{student.EnrollmentDate}</td>
                <td>{student.Address}</td>
                <td>{student.City}</td>
                <td>{student.Pincode}</td>
                
                  
                
              </tr>
            ))}
          </tbody>
         </Table>
         
         
      </div>
    );
  }

}


