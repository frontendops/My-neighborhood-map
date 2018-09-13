import React, { Component } from "react";
import "./style.css";


class SearchMap extends Component {
    state = {
        query: '',
        searchedMarkers: []
    }

    updateInput = (query) => {
        this.setState({ query })

    }


  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    let filteredMarkers = this.props.markers.filter(marker => {
        return marker.name.toLowerCase().indexOf(this.state.query) !== -1;
    }
    );

    

    return (
      <div id="flyoutMenu"
           className={visibility}>

        <h1 className="menu-heading">Search The Map</h1>

        <button onMouseDown={this.props.handleMouseDown}
         type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <input className="search" type="text" placeholder={"Search for any location"}
        value={this.state.query}
        onChange={(e) => this.updateInput(e.target.value)}
        ></input>

        {filteredMarkers.map( marker =>
            <div key={marker.id} className="search-result">
                <p>{marker.name}</p>
            </div>
        )}


      </div>
    );
  }
}

export default SearchMap;
