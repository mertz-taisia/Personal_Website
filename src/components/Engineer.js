import React from 'react'
import './Engineer.css'
import uscMakersIcon from '../images/usc_makers_icon.png';
import pltwIcon from '../images/pltw_icon.png';
import { Link } from 'react-router-dom';

function Engineer() {
  return (
    <div className='engineerOuput'>
      <hr className='divider' />
      <Link to="/uscmakers" className='uscMakersSelection'>
        <div className='selectionInner'>
          <img className='uscMakersIcon' src={uscMakersIcon}></img>
          <div className='projectInfoContainer'>
            <label className='selectionTitleContainer'>USC Makers</label>
            <p className='selectionDecriptionContainer'>Student run engineering organization aimed facilitate the exploration of concepts in electronics design and stimulate interest in fields of electronics such as the Internet of Things, Embedded Systems, and Robotics.</p>
          </div>   
        </div>
      </Link>
      <Link to="/pltw" className='pltwSelection'>
        <div className='selectionInner'>
          <img className='pltwIcon' src={pltwIcon}></img>
          <div className='projectInfoContainer'>
            <label className='selectionTitleContainer'>Project Lead The Way (PLTW)</label>
            <p className='selectionDecriptionContainer'>Student run engineering organization aimed facilitate the exploration of concepts in electronics design and stimulate interest in fields of electronics such as the Internet of Things, Embedded Systems, and Robotics.</p>
          </div>  
        </div>      
      </Link>
    </div>
  )
}

export default Engineer