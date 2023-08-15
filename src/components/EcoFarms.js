import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './EcoFarms.css'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';

function EcoFarms() {
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='jobPage'>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="titleAndIcon">
            <label className='jobPageTitle'>1000 ECOFARMS</label>
            <button class="Btn" onClick={() => navigate(-1)}>
                <svg class="arrow" viewBox="0 0 512 512">
                    <path color="black" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" transform="rotate(-90 256 256)"></path>
                </svg>
                    <p class="text">Return Home</p>
            </button>
            </div>
        <div className="jobDivider"></div>
        <div className='pltwPageInner'>
            <div className='jobInfo'>
                <label className='jobPosition'>WEB DEVELOPER</label>
                <label className='jobPageDate'>March 2020 - April 2021</label>
            </div>
            <ul className='positionDescription'>
                <li>
                    Optimized the content flow of the mobile site, resulting in a more user-friendly and engaging experience for visitors.
                </li>
                <li>
                    Simulated and analyzed website usability from both customer and seller perspectives, identifying areas for improvement to enhance the user experience.
                    This comprehensive evaluation facilitated the identification and rectification of potential bottlenecks, paving the way for a more seamless interaction.
                </li>
            </ul>
        </div>
    </div>
  )
}

export default EcoFarms