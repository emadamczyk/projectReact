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
import geoCodingAPI from "../utils/geoCodingAPI";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import WorkingMap from "../components/WorkingMap";

const mapStyle = {
  width: '100%',
  height: '100%'
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

var gridTileStyle= {
    position: 'relative',
    float: 'left',
    width: '100%',
    minHeight: '400px',
    minWidth: '664px',
    overflow: 'hidden',
    height: '150%',     
}


class Create extends Component {

  state = {
    incidents: [],
    title: "",
    author: "",
    type: "",
    location: "",
    description: "",
    searchTerm: "",
    results:[],
    lat: "",
    lng: "",
    coordArray: []
  };
  

  componentDidMount() {
    this.loadIncidents();
  }

  // searchBikeIncidents = query => {
  //   console.log("searching...")
  //   ExternalAPI.search(query)
  //     .then(res => this.setState({ results: res.data.incidents }))
  //     .catch(err => console.log(err));
  // };

  // handleSearchSubmit  = event => {
  //   if(event.key === 'Enter') {
  //     console.log("submittng...", event)
  //     // event.preventDefault();
  //     this.searchBikeIncidents(this.state.searchTerm);
  //   }
  // };

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
    console.log("hit submit");
    event.preventDefault();
  console.log('locationnnnnn', this.state.location)
  var self = this
    geoCodingAPI.search(this.state.location).then(function(data) {

      // console.log("this is the location object", data.data.results[0].geometry.location);
      self.setState({incidents: [...self.state.incidents, data.data.results[0].geometry.location]})
      // console.log("this is coordarray", self.state.coordArray);
      // console.log("this is the location array", self.state.coordArray);

      // console.log('WE GOT THIS BACK!!! FROM GEO!!', data.data.results[0].geometry.location.lat)
      API.saveIncident({
        title: self.state.title,
        author: self.state.author,
        type: self.state.type,
        location: self.state.location,
        lat: data.data.results[0].geometry.location.lat,
        lng:data.data.results[0].geometry.location.lng,
        description: self.state.description
      })
        .then(res => 
          // console.log("this is the location object", res.data),
          self.loadIncidents()
        )
        // .then(res => self.setState({coordArray: res.data.data.results[0].geometry.location}))
        .catch(err => console.log(err));
    }).catch(function(err) {
      console.log('THIS IS OUR ERR!!', err);
    })
    //if (this.state.title && this.state.author) {
      // API.saveIncident({
      //   title: this.state.title,
      //   author: this.state.author,
      //   type: this.state.type,
      //   location: this.state.location,
      //   latLng: '',
      //   description: this.state.description
      // })
      //   .then(res => this.loadIncidents())
      //   .catch(err => console.log(err));
    //}
  };

  render() {
    const { classes } = this.props;
    return (
      
      <Container fluid>
      <MenuAppBar/>
      <div style={{margin: "40px"}} className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
        <div style={gridTileStyle}>
          <WorkingMap incidentsArray={this.state.incidents}/>
          </div>
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
              <Input 
              value={this.state.location}
              onChange={this.handleInputChange}
              name="location" 
              placeholder="Location (required)" 
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
              <h3>You Have No Incidents Reported</h3>
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

export default withStyles(styles)(Create)




