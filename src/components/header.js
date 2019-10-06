import React from 'react';
import './header.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class Header extends React.Component {
    render() {

        return (

            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="collapse navbar-collapse header" id="navbarNavDropdown">
                        <ul className="navbar-nav ulfloat">
                            <li className="nav-item nav">
                                <a className="nav-link" href="/">Home </a>
                            </li>&nbsp;&nbsp;&nbsp;
                            <li className="nav-item nav">
                                <Link to="/login" className="nav-link">Login</Link>

                            </li>&nbsp;&nbsp;&nbsp;
                            <li className="nav-item nav">
                                <a className="nav-link" href="/signup">Signup</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div >


        );
    }
}

export default Header;