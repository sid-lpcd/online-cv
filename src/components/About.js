import {React, Component} from 'react';
import Popup from 'reactjs-popup';
import ContactForm from './ContactForm'

export default class About extends Component{
    render(){
        return(
            <div>
                <div className="card">
                    <div className='card-content'>
                        <h6 className='mt bottom'>About me</h6>
                        <p className='grey-text'>Motivated young professional in the tech industry, seeking a driven and collaborative team, fostering a culture of high-quality project delivery.</p>
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