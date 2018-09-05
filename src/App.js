import React, { Component } from 'react';
import MenuButton from './MenuButton.js';
import SearchMap from './SearchMap.js';
import MyMap from './MyMap.js';


import './style.css';

class App extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
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
              <MyMap />

              <MenuButton handleMouseDown={this.handleMouseDown}/>

        </div>


          <SearchMap handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>





      </div>
    );
  }
}

export default App;
