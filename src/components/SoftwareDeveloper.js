import React from 'react'
import './SoftwareDeveloper.css'
import budgetTrackerIcon from '../images/budget_tracker_icon.png';
import hysteresisCalculatorIcon from '../images/hysteresis_calculator_icon.jpg';

// budget_tracker_icon.png

function SoftwareDeveloper() {
  return (
    <div className='softwareDeveloperOuput'>
      <hr className='divider' />

      <div className='budgetTrackerSelection'>
        <div className='selectionInner'>
          <img className='budgetTrackerIcon' src={budgetTrackerIcon}></img>
          <div className='projectInfoContainer'>
            <label className='selectionTitleContainer'>Budget Tracker</label>
            <p className='selectionDecriptionContainer'>Visually captivating application developed using the MERN stack and intuitive data visualization tools</p>
          </div>  
        </div>
      </div>

      <div className='hyteresisCalculatorSelection'>
        <div className='selectionInner'>
          <img className='hyteresisCalculatorIcon' src={hysteresisCalculatorIcon}></img>
          <div className='projectInfoContainer'>
            <label className='selectionTitleContainer'>Hyteresis Calculator</label>
            <p className='selectionDecriptionContainer'>Open source commision work written for the NICHD/DIR Section on Molecular Transport that performs the mathematical analysis of hysteresis behavior detected in voltage gating of large beta-barrel transmembrane ion channels</p>
          </div>  
        </div>      
      </div>

      <div className='placeholderSelection'>
        <div className='selectionInner'>
          <img className='hyteresisCalculatorIcon' src={hysteresisCalculatorIcon}></img>
          <div className='projectInfoContainer'>
            <label className='selectionTitleContainer'>Hyteresis Calculator</label>
            <p className='selectionDecriptionContainer'>Open source commision work written for the NICHD/DIR Section on Molecular Transport that performs the mathematical analysis of hysteresis behavior detected in voltage gating of large beta-barrel transmembrane ion channels</p>
          </div>  
        </div>
      </div>
      
    </div>
  )
}

export default SoftwareDeveloper