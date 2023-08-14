import React from 'react'
import { Helmet } from 'react-helmet';
import './Paintings.css'
import { Link } from 'react-router-dom';
import parisMagnolias from '../images/paintings/paris_magnolias.jpg';
import santorini from '../images/paintings/santorini.jpg';
import londonRain from '../images/paintings/london_rain.jpg';
import cityStorm from '../images/paintings/city_storm.jpg';
import wave from '../images/paintings/wave.jpg';
import eveningSky from '../images/paintings/evening_sky.jpg';
import lightHouse from '../images/paintings/light_house.jpg';
import castle from '../images/paintings/castle.jpg';
import bouquet from '../images/paintings/bouquet.jpg';
import crocodile from '../images/paintings/crocodile.jpg';
import telephoneWires from '../images/paintings/telephone_wires.jpg';
import flowerTri from '../images/paintings/flower_tri.jpg';


function Paintings() {
  return (
    <div className='jobPage'>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="titleAndIcon">
            <label className='jobPageTitle'>PAINTINGS</label>
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
            <div className='paintingContent'>
                <div className='paintingsLeft'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {parisMagnolias} alt = "error"></img>
                            <label className='paintingCardTitle'>Layover in Paris</label>
                            <label className='paintingCardMedium'>Acrylic on Wood</label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {wave} alt = "error"></img>
                            <label className='paintingCardTitle'>Sea Foam</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                        </div>
                    </div>
                </div>
                <div className='paintingsCenterLeft'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {santorini} alt = "error"></img>
                            <label className='paintingCardTitle'>Caldera's Embrace</label>
                            <label className='paintingCardMedium'>Oil of Canvas</label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {eveningSky} alt = "error"></img>
                            <label className='paintingCardTitle'>Evening Sky</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {bouquet} alt = "error"></img>
                            <label className='paintingCardTitle'>Un Petit Bouquet</label>
                            <label className='paintingCardMedium'>Acrylic on Canvas</label>
                        </div>
                    </div>
                </div>
                <div className='paintingsCenterRight'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {londonRain} alt = "error"></img>
                            <label className='paintingCardTitle'>London Rain</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {lightHouse} alt = "error"></img>
                            <label className='paintingCardTitle'>Lighthouse</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {crocodile} alt = "error"></img>
                            <label className='paintingCardTitle'>Lighthouse</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {telephoneWires} alt = "error"></img>
                            <label className='paintingCardTitle'>Telephone Wires</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                        </div>
                    </div>
                </div>
                <div className='paintingsRight'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {cityStorm} alt = "error"></img>
                            <label className='paintingCardTitle'>Stormy Nights</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {castle} alt = "error"></img>
                            <label className='paintingCardTitle'>French Castle</label>
                            <label className='paintingCardMedium'>Oil on Canvas</label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <img src = {flowerTri} alt = "error"></img>
                            <label className='paintingCardTitle'>Flower Tri</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Paintings