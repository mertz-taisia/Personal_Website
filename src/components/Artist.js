import React from 'react'
import './Artist.css'
import paintingIcon from '../images/painting_icon.png';
import sculpturesIcon from '../images/sculptures_icon.png';
import mixedMediaIcon from '../images/mixed_media_icon.png';

function Artist() {
  return (
    <div className='artistOuput'>
      <hr className='divider' />

      <div className='paintingSelection'>
        <div className='selectionInner'>
          <img className='paintingIcon' src={paintingIcon}></img>
          <div className='projectInfoContainer'>
            <label className='selectionTitleContainer'>PAINTING</label>
            <p className='selectionDecriptionContainer'>Something about acrylic and oil painting</p>
          </div>   
        </div>
      </div>

      <div className='sculpturesSelection'>
        <div className='selectionInner'>
          <img className='sculpturesIcon' src={sculpturesIcon}></img>
          <div className='projectInfoContainer'>
            <label className='selectionTitleContainer'>SCULPTURES</label>
            <p className='selectionDecriptionContainer'>Something about sculptures</p>
          </div>  
        </div>      
      </div>

      <div className='mixedMediaSelection'>
        <div className='selectionInner'>
          <img className='mixedMediaIcon' src={mixedMediaIcon}></img>
          <div className='projectInfoContainer'>
            <label className='selectionTitleContainer'>MIXED MEDIA</label>
            <p className='selectionDecriptionContainer'>This is a placeholder project</p>
          </div>  
        </div>      
      </div>
      
    </div>
  )
}

export default Artist