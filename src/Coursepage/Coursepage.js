import React from 'react';
import Appbar from './Appbar/Appbar';
import Dashcards from './Dashcards/Dashcards';
import Calender from './Calender/Calender'
class Coursepage extends React.Component {
  
  state = {

  }

  componentDidMount() {
   
  }
  
  
  render() {
    const { text, match: { params } } = this.props;
    const { name } = params;

    return (
      < div className="Coursepage" >
          <Appbar></Appbar>
          <Dashcards></Dashcards>
          <Calender></Calender>
          {

            //summary card
            //calendar
            //action card

          }
          {text}{name}
      </div >
    )
  }


}

export default Coursepage;
/*
This component functions as the individual course page
*/