import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/landing.scss'

function Landing() {
 
    const navigate = useNavigate()

    function homeNav(){
       navigate('/')
    }
    return (
        <div className="landing">
            <div className="content">
               
                <img src="dec.gif" alt="GIF" className="gif" />
            </div>
        <img src = "shine.png" className='shine'></img>
            <button className='land-btn' onClick={homeNav}>
                
                 COMING SOON
               
            </button>
        </div>
    );
}

export default Landing;