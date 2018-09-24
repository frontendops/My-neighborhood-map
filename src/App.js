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
                  'long': -82.355426,
                  'venue': "509bf15ee4b0397ad759813f"
              },
              {
                  'id': 2,
                  'type': "Public Center",
                  'name': "Grace Church",
                  'lat': 34.898554,
                  'long': -82.340463,
                  'venue': "5b9addfa60255e002c6464ce"
              },
              {
                  'id': 3,
                  'type': "Store",
                  'name': "Vietnamese Shop",
                  'lat': 34.917779,
                  'long': -82.318189,
                  'venue': "4bfac2291134b7133c820fc9"
              },
              {
                  'id': 4,
                  'type': "Store",
                  'name': "Shopping center",
                  'lat': 34.937425,
                  'long': -82.278508,
                  'venue': "4f259419e4b063d401b1c532"
              },
              {
                  'id': 5,
                  'type': "Park",
                  'name': "Soccer Field",
                  'lat': 34.883428,
                  'long': -82.306161,
                  'venue': "4cb1faaadb32f04d4486cc4d"
              },
              {
                  'id': 6,
                  'type': "Park",
                  'name': "Paris Mountain",
                  'lat': 34.941150,
                  'long': -82.391217,
                  'venue': "4b7ed559f964a520e40230e3"
              },
              {
                  'id': 7,
                  'type': "Park",
                  'name': "Falls Park",
                  'lat': 34.844564,
                  'long': -82.401244,
                  'venue': "4b625ff4f964a520eb442ae3"
              },
              {
                  'id': 8,
                  'type': "Public Center",
                  'name': "Taylors Library",
                  'lat': 34.920183,
                  'long': -82.308262,
                  'venue': "4b5e2f70f964a5206d8229e3"
              },
              {
                  'id': 9,
                  'type': "Public Center",
                  'name': "Greenville Airport",
                  'lat': 34.895945,
                  'long': -82.217234,
                  'venue': "4b4c61c2f964a520fbb126e3"
              },

          ],
        visible: false,
        selectedPlace: {},
        data: {},
        isLoaded: false


      };

      this.toggleMenu = this.toggleMenu.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.renderMarkers = this.renderMarkers.bind(this);
      this.onMarkerClick = this.onMarkerClick.bind(this);
      this.renderMarkerInfo = this.renderMarkerInfo.bind(this);
    }

    componentDidMount () {
            this.setState({
                markers: [...this.state.defaultMarkers]
            })
    }


//handles the click on the purple button
    handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

//shows the search menu
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
//when a marker is clicked it fetches the data from foursquare api and displays
    onMarkerClick = (e) => {
        let selectedPlace = this.state.markers.find(marker =>
        marker.name === e.name)
       this.setState({
         selectedPlace
       })
    this.fetchData();
    }

//when a list item is clicked it fetches data
    onSelectPlace = (e) => {
        let selectedPlace = this.state.markers.find(marker =>
            marker.name === e.target.textContent
        );
        this.setState({
            selectedPlace
        })
        this.fetchData();
        this.renderMarkerInfo();
    }

// handles any fetched data error
    renderMarkerInfo = () => {
        if(this.state.isLoaded) {
            if (this.state.data.response.name) {
          return (<h4>{this.state.data.response.venue}</h4>);
      } else {
          return (<h4>quota has been exceeded</h4>);
      }
    } else {
        return (<h4>Waiting to load info</h4>);
    }
}

// each time an item is clicked on it passes the venue id into the fetch url and gets venue info from foursquare api
fetchData = () => {
    fetch(`https://api.foursquare.com/v2/venues/${this.state.selectedPlace.venue}?client_id=EMSPZJIP3VLPKBSRBMBOMMDNMFV3VV04LH4QCDWICUNX5VJG&client_secret=4Q4MUBH5OKTC1TSLUXVX4ZZKF5KOS2HHUMJSJLFVEDOSXLBB&v=20130815&ll=34.883160,-82.355426&limit=1`)
    .then( (response) => response.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            data: json
        })
    })
}

 render() {
    return (
        // rendering the full app
      <div className="App">

        <div className="main-site"
        role="application"
        >

              <div className="heading"
              role="heading"
              >
                <h1>My Neighboorhood Map</h1>

              </div>
        {/*passing state to the MyMap component */}
              <MyMap markers={this.state.markers}
              onMarkerClick={this.onMarkerClick}
              selectedPlace={this.state.selectedPlace}
              />

              <MenuButton handleMouseDown={this.handleMouseDown} aria-label="Open" />
        {/* this is the infow window on the bottom right uses selectedPlace to render */}
              <div className="marker-info" role="article" >
                <h1>{this.state.selectedPlace.name}</h1>
                <h3>{this.state.selectedPlace.type}</h3>
                { this.renderMarkerInfo() }
              </div>

        </div>
        {/* passing state to SearchMap component */}
        <SearchMap handleMouseDown={this.handleMouseDown}
         menuVisibility={this.state.visible}
         markers={this.state.defaultMarkers}
         renderMarkers={this.renderMarkers}
         onMarkerClick={this.onMarkerClick}
         selected={this.state.selectedPlace}
         onSelectPlace={this.onSelectPlace}

         />



      </div>
    );
  }
}

export default App;
