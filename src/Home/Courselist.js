import React from 'react';

import '../Db/getAllFromDb.js'
import getAllData from '../Db/getAllFromDb';

import Coursecard from './Coursecard';


class Courselist extends React.Component {
  
  state = {
    courseData: []
  }

  componentDidMount() {
    this.asyncRequest = getAllData('test', 'coursesstore').then(
      (externalData) => {
        this._asyncRequest = null;
        this.setState({ courseData : externalData })
      }
    )
  }
  
 
  render() {
    let cards=[]

    this.state.courseData.forEach(course => {
      cards.push(

        <Coursecard key={course.courseId} 
         courseName={course.courseName}
         courseId={course.courseId}
         leavesLeft="6" 
         absentsIncurred="5"
        >

        </Coursecard>

      )

    });


    return (
      < div className="Classlist" >
        {cards}
      </div >
    )
  }


}

export default Courselist;
