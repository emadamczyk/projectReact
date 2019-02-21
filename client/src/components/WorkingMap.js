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


  
  
  render() {
    return (
    <div>

        {console.log("this is the coordinate array", this.props.coordinateArray)}
      
        <Map
        google={this.props.google}
        style={style}
        center={{
          lat: 41.8781,
          lng: 87.6298
        }}
        zoom={5}
        onClick={this.onMapClicked}
        
      >

      {this.props.coordinateArray.map((x, i) => {

        return <Marker 
        key={i}
        onClick={this.onMarkerClick}
            name={'dolorrrrrres park'} 
            title={"test"}
            // position={{lat: 37.759703, lng: -122.428093}}
            // position={{lat: this.state.locations[i].lat , lng: this.state.locations[i].lng}}
            position={{lat: this.props.coordinateArray[i].lat , lng: this.props.coordinateArray[i].lng}}
        />
      })}
    

 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
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