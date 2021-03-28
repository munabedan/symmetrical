import React from 'react';
import './Courselist.css';

import '../Db/getAllFromDb.js'
import getAllFromDb from '../Db/getAllFromDb.js';


function Courselist() {
  return (
    <div className="Courselist">
        {
          getAllFromDb().then((result)=>{
            for(var i=0; i<result.length; i++){
              console.log(result[i].courseName)
            }
          })
        }
    </div>
  );
}

export default Courselist;
