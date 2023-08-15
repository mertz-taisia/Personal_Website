import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './USCMakers.css'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';

function USCMakers() {
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='uscMakersPage'>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="titleAndIcon">
            <label className='uscMakerstitlePage'>USC MAKERS</label>
            <Link to="/">
                <button class="Btn" onClick={() => navigate(-1)}>
                    <svg class="arrow" viewBox="0 0 512 512">
                        <path color="black" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" transform="rotate(-90 256 256)"></path>
                    </svg>
                        <p class="text">Return Home</p>
                </button>
            </Link>
        </div>
        <div className="uscMakersdivider"></div>
        <div className='uscMakersPageInner'>    
            <div className='jobInfo'>
                <label className='uscMakersJobTitle'>PROJECT MANAGER</label>
                <label className='uscMakersJobDate'>September 2022 - Present</label>
            </div>
            <div className='bioBotanicSection'>
                <div className='bioBotanicJobInfo'>
                    <label className='bioBotanicSectionTitle'>BIO BOTANIC</label>
                    <label className='bioBotanicSectionDate'>April 2023 - Present</label>
                </div>
                <label className='bioBotanicSectionJobTitle'>PROJECT MANAGER</label>
                <ul className='bioBotanicJobDescription'>
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
            <div className='paperAirplayinSection'>
                <div className='paperAirplayinJobInfo'>
                    <label className='paperAirplayinSectionTitle'>PAPER AIRPLAYIN'</label>
                    <label className='paperAirplayinSectionDate'>September 2022 - May 2023</label>
                </div>
                <label className='paperAirplayinSectionJobTitle'>MECHANICAL ENGINEER</label>
                <ul className='paperAirplayinJobDescription'>
                    <li>Utilized CAD software to design and prototype mechanical components for a lightweight remote control 
                    flight module that offers 3 degrees of motion and a customizable fit, ensuring optimal aerodynamics, 
                    physics, and modularity</li>

                    <li>Employed 3D printing technology to manufacture precise and functional parts, resulting in a successful 
                    proof-of-concept prototype</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default USCMakers