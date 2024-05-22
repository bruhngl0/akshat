import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/landing.scss'

function Landing() {
    return (
        <div className="landing">
            <div className="content">
               
                <img src="lol.gif" alt="GIF" className="gif" />
            </div>
        <img src = "shine.png" className='shine'></img>
            <button className='land-btn'>
                <Link to = "/" className='webshop'>
                 COMING SOON
                </Link>
            </button>
        </div>
    );
}

export default Landing;