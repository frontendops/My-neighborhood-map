import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import SearchMap from './SearchMap.js';

import './style.css';

class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'markers': [
                {
                    'name': "my job",
                    'lat': 34.883160,
                    'long': -82.355426
                },
                {
                    'name': "My church",
                    'lat': 34.898554,
                    'long': -82.340463
                },
                {
                    'name': "Asian Shop",
                    'lat': 34.917779,
                    'long': -82.318189
                },
                {
                    'name': "Shopping center",
                    'lat': 34.937425,
                    'long': -82.278508
                },
                {
                    'name': "Soccer Field",
                    'lat': 34.883428,
                    'long': -82.306161
                }
            ]
        }

    };


  render() {

    return (
        <div>
        <SearchMap markers={this.state.markers}/>

       <Map google={this.props.google}
        zoom={13}
        initialCenter={{
            lat: 34.919604,
            lng: -82.302847
          }}
        >

        <Marker onClick={this.onMarkerClick}
            name={'City of Taylors'} />

            {this.state.markers.map(marker =>
                <Marker
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
