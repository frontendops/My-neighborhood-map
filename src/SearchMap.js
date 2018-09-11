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
           className={visibility}>

        <h1 className="menu-heading">Search The Map</h1>

        <button onMouseDown={this.props.handleMouseDown}
         type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <input className="search" type="text"></input>

        {this.props.markers.map( marker =>
            <div className="search-result">
                <p>{marker.name}</p>
            </div>
        )}


      </div>
    );
  }
}

export default SearchMap;
