import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { AddTeacherModel } from "./AddTeacher";
import { EditTeacherModel } from "./EditTeacher";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = { teachers: [], addModalShow: false, editModalShow: false };
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
  deleteTeacher(ID) {
    if (window.confirm('Are you sure ?')) {
      fetch("http://localhost:58526/api/TeacherMsts/" + ID, {
        method: 'DELETE',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }
  render() {
    var { teachers, ID, Name, BranchName, Email, Mobile, Qualification, Address, City, Pincode, Gender, Edate,RegNo } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <Table className="mt-4"  striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>RegNo</th>
              <th>Branch</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Qualification</th>
              <th>Enrollment date</th>
              <th>Address</th>
              <th>City</th>
              <th>Pin code</th>
              <th>Gender</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.ID}>
                <td>{teacher.Name}</td>
                <td>{teacher.RegNo}</td>
                <td>{teacher.BranchName}</td>
                <td>{teacher.Email}</td>
                <td>{teacher.Mobile}</td>
                <td>{teacher.Qualification}</td>
                <td>{teacher.Edate}</td>
                <td>{teacher.Address}</td>
                <td>{teacher.City}</td>
                <td>{teacher.Pincode}</td>
                <td>{teacher.Gender}</td>
                <td>
                  <ButtonToolbar>
                    <Button className="mr-2" variant="info"
                      onClick={() => this.setState({
                        editModalShow: true,
                        ID: teacher.ID, Name: teacher.Name, RegNo: teacher.RegNo,
                        BranchName: teacher.BranchName, Email: teacher.Email, Mobile: teacher.Mobile,
                        Qualification: teacher.Qualification, Edate: teacher.Edate, Address: teacher.Address,
                        City: teacher.City, Pincode: teacher.Pincode, Gender: teacher.Gender
                      })}>
                      Edit
                    </Button>
                    <Button className="mr-2" variant="danger"
                      onClick={() => this.deleteTeacher(teacher.ID)}>
                      Delete
                    </Button>
                    <EditTeacherModel show={this.state.editModalShow} onHide={editModalClose}
                      ID={ID}  Name={Name} RegNo={RegNo} BranchName={BranchName} Email={Email} 
                      Mobile={Mobile} Qualification={Qualification} Edate={Edate} 
                      Address={Address} City={City} Pincode={Pincode} Gender={Gender}
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
          <AddTeacherModel
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }

}
export default Teacher;