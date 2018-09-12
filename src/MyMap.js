import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


import './style.css';

class MyMap extends Component {


  render() {

    return (
        <div>

       <Map google={this.props.google}
        zoom={12.5}
        initialCenter={{
            lat: 34.919604,
            lng: -82.302847
          }}
        >

        <Marker onClick={this.onMarkerClick}
            name={'City of Taylors'} />

            {this.props.markers.map(marker =>
                <Marker key={marker.id}
                    title={'The marker`s title will appear as a tooltip.'}
                    name={`${marker.name}`}
                    position={{lat: `${marker.lat}`, lng: `${marker.long}`}} />

            )}


        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>

      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB3joGhgT9ytYxBXlPWetA-SR-jOctffv0")
})(MyMap)
