import React from 'react';

// import styleSheet
import './Home.css'

// import components
import CreatePost from '../CreatePost/CreatePost'

const Home = () => {
    return (
        <div className='Home'>
            <div><CreatePost /></div>
        </div>
    );
};

export default Home;