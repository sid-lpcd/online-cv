import {React, Component} from 'react';
import Popup from 'reactjs-popup';
import ContactForm from './ContactForm'

export default class About extends Component{
    render(){
        return(
            <div>
                <div className="card" id='about'>
                    <div className='card-content'>
                        <h6 className='mt bottom'>Who am I?</h6>
                        <p className='grey-text'>
                            Well, not an easy question to answer. 🤷‍♂️ So, let me share with you my passions. <br></br>
                            I'm all about crafting immersive and seamless web experiences that captivate and engage users. With expertise in HTML, CSS, and JavaScript, I transform stunning visuals and ideas into interactive elements that bring websites to life. <br></br>
                            But wait, there's more! I also dabble in the realms of React and Vue.js, leveraging these frameworks to create dynamic and responsive interfaces that leave a lasting impression (starting with this webapp 😉). <br></br>
                            And guess what? I've got some backend skills up my sleeve too, including Python, Java, C, and mySQL, because why stop at just the front end when you can conquer it all? 💪 <br></br>
                            However, I'm not the kind of person to just spend the wholetime sat down in front of a computer. If you wish to meet the real me, then let's go to a volleyball court. 🏐 Volleyball isn't just a game to me—it's a passion that fuels my competitive spirit and keeps me active and energized.
                        </p>
                    </div>
                    <div className='card-action'>
                        <h6>Personal Information</h6>
                        <div className='row mt'>
                            <div className='col s12 m6 l6 xl6'>
                                <p>
                                    <strong>Location:</strong> London, UK
                                </p>
                                <p>
                                    <strong>Contact:</strong> 
                                    <Popup trigger={<a> Complete form here.</a>}>
                                        <ContactForm />
                                    </Popup>
                                </p>
                            </div>
                            <div className='col s12 m6 l6 xl6'>
                                <p>
                                    <strong>Native Language:</strong> Portuguese
                                </p>
                                <p>
                                    <strong>Second Language:</strong> English (Fluent)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}