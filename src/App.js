import React, { Component } from 'react';
import MenuButton from './MenuButton.js';
import MyMap from './MyMap.js';
import SearchMap from './SearchMap.js'


import './style.css';

class App extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
          'markers': [
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
              }
          ],
        visible: false
      };

      this.toggleMenu = this.toggleMenu.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
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


  render() {
    return (
      <div className="App">

        <div className="main-site">

              <div className="heading">
                <h1>My Neighboorhood Map</h1>

              </div>
              <MyMap markers={this.state.markers} />

              <MenuButton handleMouseDown={this.handleMouseDown}/>

        </div>

        <SearchMap handleMouseDown={this.handleMouseDown}
         menuVisibility={this.state.visible}
         markers={this.state.markers}
         />







      </div>
    );
  }
}

export default App;
