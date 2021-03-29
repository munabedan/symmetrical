import React from 'react';
import './Courselist.css';

import '../Db/getAllFromDb.js'
//import getAllFromDb from '../Db/getAllFromDb.js';


const courselist=()=>{
  return (
    <div className="Courselist">
      
                <h6>Am the list</h6>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
          

        {/*
          getAllFromDb().then((result)=>{
            for(var i=0; i<result.length; i++){
              console.log(result[i].courseName)
            }
          })*/
        }
    </div>
  );
}

export default courselist;
