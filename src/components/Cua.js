import React from 'react'
import { Helmet } from 'react-helmet';
import './Cua.css'
import { Link } from 'react-router-dom';

function Cua() {
  return (
    <div className='jobPage'>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="titleAndIcon">
            <label className='jobPageTitle'>CATHOLIC UNIVERSITY OF AMERICA</label>
            <Link to="/">
                <button class="Btn">
                    <svg class="arrow" viewBox="0 0 512 512">
                        <path color="black" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" transform="rotate(-90 256 256)"></path>
                    </svg>
                        <p class="text">Return Home</p>
                    </button>
                </Link>
            </div>
        <div className="jobDivider"></div>
        <div className='pltwPageInner'>
            <div className='jobInfo'>
                <label className='jobPosition'>MECHANICAL ENGINEER</label>
                <label className='jobPageDate'>July 2019 - August 2019</label>
            </div>
            <ul className='positionDescription'>
                <li>content</li>
            </ul>
        </div>
    </div>
  )
}

export default Cua