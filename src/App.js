import React, { Component } from 'react';
import MenuButton from './MenuButton.js';
import MyMap from './MyMap.js';
import SearchMap from './SearchMap.js'


import './style.css';

class App extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
          'markers': [],
          defaultMarkers: [
              {
                  'id': 1,
                  'type': "Store",
                  'name': "Walmart",
                  'lat': 34.883160,
                  'long': -82.355426
              },
              {
                  'id': 2,
                  'type': "Public Center",
                  'name': "Grace Church",
                  'lat': 34.898554,
                  'long': -82.340463
              },
              {
                  'id': 3,
                  'type': "Store",
                  'name': "Vietnamese Shop",
                  'lat': 34.917779,
                  'long': -82.318189
              },
              {
                  'id': 4,
                  'type': "Store",
                  'name': "Shopping center",
                  'lat': 34.937425,
                  'long': -82.278508
              },
              {
                  'id': 5,
                  'type': "Park",
                  'name': "Soccer Field",
                  'lat': 34.883428,
                  'long': -82.306161
              },
              {
                  'id': 6,
                  'type': "Park",
                  'name': "Paris Mountain",
                  'lat': 34.941150,
                  'long': -82.391217
              },
              {
                  'id': 7,
                  'type': "Park",
                  'name': "Falls Park",
                  'lat': 34.844564,
                  'long': -82.401244
              },
              {
                  'id': 8,
                  'type': "Public Center",
                  'name': "Taylors Library",
                  'lat': 34.920183,
                  'long': -82.308262
              },
              {
                  'id': 9,
                  'type': "Public Center",
                  'name': "Greenville Airport",
                  'lat': 34.895945,
                  'long': -82.217234
              },

          ],
        visible: false,
        selectedPlace: {}

      };

      this.toggleMenu = this.toggleMenu.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.renderMarkers = this.renderMarkers.bind(this);
      this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            markers: [...this.state.defaultMarkers]
        })
    }

    handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }


    toggleMenu() {
      this.setState({
          visible: !this.state.visible
      });
    }

    renderMarkers(markers) {
        this.setState( () => ({
            markers: [...markers]
        }))
    }

    onMarkerClick = (e) =>{
       this.setState({
         selectedPlace: e
       });
    }


  render() {
    return (
        // rendering the full app
      <div className="App">

        <div className="main-site">

              <div className="heading">
                <h1>My Neighboorhood Map</h1>

              </div>
        {/*passing state to the MyMap component */}
              <MyMap markers={this.state.markers}
              onMarkerClick={this.onMarkerClick}
              />

              <MenuButton handleMouseDown={this.handleMouseDown}/>
        {/* this is the infow window on the bottom right uses selectedPlace to render */}
              <div className="marker-info" >
                <h1>{this.state.selectedPlace.name}</h1>
                <h3>{this.state.selectedPlace.type}</h3>
              </div>

        </div>
        {/* passing state to SearchMap component */}
        <SearchMap handleMouseDown={this.handleMouseDown}
         menuVisibility={this.state.visible}
         markers={this.state.defaultMarkers}
         renderMarkers={this.renderMarkers}
         onMarkerClick={this.onMarkerClick}
         selected={this.state.selectedPlace}

         />



      </div>
    );
  }
}

export default App;
