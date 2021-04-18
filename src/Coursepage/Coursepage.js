import React from 'react';
import Appbar from './Appbar/Appbar';

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
          {text}{name}
      </div >
    )
  }


}

export default Coursepage;
/*
This component functions as the individual course page
*/