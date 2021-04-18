import React from 'react';
import createDb from './Db/createDb'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Homepage/Home';
import Coursepage from './Coursepage/Coursepage';
function App() {
  return (
    <div className="App">
      {
        //create a database crateDb(dbName,storeName,keyName)
        createDb("test", "coursesstore", "courseId")
      }
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/course/:name"
            render={props => <Coursepage text="Hello, " {...props} />}
          />
        </Switch>
      </Router>




    </div>
  );
}

export default App;
