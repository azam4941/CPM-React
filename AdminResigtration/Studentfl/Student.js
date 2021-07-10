import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { AddStudentModel } from "./AddStudents";
import { EditStudentModel } from "./EditStudent";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], addModalShow: false, editModalShow: false };
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
  deleteStudent(ID) {
    if (window.confirm('Are you sure ?')) {
      fetch("http://localhost:58526/api/StudentMsts/" + ID, {
        method: 'DELETE',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }
  render() {
    var { students, ID, RollNo, Name, BranchName, Email, MobileNumber, DateOfBirth, Address, City, Pincode, EnrollmentDate } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    /* students.forEach(element => {
      if (element.RollNo === RollNo) {

          refined.push(element);
      }
  }); */
    return (
      <div>
        <Table className="mt-4" striped bordered hover size="sm">
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
              <th>Edit/Delete</th>
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
                <td>
                  <ButtonToolbar>
                    <Button className="mr-2" variant="info"
                      onClick={() => this.setState({
                        editModalShow: true,
                        ID: student.ID, RollNo: student.RollNo, Name: student.Name,
                        BranchName: student.BranchName, Email: student.Email, MobileNumber: student.MobileNumber,
                        DateOfBirth: student.DateOfBirth, Address: student.Address,
                        City: student.City, Pincode: student.Pincode, EnrollmentDate: student.EnrollmentDate
                      })}>
                      Edit
                    </Button>
                    <Button className="mr-2" variant="danger"
                      onClick={() => this.deleteStudent(student.ID)}>
                      Delete
                    </Button>
                    <EditStudentModel show={this.state.editModalShow} onHide={editModalClose}
                      ID={ID} RollNo={RollNo} Name={Name} BranchName={BranchName}
                      Email={Email} MobileNumber={MobileNumber} DateOfBirth={DateOfBirth} Address={Address}
                      City={City} Pincode={Pincode} EnrollmentDate={EnrollmentDate}
                    />
                  </ButtonToolbar>
                </td>
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
          <AddStudentModel
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }

}
export default Student;