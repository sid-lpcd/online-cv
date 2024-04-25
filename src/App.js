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
import GeneralTemplate from './components/GeneralTemplate';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path='/about' element={<GeneralTemplate data={<About/>} />}  />          
          <Route path='/skills' element={<GeneralTemplate data={<Skills/>} />} />
          <Route path='/education' element={<GeneralTemplate data={<Education/>} />} />
          <Route path='/experience' element={<GeneralTemplate data={<Experience/>} />} />
          <Route path='/hobbies' element={<GeneralTemplate data={<Hobbies/>} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
