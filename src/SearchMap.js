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

        <h1 className="menu-heading">Search The Map</h1>

        <input className="search" type="text"></input>

        <div className="search-result">
            <p>City of Taylors</p>
        </div>

        <div className="search-result">
            <p>My Job</p>
        </div>

        <div className="search-result">
            <p>Shopping Center</p>
        </div>

      </div>
    );
  }
}

export default SearchMap;
