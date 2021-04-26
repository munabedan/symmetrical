import React from 'react';
import Appbar from './Appbar';
import Dashcards from './Dashcards';
import Calender from './Calender'
import getIndexData from '../Db/getIndexFromDb';


class Coursepage extends React.Component {

  state = {
    courseData: []
  }

 

  componentDidMount() {
    const { match: { params } } = this.props;
    const { courseId } = params;

    console.log(courseId)
    this.asyncRequest = getIndexData('test', 'coursesstore',courseId).then(
      (externalData) => {
        this._asyncRequest = null;
        this.setState({ courseData : externalData })
      }
    )
  }
  
  
  
  render() {
    

    return (
      < div className="Coursepage" >
          <Appbar courseName={this.state.courseData.courseName} 
          courseId={this.state.courseData.courseId}
          ></Appbar>
          <Dashcards></Dashcards>
          {this.state.courseData.courseAttendance ?
            <Calender attendanceData={this.state.courseData.courseAttendance}
            courseTime={this.state.courseData.courseTime}
            courseDay={this.state.courseData.lectureDay}
            roomNumber={this.state.courseData.roomNumber}
            ></Calender>
          : ''}
          
         
          
      </div >
    )
  }

}

export default Coursepage;
/*
This component functions as the individual course page
*/