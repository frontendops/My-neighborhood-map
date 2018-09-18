import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper,} from 'google-maps-react';


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
                    type={`${marker.type}`}
                    icon= {{
                        url: 'http://mt.google.com/vt/icon?psize=27&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=43&ay=50&text=•&scale=1'
                    }}

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
