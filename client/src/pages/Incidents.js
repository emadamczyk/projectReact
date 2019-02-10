import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Incidents extends Component {
  state = {
    incidents: []
  };

  componentDidMount() {
    this.loadIncidents();
  }

  loadIncidents = () => {
    API.getIncidents()
      .then(res => this.setState({ incidents: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Post an Incident</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <Input name="type" placeholder="Type" />
              <TextArea name="description" placeholder="Description" />
              <FormBtn>Submit Incident</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Incidents</h1>

            </Jumbotron>
            {this.state.incidents.length ? (
              <List>
                
                {this.state.incidents.map(incident => (
                  <ListItem key={incident._id}>
                    <a href={"/incidents/" + incident._id}>
                      <strong>
                        {incident.title} by {incident.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Incidents;
