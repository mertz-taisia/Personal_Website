import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Pltw.css'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';

function Pltw() {
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
            <label className='jobPageTitle'>PROJECT LEAD THE WAY</label>
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
                <label className='jobPosition'>ENGINEERING PROGRAM</label>
                <label className='jobPageDate'>September 2014 - May 2021</label>
            </div>
            <ul className='positionDescription'>
                <li>
                    Completed a rigorous seven-year integrated engineering program offering comprehensive 
                    education and practical professional exposure across diverse engineering disciplines. 
                    The curriculum covered Civil, Electrical, Mechanical, and Aerospace Engineering.
                </li>
                <li>
                    Had the opportunity to work on various hands-on projects from ideation to launch including 
                    the creation of energy and water efficient washing machine and a device simulating oil spill
                    clean up.
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Pltw