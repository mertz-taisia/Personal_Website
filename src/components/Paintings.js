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
import venice from '../images/paintings/venice.jpg';
import oranges from '../images/paintings/oranges.jpg';


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
                            <div className='imageContainer'>
                                <img src = {oranges} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Golden Harvest</label>
                            <label className='paintingCardMedium'>Oil on Canvas</label>
                            <label className='paintingCardDescription'>
                                Small oil piece painted one night after missing a flight 
                                depicting a vibrant bowl of fruit.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {wave} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Sea Foam</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                            <label className='paintingCardDescription'>
                                Wave created using non-traditional methods:  
                                diluted acrylic paint is molded by the pull of 
                                gravity and the force of air blown through a straw, 
                                with added nuances achieved by spraying paint creating 
                                additional texture.
                            </label>
                        </div>
                    </div>
                </div>
                <div className='paintingsCenterLeft'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {santorini} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Caldera's Embrace</label>
                            <label className='paintingCardMedium'>Oil of Canvas</label>
                            <label className='paintingCardDescription'>
                                Three-month-long painting capturing the essence 
                                of the picturesque island of Santorini, Greece.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {eveningSky} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Evening Sky</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                            <label className='paintingCardDescription'>
                                Acrylic piece crafted with a limited 
                                palette of four core colors, capturing the 
                                essence of the evening sky.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {lightHouse} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Lighthouse</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                            <label className='paintingCardDescription'>
                                Concise artwork showcasing a lighthouse 
                                standing sentinel on a beach shore.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {bouquet} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Un Petit Bouquet</label>
                            <label className='paintingCardMedium'>Acrylic on Canvas</label>
                            <label className='paintingCardDescription'>
                                A palm-sized acrylic painting capturing 
                                pansy bouquet in full bloom.
                            </label>
                        </div>
                    </div>
                </div>
                <div className='paintingsCenterRight'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {londonRain} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>London Rain</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                            <label className='paintingCardDescription'>
                                Acrylic piece depicting the streets of London, bathed in rain.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {venice} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Venice</label>
                            <label className='paintingCardMedium'>Oil on Canvas</label>
                            <label className='paintingCardDescription'>
                                Large oil painting capturing the mesmerizing canals of Venice, Italy.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {parisMagnolias} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Layover in Paris</label>
                            <label className='paintingCardMedium'>Acrylic on Wood</label>
                            <label className='paintingCardDescription'>
                                Artwork created in homage to my mother, who, 
                                during her immigration to the US, experienced 
                                a brief 5-hour layover in Paris and discovered 
                                the city awash in bloom.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {telephoneWires} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Telephone Wires</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                            <label className='paintingCardDescription'>
                                Acrylic rendering of telephone wires silhouetted against a sunset sky.
                            </label>
                        </div>
                    </div>
                </div>
                <div className='paintingsRight'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {cityStorm} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Stormy Nights</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                            <label className='paintingCardDescription'>
                                Acrylic depiction of a lightning storm illuminating a city at night.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {castle} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Mont Saint-Michel</label>
                            <label className='paintingCardMedium'>Oil on Canvas</label>
                            <label className='paintingCardDescription'>
                                Oil rendering of the Most Saint-Michel made after a visit to Normandy, France.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {flowerTri} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Flower Tri</label>
                            <label className='paintingCardMedium'>Acrylic on Paper</label>
                            <label className='paintingCardDescription'>
                                Triptych acrylic composition showcasing three distinct types of flowers.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {crocodile} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>The Crocodile and the Plover Bird</label>
                            <label className='paintingCardMedium'>Oil on Canvas</label>
                            <label className='paintingCardDescription'>
                                Oil painting illustrating the symbiotic relationship 
                                between the plover bird and the crocodile, a 
                                testament to nature's delicate balance and 
                                unexpected alliances.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Paintings