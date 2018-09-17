import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper,} from 'google-maps-react';


import './style.css';

class MyMap extends Component {




  render() {

    return (
        <div>

       <Map google={this.props.google}
       onClick={this.onMapClicked}
        zoom={12}
        initialCenter={{
            lat: 34.919604,
            lng: -82.302847
          }}
        >



            {this.props.markers.map(marker =>
                <Marker key={marker.id}
                    onClick={this.props.onMarkerClick}
                    name={`${marker.name}`}
                    position={{lat: `${marker.lat}`, lng: `${marker.long}`}} />

            )}


      </Map>



      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB3joGhgT9ytYxBXlPWetA-SR-jOctffv0")
})(MyMap)
