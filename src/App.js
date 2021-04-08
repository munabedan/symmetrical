import React from 'react';
import './App.css';

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
    </div>
  );
}

export default App;
