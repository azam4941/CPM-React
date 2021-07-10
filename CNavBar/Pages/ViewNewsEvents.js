import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export class NewsEventsView extends Component {
  constructor(props) {
    super(props);
    this.state = { newsevets: []};
  }
  refreshList() {
    fetch("http://localhost:58526/api/EventMsts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ newsevets: data });
      });
  }

  
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  
  render() {
    var { newsevets } = this.state;
   
    return (
      <div>
        <Table className="mt-4"striped bordered hover size="sm">
          <thead>
            <tr>
              <th>News and Events</th>
              
            </tr>
          </thead>
          <tbody>
            {newsevets.map((newsevet) => (
              <tr key={newsevet.NID}>
                <td>{newsevet.NewsEvt}</td>
                
                
                  
                
              </tr>
            ))}
          </tbody>
         </Table>
         
         
      </div>
    );
  }

}
export default NewsEventsView;