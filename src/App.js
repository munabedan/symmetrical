import React from 'react';
import './App.css';
import Lecture from './Homepage/Lecture.js';


import Appbar from './Appbar/Appbar.js'
import createDb from './Db/createDb.js'
import Fab from './Fab/Fab.js';
function App() {
  return (
    <div className="App">
      {
        //create a database crateDb(dbName,storeName,keyName)
        createDb("test","coursesstore","courseId")
      }
     <Appbar></Appbar>
     <Fab></Fab>

   
    <Lecture lectureName="economics of money" lectureCode="econ201" leavesLeft="06" absentsIncurred="05" ></Lecture>
     <Lecture lectureName="economics of money" lectureCode="econ201" leavesLeft="06" absentsIncurred="05" ></Lecture>
    </div>
  );
}

export default App;
