import {React, Component} from 'react';
import ImgProfile from '../images/Profile.jpg';
import { HashLink as Link } from 'react-router-hash-link';


export default class Profile extends Component{
    render(){
        return(
            <div className='card'>
                <div className='card-image'>
                    <img className='activator' src={ImgProfile} alt='Sidonio Miguel Silva' />
                    <Link className='btn-floating halfway-fab waves-effect wave-light red'>
                        <i className='material-icons activator'>more_vert</i>
                    </Link>
                </div>
                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>Sidonio Miguel Silva</span>
                    <p>Front-End Web Developer</p>
                </div>
                <div className='card-reveal'>
                    <span className='card-title grey-text text-darken-4'>
                        Follow me
                        <i className='material-icons right'>close</i>
                        <p className='flex-container'>
                            <i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i>
                            <i className='fab fa-instagram grey-text text-darken-4 social-style'></i>
                            <i className='fab fa-linkedin-in grey-text text-darken-4 social-style'></i>
                        </p>
                    </span>
                </div>
            </div>
        )
    }
}