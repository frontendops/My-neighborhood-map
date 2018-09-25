import React, { Component } from "react";
import "./style.css";


class SearchMap extends Component {
    state = {
        query: '',
        searchedMarkers: this.props.markers,
        select: this.props.selected
    }

    updateInput = (query) => {
        this.setState({ query })

    }

    filterMarkers = (text) => {
        let filteredMarkers = this.props.markers.filter(marker =>
        marker.name.toLowerCase().includes(text.toLowerCase()));
        this.setState({
            searchedMarkers: filteredMarkers
        })
        this.props.renderMarkers(filteredMarkers)
    }


  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
            role="menu"
           className={visibility}>

        <h1 className="menu-heading">Search The Map</h1>

        <button onMouseDown={this.props.handleMouseDown}
         type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <input className="search" type="text" aria-label="search-text" placeholder={"Search for any location"}
        value={this.state.query}
        onChange={(e) => {this.updateInput(e.target.value)
            this.filterMarkers(e.target.value)
        }}
        ></input>

        {this.state.searchedMarkers.map( marker =>
            <div key={marker.id} className="search-result"
            tabindex= "1"
            onClick={this.props.onSelectPlace}
            >
                <p>{marker.name}</p>
            </div>
        )}


      </div>
    );
  }
}

export default SearchMap;
