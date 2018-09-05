import React, { Component } from "react";
import "./style.css";

class SearchMap extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown}
           className={visibility}>
        <h2><a>Home</a></h2>
        <h2><a>About</a></h2>
        <h2><a>Contact</a></h2>
        <h2><a>Search</a></h2>
      </div>
    );
  }
}

export default SearchMap;
