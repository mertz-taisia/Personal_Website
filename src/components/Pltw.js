import React from 'react'
import { Helmet } from 'react-helmet';
import './Pltw.css'
import { Link } from 'react-router-dom';

function Pltw() {
  return (
    <div className='jobPage'>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="titleAndIcon">
            <label className='jobPageTitle'>PROJECT LEAD THE WAY</label>
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
                <label className='jobPosition'>ENGINEERING PROGRAM</label>
                <label className='jobPageDate'>September 2014 - May 2021</label>
            </div>
            <ul className='positionDescription'>
                <li>Leading a team of highly skilled engineering students in the development of a cutting-edge,  
                self-automated greenhouse with features including a computerized irrigation system, light 
                regulation, temperature and humidity control, nutrient monitoring and delivery, and remote 
                monitoring and control</li>
                    
                <li>Overseeing the project's development from ideation to launch, managing the project timeline 
                and budget, coordinating with cross-functional teams, ensuring that the team stays on track,  
                making critical decisions that drive the project forward that will, and eventually presenting 
                results to our sponsors, Microsoft and Tesla</li>
            </ul>
        </div>
    </div>
  )
}

export default Pltw