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
    this.asyncRequest = getIndexData('test', 'coursesstore', courseId).then(
      (externalData) => {
        this._asyncRequest = null;
        this.setState({ courseData: externalData })
        console.log(this.state)

      }
    )
  }



  render() {
    let Left=5;
    let Incurred=0;
    let Total=1;
    return (
      < div className="Coursepage" >
        <Appbar courseName={this.state.courseData.courseName}
          courseId={this.state.courseData.courseId}
        ></Appbar>
        {this.state.courseData.courseAttendance ?
          <div> <Dashcards
          totalClasses={Total.toString().padStart('2','0')}
          leavesLeft={Left.toString().padStart('2','0')}
         absentsIncurred={Incurred.toString().padStart('2','0')}
            attendanceData={this.state.courseData.courseAttendance}
          ></Dashcards>

            <Calender attendanceData={this.state.courseData.courseAttendance}
              courseTime={this.state.courseData.courseTime}
              courseDay={this.state.courseData.lectureDay}
              roomNumber={this.state.courseData.roomNumber}
              courseCode={this.state.courseData.courseId}
            ></Calender></div>

          : ''}



      </div >
    )
  }

}

export default Coursepage;
/*
This component functions as the individual course page
*/