import {React, Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link'
import M from 'materialize-css/dist/js/materialize.min.js';
import "materialize-css/dist/css/materialize.min.css";

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
                <div className='navbar-fixed'>
                    <nav className="light-blue darken-4">
                        <div className="container">
                            <div className='nav-wrapper'>
                                <Link to="/" className='brand-logo'>
                                    CV
                                </Link>
                                <Link data-target="side-nav" className='sidenav-trigger'>
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
                            </div>     
                        </div> 
                    </nav>
                </div>
                <ul className='sidenav' id='side-nav'>
                    <li>
                        <Link to="/" className="sidenav-close">
                            <i className='fas fa-home'></i> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="sidenav-close" scroll={true}>
                            <i className='fas fa-address-card'></i> About
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" className="sidenav-close" scroll={true}>
                            <i className='fas fa-id-badge'></i> Experiences
                        </Link>
                    </li>
                    <li>
                        <Link to="/education" className="sidenav-close" scroll={true}>
                            <i className='fas fa-graduation-cap'></i> Educations
                        </Link>
                    </li>
                    <li>
                        <Link to="/hobbies" className="sidenav-close" scroll={true}>
                            <i className='fas fa-podcast'></i> Hobbies
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills" className="sidenav-close" scroll={true}>
                            <i className='fas fa-copy'></i> Skills
                        </Link>
                    </li>
                </ul>
            
            </>
        )
    }
}

export default Navbar;