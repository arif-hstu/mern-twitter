import React from 'react';

import twitterLogo from '../../images/twitter.png'
// import styleSheet
import './Header.css'


const Header = () => {
    return (
        <div className="Header">
            <nav>
                <ul>
                    <li><img src={twitterLogo} alt='logo'></img></li>
                    <li><span>Home</span><span>Icon</span></li>
                    <li>search</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;