import React from 'react';
import './App.css';

import Appbar from './Appbar/Appbar.js'
import Courselist from './Courselist/Courselist.js'

function App() {
  return (
    <div className="App">
     <Appbar></Appbar>
     <Courselist></Courselist>
    </div>
  );
}

export default App;
