import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import NavBar from "../components/NavBar";
import ResultList from "../components/ResultList";
import ExternalAPI from "../utils/ExternalAPI";
import geoCodingAPI from "../utils/geoCodingAPI";
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class Incidents extends Component {

  state = {
    incidents: [],
    title: "",
    author: "",
    type: "",
    description: "",
    searchTerm: "",
    results:[],
    blah: "There are no results to display, yet..."
  };
  

  componentDidMount() {
    this.loadIncidents();
  }

  searchBikeIncidents = query => {
    console.log("searching...")
    ExternalAPI.search(query)
      .then(res => this.setState({ results: res.data.incidents }))
      .catch(err => console.log(err));
  };

  handleSearchSubmit  = event => {
    if(event.key === 'Enter') {
      console.log("submittng...", event)

      // event.preventDefault();
      this.searchBikeIncidents(this.state.searchTerm);

      this.setState({
        blah: ""
      });
    }
  };

  loadIncidents = () => {
    API.getIncidents()
      .then(res => this.setState({ incidents: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    console.log('im here!')
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // this.searchBikeIncidents(this.state.searchTerm);
  };

  deleteIncident = id => {
    API.deleteIncident(id)
      .then(res => this.loadIncidents())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {

      // geoCodingAPI.search().then(function(data) {

      //   console.log('WE GOT THIS BACK!!! FROM GEO!!', data)
      // })
      // API.saveIncident({
      //   title: this.state.title,
      //   author: this.state.author,
      //   type: this.state.type,
      //   description: this.state.description
      // })
      //   .then(res => this.loadIncidents())
      //   .catch(err => console.log(err));
    }

  };

  render() {
    const { classes } = this.props;
    return (
      <Container fluid>  
    <NavBar value={this.state.searchTerm} handleInputChange={this.handleInputChange} onKeyPress={this.handleSearchSubmit} />
    <br></br>

    <h1 style={{margin: '40px'}}>{this.state.blah}</h1>

    <ResultList results={this.state.results}/>
    
      </Container>
      
    );
  }
}

export default withStyles(styles)(Incidents);
