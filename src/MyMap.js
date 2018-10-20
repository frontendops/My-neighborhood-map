import React, { Component } from "react";
import { Map, Marker} from 'google-maps-react';


import './style.css';

class MyMap extends Component {
onError = () => {
    return (<div> could not be loaded at time please try again</div>);
}

loadMap = () => {
    return (
        <div>

       <Map google={window.google}
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

  render() {

    return (
        <div>
      {this.loadMap()}
      </div>
    );
    }
  }

export default MyMap
