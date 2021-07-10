import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export class ComplainView extends Component {
  constructor(props) {
    super(props);
    this.state = { complains: []};
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
    var { complains,RollNo,Name,MobileNumber,Complaint } = this.state;
   
    return (
      <div>
        <Table className="mt-4"striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Complain From Students</th>
              
            </tr>
          </thead>
          <tbody>
          {complains.map((complain) => (
              <tr key={complain.NID}>
                <td>{complain.RollNo}</td>
                <td>{complain.Name}</td>
                <td>{complain.MobileNumber}</td>
                <td>{complain.Complaint}</td>
                
              </tr>
            ))}
          </tbody>
         </Table>
         
         
      </div>
    );
  }

}
export default ComplainView;