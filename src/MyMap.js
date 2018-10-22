import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


import './style.css';

class MyMap extends Component {


  render() 
    if (!this.props.google.maps) {
        return (<div>Error please try loading the app again</div>)
    } else {
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


        {/* each marker that is searched for is rendered here  */}
            {this.props.markers.map(marker =>
                <Marker key={marker.id}
                    onClick={this.props.onMarkerClick}
                    name={`${marker.name}`}
                    type={`${marker.type}`}
                    animation= { this.props.selectedPlace ? (marker.name === this.props.selectedPlace.name ? '1' : '0') : '0'}

                    position={{lat: `${marker.lat}`, lng: `${marker.long}`}} />

            )}


      </Map>



      </div>

    );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB3joGhgT9ytYxBXlPWetA-SR-jOctffv0")
})(MyMap)
