import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Paintings.css'
import { Link } from 'react-router-dom';
import butterflies from '../images/mixedMedia/butterflies.jpg';
import beehive from '../images/mixedMedia/beehive.jpg';
import moth from '../images/mixedMedia/moth.jpg';
import seahorse from '../images/mixedMedia/seahorse.jpg';
import plants from '../images/mixedMedia/plants.jpg';
import bugs from '../images/mixedMedia/bugs.jpg';
import keyHooks from '../images/mixedMedia/key_hooks.jpg';


function MixedMedia() {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='jobPage'>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="titleAndIcon">
            <label className='jobPageTitle'>MIXED MEDIA</label>
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
                                <img src = {butterflies} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Flight</label>
                            <label className='paintingCardMedium'>Mixed Media</label>
                            <label className='paintingCardDescription'>
                                A sculpture showcasing a swarm of handmade paper 
                                butterflies gracefully taking from a branch.
                            </label>
                        </div>
                    </div>
                </div>
                <div className='paintingsCenterLeft'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {beehive} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Beehive</label>
                            <label className='paintingCardMedium'>Mixed Media</label>
                            <label className='paintingCardDescription'>
                                A beehive design blending flat and three-dimensional elements.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {plants} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Mezen Design</label>
                            <label className='paintingCardMedium'>Mixed Media</label>
                            <label className='paintingCardDescription'>
                                Replica of the traditional Mezen style, employing classic 
                                black, red, and yellow hues, enriched with gold-infused paint.
                            </label>
                        </div>
                    </div>
                </div>
                <div className='paintingsCenterRight'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {moth} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Antheraea polyphemus</label>
                            <label className='paintingCardMedium'>Mixed Media</label>
                            <label className='paintingCardDescription'>
                                Handcrafted imitation of the Antheraea polyphemus moth.
                            </label>
                        </div>
                    </div>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {bugs} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Bug's Life</label>
                            <label className='paintingCardMedium'>Mixed Media</label>
                            <label className='paintingCardDescription'>
                                A bug's-eye view of the world created blending flat and three-dimensional elements.                                
                            </label>
                        </div>
                    </div>
                </div>
                <div className='paintingsRight'>
                    <div className='paintingCard'>
                        <div className='paintingCardInner'>
                            <div className='imageContainer'>
                                <img src = {seahorse} alt = "error"></img>
                            </div>
                            <label className='paintingCardTitle'>Seahorse</label>
                            <label className='paintingCardMedium'>Paper Mache</label>
                            <label className='paintingCardDescription'>
                                Seahorse replica created using paper mache.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MixedMedia