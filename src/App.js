import React from 'react';
import createDb from './Db/createDb'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Course from './Course/Course';
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
            path="/:courseId"
            render={props => <Course {...props} />}
          />
        </Switch>
      </Router>




    </div>
  );
}

export default App;
