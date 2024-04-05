import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, About, Education, Experience, Hobbies, Navbar, Skills} from './components';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path='/about' component={About} />          
          <Route path='/skills' component={Skills} />
          <Route path='/education' component={Education} />
          <Route path='/experience' component={Experience} />
          <Route path='/hobbies' component={Hobbies} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
