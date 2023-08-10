import React from 'react'
import './USCMakers.css'

function USCMakers() {
  return (
    <div className='uscMakersPage'>
        <div className='uscMakersPageInner'>
            <label className='uscMakerstitlePage'>USC MAKERS</label>
            <div className="uscMakersdivider"></div>
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