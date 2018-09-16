import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


import './style.css';

class MyMap extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    onMarkerClick = (props, marker, e) =>
       this.setState({
         selectedPlace: props,
         activeMarker: marker,
         showingInfoWindow: true
       });

       closeWindow = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


    windowClose = (e) => {

    }
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

        <Marker onClick={this.onMarkerClick}
        name={'City of Taylors'} />

        <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.closeWindow}
        >
                <div>
                  <p>{this.state.selectedPlace.name}</p>
                </div>
        </InfoWindow>



            {this.props.markers.map(marker =>
                <Marker key={marker.id}
                    onClick={this.onMarkerClick}

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
