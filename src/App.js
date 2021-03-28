import React from 'react';
import './App.css';

import Appbar from './Appbar/Appbar.js'
//import Courselist from './Courselist/Courselist.js'
import createDb from './Db/createDb.js'
function App() {
  return (
    <div className="App">
      {
        createDb()
      }
     <Appbar></Appbar>
    </div>
  );
}

export default App;
