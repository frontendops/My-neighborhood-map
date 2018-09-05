import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import './style.css';

class MyMap extends Component {

  render() {

     

    return (
       <Map google={this.props.google}
        zoom={13}
        initialCenter={{
            lat: 34.919604,
            lng: -82.302847
          }}
        >

        <Marker onClick={this.onMarkerClick}
            name={'City of Taylors'} />

            <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'My job'}
                position={{lat: 34.883160, lng: -82.355426}} />

            <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'My church'}
                position={{lat: 34.898510, lng: -82.340463}} />

            <Marker
                title={'Asian shop where i get my noodles from'}
                name={'Asian Shop'}
                position={{lat: 34.917779, lng: -82.318189}} />

            <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'Shopping center'}
                position={{lat: 34.937425, lng: -82.278508}} />


            <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'Soccer Field'}
                position={{lat: 34.883428, lng: -82.306161}} />


        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB3joGhgT9ytYxBXlPWetA-SR-jOctffv0")
})(MyMap)
