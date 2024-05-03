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
import { useState } from 'react';

function App() {
  const location = useLocation();
  const [style, setStyle] = useState({ animation: 'enter-animation 1s 1' })
  const [isVisible, setIsVisible] = useState(false);

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

    /*
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    */
    
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
