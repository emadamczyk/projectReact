import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import MapContainer from "../components/Maps";
import NavBar from "../components/NavBar";
import ResultList from "../components/ResultList";
import ExternalAPI from "../utils/ExternalAPI";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from "../components/StaticNavBar";


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

var gridTileStyle= {
    position: 'relative',
    float: 'left',
    width: '100%',
    minHeight: '400px',
    minWidth: '664px',
    overflow: 'hidden',
    height: '100% !important'
}


class Incidents extends Component {

  state = {
    incidents: [],
    title: "",
    author: "",
    type: "",
    description: "",
    searchTerm: "",
    results:[]
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
    const { classes } = this.props;
    return (

      
      
      <Container fluid>
      <MenuAppBar/>
      <div style={{margin: "40px"}} className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <div style={gridTileStyle}><MapContainer/></div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <div>
          <h1>Submit an Incident</h1>
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

          </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <div>
            <h1>My Incidents</h1>
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
          </div>
          </Paper>
          </Grid>
      </Grid>
    </div>
      </Container>
      
    );
  }
}

export default withStyles(styles)(Incidents);
