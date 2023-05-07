import React from 'react'
import logo from '../images/logo.svg';
import NavbarLinks from './NavbarLinks';
import navbarlinks from '../data/navbarlinks';
import NavbarSocial from './NavbarSocial';
import navbarsocial from '../data/navbarsocial';
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <ul className="nav-links" id="nav-links">
                        {
                            navbarlinks.map((navbarlink) => {
                                return (
                                    <NavbarLinks {...navbarlink} id={navbarlink.id} />
                                )
                            })
                        }
                    </ul>

                    <ul className="nav-icons">
                        {
                            navbarsocial.map((social) => {
                                return (
                                    <NavbarSocial {...social} id={social.id} />
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
