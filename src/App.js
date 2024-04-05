import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Education from './components/Education';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path='/about' component={About} />          
          <Route path='/skills' component={Skills} />
          <Route path='/education' component={Education} />
          <Route path='/experience' component={Experience} />
          <Route path='/hobbies' component={Hobbies} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
