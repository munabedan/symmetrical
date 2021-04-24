import React from 'react';
import createDb from './Db/createDb'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Course from './Course/Course';
import Addcourse from './Forms/Addcourse';
import Verifylocation from './Geolocation/Verifylocation';

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
          <Route exact path="/addcourse" component={Addcourse}/>
          <Route exact path="/getlocation" component={Verifylocation}/>
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
