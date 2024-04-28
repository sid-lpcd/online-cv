import React, { useEffect } from 'react' 
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
import { useLocation  } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.getElementsByClassName("sidenav-overlay")
    const elements2 = document.getElementsByClassName("drag-target")
    if(elements.length > 1){
      elements[0].parentNode.removeChild(elements[0]);
      elements2[0].parentNode.removeChild(elements2[0]);
    }
    if(location.pathname.substring(1) !== ''){
      document.getElementById(location.pathname.substring(1)).scrollIntoView()
    } else{
      window.scrollTo(0,0)
    }
    
  }, [location.pathname]);

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
