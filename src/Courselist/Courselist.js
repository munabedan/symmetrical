import React from 'react';
import './Courselist.css';

import '../Db/getAllFromDb.js'
import getAllData from '../Db/getAllFromDb';


function Courselist() {




  return (
    <div className="Courselist">
      {
        console.log(getAllData('test', 'coursesstore'))
      }
    </div>
  );


}

export default Courselist;
