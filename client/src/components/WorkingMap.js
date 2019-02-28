import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '100%',
    height: '100%'
  }
 
export class MapContainer extends Component {
 
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
        locations: [
          {
            lat: 37.778519,
            lng: -122.405640
          },
          {
            lat: 37.759703,
            lng: -122.428093
          },
          {
            lat: 41.8781,
            lng: -87.6298
          }
        ]
      };

      // fetchPlaces(mapProps, map) {
      //   const {google} = mapProps; 
      // }

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
  
  
  render() {
    return (
    <div>

        {console.log("this is the coordinate array", this.props.incidentsArray)}
      
        <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 41.8781,
          lng: -87.6298
        }}
        zoom={7}
        onClick={this.onMapClicked}
        
      >
      {console.log("this is the props.incidentsArray.location", this.props.incidentsArray)}
        {console.log("this is the props.incidentsArray.location", this.props.incidentsArray[0].location)}
      {this.props.incidentsArray.map((x, i) => {

        return <Marker 
        key={i}
        onClick={this.onMarkerClick}
        name={
          <div>
            <p id="1">{this.props.incidentsArray[i].title}</p>
            <p id="2">{this.props.incidentsArray[i].author}</p>
            <p id="3">{this.props.incidentsArray[i].type}</p>
            <p id="4">{this.props.incidentsArray[i].description}</p>
          </div>
        } 
            // name={'dolorrrrrres park'} 
            title={this.props.incidentsArray[i].location}
            // position={{lat: 37.759703, lng: -122.428093}}
            // position={{lat: this.state.locations[i].lat , lng: this.state.locations[i].lng}}
            position={{lat: this.props.incidentsArray[i].lat , lng: this.props.incidentsArray[i].lng}}
        />
      })}
    
    <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </div>
    );
   
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCio8lIF1MITRS5JN9hjgHfjfASqkqXg1w"
})(MapContainer)