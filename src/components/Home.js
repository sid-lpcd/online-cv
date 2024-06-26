import {React, Component} from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Navbar from './Navbar';

export default class Home extends Component{
    render(){
        return(
            <section>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col s10 m4 l4'>
                            <Profile />
                        </div>
                        <div className='col s12 m8 l8'>
                            <About />
                            <Skills />
                            <Experience />
                            <Education />
                            <Hobbies />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}