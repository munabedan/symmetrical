import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'
import getIndexData from '../Db/getIndexFromDb';
import updateRecordIndexFromDb from '../Db/updateRecordIndexFromDb';
import moment from 'moment-timezone';


const mapStyles = {
  width: '100%',
  height: '100%'
};

const btnStyle = {
  position: 'absolute',
  background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',
  bottom: 1,


};
class Verifylocation extends Component {

  state = {

  }
  constructor(props) {
    super(props);
    this.updateRecords = this.updateRecords.bind(this);
  } 
  redirectToCourse = () => {

    const { history } = this.props;
    if (history) history.push('/')

  }
  updateRecords() {
    const { match: { params } } = this.props;
    const { courseId } = params;
    let timeNow=moment().toISOString()
    console.log(this.state.coords)
    console.log(this.state.courseData)
    let location=this.state.coords

    let courseData=this.state.courseData
    courseData.courseAttendance.push(
      {
        date:timeNow,
        location:location,
      }
    )
    console.log(courseData)
    console.log(courseId)
    //updateRecordIndexFromDb('test', 'coursesstore',courseId)


  }
  componentDidMount() {
    const { match: { params } } = this.props;
    const { courseId } = params;
    console.log("verify:" + courseId)

    this.asyncRequest = getIndexData('test', 'coursesstore', courseId).then(
      (externalData) => {
        this._asyncRequest = null;
        this.setState({ courseData: externalData }, this.showState)
        console.log(this.state)

      }
    )
  }


  componentWillMount() {




    if ("geolocation" in navigator) {
      console.log("Available")
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("lat:", position.coords.latitude)
        console.log("lon", position.coords.longitude)
        let latitude = parseFloat(position.coords.latitude);
        let longitude = parseFloat(position.coords.longitude);
        this.setState(
          {
            coords: {
              lat: latitude,
              lng: longitude
            }


          }
        )
      })
    } else {
      console.log("Not Available")
    }
  }
  showState() {
    console.log(this.state)
  }
  render() {
    console.log("log state:", this.state)

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
                  lat: this.state.coords.lat,
                  lng: this.state.coords.lng,
                }}
              >

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
          onClick={this.updateRecords}
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