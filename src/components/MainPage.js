import React, { useState } from 'react';
import './MainPage.css';
import SoftwareDeveloper from './SoftwareDeveloper'; 
import Engineer from './Engineer';
import Artist from './Artist';
import techBackground from '../images/tech_background.PNG';
import headshot from '../images/professional_headshot_cutout.PNG';
import emailIcon from '../images/email_icon.png';
import githubIcon from '../images/github_icon.png';
import linkedinIcon from '../images/linkedin_icon.png';
import resumeIcon from '../images/resume_icon.jpg';
import resume from '../Taisia Mertz Resume.pdf';
import cuaIcon from '../images/cua_icon.png';
import ecoFarmsIcon from '../images/eco_farms_icon.jpg';
import uscMakersJobIcon from '../images/usc_makers_job_icon.png';
import bahIcon from '../images/bah_icon.png';
import background from '../images/background.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const email = 'tmertz@usc.edu';

const handleEmailClick = () => {
  const mailtoLink = `mailto:${email}?`;
  window.location.href = mailtoLink;
};


class MainPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            portfolioSelected: 'softwareDeveloper',
            clicked: false
          };
  
        this.handleSelection = this.handleSelection.bind(this);
    
        this.homeRef = React.createRef();
        this.aboutMeRef = React.createRef();
        this.experienceRef = React.createRef();
        this.porfolioRef = React.createRef();
        this.selectedRef = React.createRef();
        this.contactRef = React.createRef();
      }
      
      scrollTo(section) {
        if (section.current) {
            let headerHeight = 72; 
    
            if (section === this.selectedRef) {
                headerHeight = 100;
            } 
            else if (section === this.aboutMeRef) {
                headerHeight = 200;
            }
            else if (section === this.experienceRef) {
                headerHeight = 75;
            }
            else if (section === this.porfolioRef) {
                headerHeight = 120;
            }
    
            window.scrollTo({
                top: section.current.offsetTop - headerHeight,
                behavior: "smooth"
            });
        }
    }
    
      
      
  handleSelection = (section) => {
    this.setState({ portfolioSelected: section });
  };

  state = {
    iconClicked: false
  };
  

  handleDownloadClick = () => {
    this.setState({ showIcon: !this.state.showIcon });
    this.setState({ clicked: true });
    window.open(resume, '_blank', 'noopener,noreferrer');

    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Taisia Mertz Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    const { portfolioSelected } = this.state;

    let selectedComponent;
    
    if (portfolioSelected === 'softwareDeveloper') {
        selectedComponent = (<div className='output'>
            <div className='selectedOutput'>
                <div className='left'></div>
                <div className='center'>
                    <div className='selectionLabel'>SOFTWARE DEVELOPER</div>
                </div>
                <div className='right'>
                    <div onClick={() => this.scrollTo(this.porfolioRef)} className='returnToPortfolio'>˄</div>
                </div>
                
            </div>
            <SoftwareDeveloper />
        </div>);
    } 
    else if (portfolioSelected === 'engineer') {
        selectedComponent = (<div className='selectedComponentOutput'>
        <div className='selectedOutput'>
            <div className='left'></div>
            <div className='center'>
                <div className='selectionLabel'>ENGINEER</div>
            </div>
            <div className='right'>
                <div onClick={() => this.scrollTo(this.porfolioRef)} className='returnToPortfolio'>˄</div>
            </div>
        </div>
        <Engineer />
        </div>);
    } 
    else if (portfolioSelected === 'artist') {
        selectedComponent = (<div className='selectedComponentOutput'>
            <div className='selectedOutput'>
                <div className='left'></div>
                <div className='center'>
                    <div className='selectionLabel'>ARTIST</div>
                </div>
                <div className='right'>
                    <div onClick={() => this.scrollTo(this.porfolioRef)} className='returnToPortfolio'>˄</div>
                </div>
                
            </div>
            <Artist />
        </div>);
    } 
    else {
        selectedComponent = <div>Default Component</div>;
    }

    return (
        <div className = 'mainPage'>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Helmet>
            <header className = 'mainPageHeader'>
                <label className="mainLabel">
                        TAISIA MERTZ
                </label>
                <nav>
                    <ul className="navList">
                        <li onClick={() => this.scrollTo(this.homeRef)}>HOME</li>
                        <li onClick={() => this.scrollTo(this.aboutMeRef)}>ABOUT ME</li>
                        <li onClick={() => this.scrollTo(this.experienceRef)}>EXPERIENCE</li>
                        <li onClick={() => this.scrollTo(this.porfolioRef)}>PORFOLIO</li>
                        <li onClick={() => this.scrollTo(this.contactRef)}>CONTACT</li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="mainPageInner">
                    <section ref={this.homeRef} id="homeSec" className="homeSec">
                        <div className="introContent">
                            <label className="intro">Hello, I'm...</label>
                            <label className="name">TAISIA MERTZ</label>
                            <div className="careerList">
                                <a onClick={() => {
                                    this.handleSelection('softwareDeveloper');
                                    this.scrollTo(this.selectedRef);
                                  }}>Software Developer</a>
                                /
                                <a onClick={() => {
                                    this.handleSelection('engineer');
                                    this.scrollTo(this.selectedRef);
                                  }}>Engineer</a>
                                /
                                <a onClick={() => {
                                    this.handleSelection('artist');
                                    this.scrollTo(this.selectedRef);
                                  }}>Artist</a>
                            </div>
                            <p></p>
                            <div className="careerList">
                                <button className="contactMeButton" onClick={handleEmailClick}>CONTACT ME</button>
                                <button className={`downloadCvButton${this.state.clicked ? ' clicked' : ''}`} onClick={this.handleDownloadClick}>
                                <div className="textContainer">
                                    <label className='downloadCvButtonLabel'>{this.state.clicked ? 'DOWNLOADED' : 'DOWNLOAD CV'}</label>
                                </div>
                                <div className="iconContainer">
                                    <span className="downloadIcon hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg">
                                        <path fill="#ffffff" d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                                        <path fill="#ffffff" d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                                        <path fill="#ffffff" d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                                    </svg>
                                    </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <img className='background' src={background} alt="background"/>
                    </section>
                    <section ref={this.aboutMeRef} id="aboutSec" className="aboutSec">
                        <div className="aboutSecInner">
                        <label className="aboutMeTitle">ABOUT ME</label>
                            <p className="aboutMeInfo">I am a highly motivated student at the University of Southern 
                            California's Viterbi School of Engineering, pursuing a major in Computer Science with a 
                            strong background in general engineering.</p>
                            <p className="aboutMeContent">Throughout my academic journey, I have gained valuable 
                            experience in full-stack development, cultivating a solid foundation in software 
                            engineering and various technologies such as React, Node.js, Python, and C++. My passion 
                            for designing innovative solutions has driven my pursuit of expertise in full-stack 
                            software development. Starting with the Project Lead The Way Advanced Engineering and 
                            Computer Science Programs during middle and high school, I developed a deep interest in 
                            engineering principles and problem-solving methodologies.Furthermore, I have been fortunate 
                            to acquire practical experience through internships, further enhancing my understanding 
                            of the technical aspects necessary for building robust and scalable software solutions. 
                            My ultimate goal is to leverage technology to tackle real-world challenges and make a 
                            positive impact. I am committed to utilizing my skills and knowledge to develop innovative 
                            solutions that address these challenges head-on.</p>
                            <div className="contactOptions">
                                <a href="https://github.com/mertz-taisia" target="_blank">
                                    <button class="githubContactButton">
                                        <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className = "iconSizeGithub">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                                        <span class="githubContactLabel">@mertz-taisia</span>
                                    </button>
                                </a>
                                <button class="emailContactButton" onClick={handleEmailClick}>
                                    <svg fill="white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className = "iconSize">
                                        <path d="M14 2H2c-1.1 0-1.99.9-1.99 2L0 12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4l-6 3.5L2 6V4l6 3.5L14 4v2z"/>
                                    </svg>
                                    <span class="emailContactLabel">tmertz@usc.edu</span>
                                </button>
                                <a href="https://www.linkedin.com/in/taisia-mertz-6a3782224/" target="_blank">
                                    <button class="linkedInContactButton">
                                        <svg fill="white" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" className = "iconSize"><path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.99 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.53 20.48H3.56V9h3.97v11.48zM5.55 7.74a2.26 2.26 0 0 1-2.26-2.26 2.26 2.26 0 0 1 2.26-2.26c1.24 0 2.25 1.01 2.25 2.26a2.26 2.26 0 0 1-2.25 2.26zm15.25 12.74h-3.96v-5.57c0-1.33 0-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96v5.67H9.88V9h3.81v1.56h.05c.53-.99 1.82-2.05 3.75-2.05 4.01 0 4.76 2.64 4.76 6.08v5.89z"></path></svg>
                                        <span class="linkedInContactLabel">@taisia mertz</span>
                                    </button>
                                </a>
                                <a href={resume} target="_blank" rel="noreferrer noopener">
                                    <button class="resumeContactButton">
                                        <svg fill="white" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" className = "iconSize">
                                            <path d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"/>
                                        </svg>
                                        <span class="resumeContactLabel">Taisia Mertz Resume.pdf</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        
                    </section>
                    <section className='gap'></section>
                    <section ref={this.experienceRef} id="experienceSec" className="experienceSec">
                        <div className='workExperienceLabel'>PROFESSIONAL EXPERIENCE</div>
                        <div className="timeline"></div>
                        <div className='workExperienceContainer'>
                            <Link to="/cua" className='cuaJobBox job'>
                                <img className='cuaIcon jobIcon' src={cuaIcon}></img>
                                <label className="jobDate">2019</label>
                                <label className="jobLabel">CUA</label>
                                <label className="roleDescription">Mechanical Engineer</label>
                            </Link>
                            <Link to="/ecofarms" className='ecoFarmsJobBox job'>
                                <img className='ecofarmsIcon jobIcon' src={ecoFarmsIcon}></img>
                                <label className="jobDate">2020-2021</label>
                                <label className="jobLabel">1000ecofarms</label>
                                <label className="roleDescription">Web Developer</label>
                            </Link>
                            <Link to="/uscmakers" className='uscMakersJobBox job'>
                                <img className='uscMakersJobIcon jobIcon' src={uscMakersJobIcon}></img>
                                <label className="jobDate">2019-Present</label>
                                <label className="jobLabel">USC Makers</label>
                                <label className="roleDescription">Project Manager</label>              
                            </Link>
                            <Link to="/bah" className='bahJobBox job'>
                                <img className='bahIcon jobIcon' src={bahIcon}></img>
                                <label className="jobDate">2023</label>
                                <label className="jobLabel">Booz Allen Hamilton</label>
                                <label className="roleDescription">Software Engineer</label>
                            </Link>
                        </div>
                    </section>
                    <section className='gap'></section>
                    <section ref={this.porfolioRef} id="porfolioSec" className="porfolioSec">
                        <div className="porfolioSelection">
                            <div className={this.state.portfolioSelected === 'softwareDeveloper' ? 'softwareDeveloperContainer selected' : 'softwareDeveloperContainer'}
                                onClick={() => {
                                    this.handleSelection('softwareDeveloper');
                                    this.scrollTo(this.selectedRef);
                                  }}>
                                <div className="softwareDeveloperContainerInner">
                                    <label className="softwareDeveloperLabel">SOFTWARE DEVELOPER</label>
                                    <p className="softwareDeveloperDescription">
                                        This is a short description of what 
                                        I’ve done that is relevant to software 
                                        development. Clicking this links to 
                                        my personal projects.
                                    </p>
                                    <label className="softwareDeveloperLearnMore">LEARN MORE</label>
                                </div>
                            </div>
                            <div className={this.state.portfolioSelected === 'engineer' ? 'engineerContainer selected' : 'engineerContainer'}
                                onClick={() => {
                                this.handleSelection('engineer');
                                this.scrollTo(this.selectedRef);
                                }}>
                                <div className="engineerContainerInner">
                                        <label className="engineerLabel">ENGINEER</label>
                                        <p className="engineerDescription">
                                            This is a short description of what 
                                            I’ve done that is relevant to software 
                                            development. Clicking this links to 
                                            my personal projects.
                                        </p>
                                        <label className="engineerLearnMore">LEARN MORE</label>
                                    </div>
                                </div>
                                <div className={this.state.portfolioSelected === 'artist' ? 'artistContainer selected' : 'artistContainer'}
                                    onClick={() => {
                                        this.handleSelection('artist');
                                        this.scrollTo(this.selectedRef);
                                        }}>
                                    <div className="artistContainerInner">
                                        <label className="artistLabel">ARTIST</label>
                                        <p className="artistDescription">
                                            This is a short description of what 
                                            I’ve done that is relevant to software 
                                            development. Clicking this links to 
                                            my personal projects.
                                        </p>
                                        <label className="artistLearnMore">LEARN MORE</label>
                                    </div>
                            </div>
                        </div>
                    </section>
                    <section ref={this.selectedRef} id="selectedSec" className="selectedSec">
                        {selectedComponent}
                    </section>
                    <section className='gap'></section>
                    </div>
                <section ref={this.contactRef} id="contactSec" className="contactSec">
                    <label className='conectWithMeLabel'>CONNECT WITH ME</label>
                    <hr className='contactDivider' />
                    <div className='contactContent'>
                        <a href='https://www.linkedin.com/in/taisia-mertz-6a3782224/' target="_blank" rel="noreferrer noopener" className='linkedinBox'>
                            <svg fill="white" className='linkedinIconContact' viewBox="0 0 30 30" height="2.25em" width="2.25em" xmlns="http://www.w3.org/2000/svg"><path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.99 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.53 20.48H3.56V9h3.97v11.48zM5.55 7.74a2.26 2.26 0 0 1-2.26-2.26 2.26 2.26 0 0 1 2.26-2.26c1.24 0 2.25 1.01 2.25 2.26a2.26 2.26 0 0 1-2.25 2.26zm15.25 12.74h-3.96v-5.57c0-1.33 0-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96v5.67H9.88V9h3.81v1.56h.05c.53-.99 1.82-2.05 3.75-2.05 4.01 0 4.76 2.64 4.76 6.08v5.89z"></path></svg>
                            <label className='linkedinLabel'>LINKEDIN</label>
                            <label className='linkedinTag'>@taisia-mertz</label>
                        </a>
                        <div className='emailBox'  onClick={handleEmailClick}>
                            <svg fill="white" className='emailIconContact' viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H2c-1.1 0-1.99.9-1.99 2L0 12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4l-6 3.5L2 6V4l6 3.5L14 4v2z"/></svg>
                            <label className='emailLabel'>EMAIL</label>
                            <label className='emailTag'>tmertz@usc.edu</label>
                        </div>
                        <a href='https://github.com/mertz-taisia' target="_blank" rel="noreferrer noopener" className='githubBox'>
                            <svg fill='white' className='githubIconContact' viewBox="0 0 30 30" height="2.25em" width="2.25em" xmlns="http://www.w3.org/2000/svg"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                            <label className='githubLabel'>GITHUB</label>
                            <label className='githubTag'>@mertz-taisia</label>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
    }
}

export default MainPage