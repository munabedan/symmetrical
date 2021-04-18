import React from 'react';
import './Courselist.css';

import '../Db/getAllFromDb.js'
import getAllData from '../Db/getAllFromDb';
import Coursecard from '../Coursecard/Coursecard.js';

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

        <Coursecard key={course.courseId} course={course}>

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
