import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'

const mapStyles = {
  width: '100%',
  height: '100%'
};

const btnStyle={
  position:'absolute',
    background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',
    bottom:1,


};
class Verifylocation extends Component {

  state={

  }
  redirectToFace = () => {
    const {history}=this.props;
   if(history) history.push("/face")
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
                coords:{
                  lat:latitude,
                  lng:longitude
                }
                  

              }
          )
          })
      }else{
          console.log("Not Available")
      }
  }
  showState(){
    console.log(this.state)
  }
  render() {
    console.log("log state:",this.state)

    return (

      <div>
        <div>
        {
          this.state.coords
          ?
          <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat:this.state.coords.lat,
            lng:this.state.coords.lng,
          }}
        >
          {this.showState()}
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
          :
          ''
        }
        </div>
        <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={btnStyle}
                        size="large"
                        onClick={this.redirectToFace}
                    >
                        Accept location
          </Button>
      </div>
    );
  }
}

export default withRouter(GoogleApiWrapper({
  apiKey: 'AIzaSyBmNgXzm1QV4QEnni5oivpK5HJu_GpwtnE'
})(Verifylocation))
;