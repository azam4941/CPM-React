import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { AddNewsEventsModel } from "./AddNewsEvents";

import 'bootstrap/dist/css/bootstrap.min.css';

export class NewsEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { newsevents: [], addNewsEventsShow: false };
  }
  refreshList() {
    fetch("http://localhost:58526/api/EventMsts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ newsevents: data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  
  render() {
    var { newsevents} = this.state;
    let addNewsEventsClose = () => this.setState({ addNewsEventsShow: false });
    
    return (
      <div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>NEWS and EVENTS</th>
              
            </tr>
          </thead>
          <tbody>
            {newsevents.map((newsevent) => (
              <tr key={newsevent.NID}>
                  <td>{newsevent.NewsEvt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addNewsEventsShow: true })}
          >
            Add News and Events
          </Button>
          <AddNewsEventsModel
            show={this.state.addNewsEventsShow}
            onHide={addNewsEventsClose}
          />
        </ButtonToolbar>
      </div>
    );
  }

}
export default NewsEvents;