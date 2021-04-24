import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '50%'
};

class Verifylocation extends Component {
  state={

  }
  componentWillMount(){
      if ("geolocation" in navigator){
          console.log("Available")
          navigator.geolocation.getCurrentPosition((position)=>{
          console.log("lat:",position.coords.latitude)    
          console.log("lon",position.coords.longitude)
            let latitude=parseFloat(position.coords.latitude);
            let longitude=parseFloat(position.coords.longitude);
          this.setState(
              {
                  latitude:latitude,
                  longitude:longitude

              }
          )
          })
      }else{
          console.log("Not Available")
      }
  }
  
  render() {
    console.log("log state:",this.state.longitude)

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat:+this.state.latitude,
            lng:+this.state.longitude
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBmNgXzm1QV4QEnni5oivpK5HJu_GpwtnE'
})(Verifylocation);