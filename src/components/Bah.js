import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Bah.css'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';

function Bah() {
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
            <label className='jobPageTitle'>BOOZ ALLEN HAMILTON</label>
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
                <label className='jobPosition'>SOFTWARE ENGINEER</label>
                <label className='jobPageDate'>June 2023 - August 2023</label>
            </div>
            <ul className='positionDescription'>
                <li>
                    Developed and maintained scalable publication tracking algorithm successfully flagging thousands of unreported publications for the NIDDK Central Repository team. 
                    This tool enabled the creation of a secondary research tool and enhance the repository's data accuracy.  
                </li>
                <li>
                    Collaborated with cross-functional teams, including product managers, designers, and software engineers, to gather project goals, clarify requirements, and ensure the timely delivery of software products
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Bah