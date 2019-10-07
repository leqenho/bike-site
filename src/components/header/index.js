import React from 'react';

import logo from '../../assets/images/logo.png';
import toggle from '../../assets/images/toggle.svg';

function toggleBg() {
    var toggler = document.querySelector('#toggler');

    toggler.classList.toggle('bg-custom');
}

const Header = () => (
    <header className="app-header">
        <nav id="toggler" className="navbar navbar-expand-sm">
            <img className="logo logo-mobile d-sm-none" src={logo} alt="Bike Logo" />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggle-menu" aria-controls="toggle-menu" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleBg}>
                <img src={toggle} alt="Toggle icon" />
            </button>

            <div className="collapse navbar-collapse" id="toggle-menu">
                <ul className="navbar-nav mx-sm-auto justify-content-sm-center align-items-sm-center">
                    <li className="nav-item">
                        <span className="nav-link">About Us</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">Work</span>
                    </li>
                    <li className="nav-item d-none d-sm-block">
                        <img className="logo mx-4" src={logo} alt="Bike Logo" />
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">Shop</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">Contact</span>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;
