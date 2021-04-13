import React from 'react';

// import styleSheet
import './LeftSideBar.css'

// import images
import home from '../../images/home.png'

const LeftSideBar = () => {
    return (
        <div className='LeftSideBar'>
            <div>
                <img src={home} alt="Home"/>
                <h3>Home</h3>
            </div>
            <div>
                <img src={home} alt="Explore"/>
                <h3>Explore</h3>
            </div>
            <div>
                <img src={home} alt="Notifications"/>
                <h3>Notifications</h3>
            </div>
            <div>
                <img src={home} alt="Messages"/>
                <h3>Messages</h3>
            </div>
            <div>
                <img src={home} alt="Bookmarks"/>
                <h3>Bookmarks</h3>
            </div>
            <div>
                <img src={home} alt="Lists"/>
                <h3>Lists</h3>
            </div>
            <div>
                <img src={home} alt="Profile"/>
                <h3>Profile</h3>
            </div>
            <div>
                <img src={home} alt="More"/>
                <h3>More</h3>
            </div>
        </div>
    );
};

export default LeftSideBar;