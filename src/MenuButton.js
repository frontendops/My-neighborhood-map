import React, { Component } from "react";
import './style.css';

class MenuButton extends Component {
  render() {
    return (
        //on the click of this button the side menu is brought into view
      <button id="roundButton"
              onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}

export default MenuButton;
