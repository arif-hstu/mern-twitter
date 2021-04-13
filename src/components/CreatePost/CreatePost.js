import React from 'react';

// import styleSheet
import './CreatePost.css'

import profile from '../../images/profileDark.png'
import iconSet from '../../images/createicons.png'

const CreatePost = () => {
    return (
        <div className='CreatePost'>
            <div className="imgHolder">
                <img src={profile} alt="Profile" />
            </div>
            <input type="text" name="" id="" placeholder="What's happenning" />
            <img src={iconSet} alt="Icons" />
            <div className="button"><button>Tweet</button></div>
        </div>
    );
};

export default CreatePost;