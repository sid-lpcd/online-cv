import {React, Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link'
import M from 'materialize-css/dist/js/materialize.min.js';
import "materialize-css/dist/css/materialize.min.css";
import CvPDF from '../files/SidonioSilva_CV_2024.pdf'

class Navbar extends Component{
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render(){
        return(
            <>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className='nav-wrapper'>
                            <Link to="/" className='brand-logo'>
                                CV
                            </Link>
                            <Link to="/" data-target="side-nav" className='sidenav-trigger'>
                                <i className='material-icons'>menu</i>
                            </Link>
                            <ul className='right hide-on-med-and-down'>
                                <li>
                                    <Link to="/">
                                        <i className='fas fa-home'></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        <i className='fas fa-address-card'></i> About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/experience">
                                        <i className='fas fa-id-badge'></i> Experiences
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/education">
                                        <i className='fas fa-graduation-cap'></i> Educations
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/hobbies">
                                        <i className='fas fa-podcast'></i> Hobbies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/skills">
                                        <i className='fas fa-copy'></i> Skills
                                    </Link>
                                </li>
                            </ul>
                            <a href={CvPDF} download="Sidonio Silva CV" target='_blank' className="face-button right">
                                <div class="face-primary">
                                    <span class="icon fa fa-cloud"></span>
                                    <p>Download CV</p>
                                </div>
                                <div class="face-secondary">
                                    <span class="icon fa fa-hdd-o"></span>
                                    Size: 84KB
                                </div>
                            </a>
                        </div>     
                    </div> 
                </nav>
                <ul className='sidenav' id='side-nav'>
                    <li>
                        <Link to="/">
                            <i className='fas fa-home'></i> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <i className='fas fa-address-card'></i> About
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience">
                            <i className='fas fa-id-badge'></i> Experiences
                        </Link>
                    </li>
                    <li>
                        <Link to="/education">
                            <i className='fas fa-graduation-cap'></i> Educations
                        </Link>
                    </li>
                    <li>
                        <Link to="/hobbies">
                            <i className='fas fa-podcast'></i> Hobbies
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills">
                            <i className='fas fa-copy'></i> Skills
                        </Link>
                    </li>
                </ul>
            </>
        )
    }
}

export default Navbar;