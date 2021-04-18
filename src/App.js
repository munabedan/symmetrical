import React from 'react';
import Appbar from './Appbar/Appbar';
import createDb from './Db/createDb'
import Fab from './Fab/Fab';

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
