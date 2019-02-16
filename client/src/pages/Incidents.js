import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import MapContainer from "../components/Maps";
import NavBar from "../components/NavBar";
import SearchResultContainer from "../components/SearchResultContainer";

class Incidents extends Component {
  state = {
    incidents: [],
    title: "",
    author: "",
    type: "",
    description: ""
  };

  componentDidMount() {
    this.loadIncidents();
  }

  loadIncidents = () => {
    API.getIncidents()
      .then(res => this.setState({ incidents: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  deleteIncident = id => {
    API.deleteIncident(id)
      .then(res => this.loadIncidents())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveIncident({
        title: this.state.title,
        author: this.state.author,
        type: this.state.type,
        description: this.state.description
      })
        .then(res => this.loadIncidents())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      
      <Container fluid>
    <NavBar 
            placeholder="Search forecast for your favorite cities..."
            value={this.state.term}
            writeInput={this.handleInputChange}
    />
    <br></br>
      <MapContainer/>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <SearchResultContainer/>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Post an Incident</h1>
            </Jumbotron>
            <form>
              <Input  
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title" 
              placeholder="Title (required)" 
              />
              <Input 
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author" 
              placeholder="Author (required)" 
              />
              <Input 
              value={this.state.type}
              onChange={this.handleInputChange}
              name="type" 
              placeholder="Type" 
              />
              <TextArea 
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description" 
              placeholder="Description" 
              />
              <FormBtn 
              onClick={this.handleFormSubmit}
              >Submit Incident
              </FormBtn>
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
                    <DeleteBtn onClick={() => this.deleteIncident(incident._id)} />
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
