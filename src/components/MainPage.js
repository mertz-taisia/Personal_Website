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


const email = 'tmertz@usc.edu';

const handleEmailClick = () => {
  const mailtoLink = `mailto:${email}?`;
  window.location.href = mailtoLink;
};


class MainPage extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          portfolioSelected: 'softwareDeveloper'
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
          const headerHeight = section === this.selectedRef ? 0 : 72;
          console.log("Scrolling to section:", section, "Header Height:", headerHeight);
          window.scrollTo({
            top: section.current.offsetTop - headerHeight,
            behavior: "smooth"
          });
        }
      }
      
      
  handleSelection = (section) => {
    this.setState({ portfolioSelected: section });
  };
  

  handleDownloadClick = () => {
    // Open the PDF in a new tab
    window.open(resume, '_blank', 'noopener,noreferrer');

    // Create an anchor element to trigger the download
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
        selectedComponent = (<div className='output'>
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
        selectedComponent = (<div className='output'>
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
                                <a onClick={() => this.scrollTo(this.porfolioRef)}>Software Developer</a>
                                /
                                <a onClick={() => this.scrollTo(this.porfolioRef)}>Engineer</a>
                                /
                                <a onClick={() => this.scrollTo(this.porfolioRef)}>Artist</a>
                            </div>
                            <p></p>
                            <div className="careerList">
                                <button className="contactMeButton" onClick={handleEmailClick}>CONTACT ME</button>
                                <button className="downloadCvButton" onClick={this.handleDownloadClick}>
                                DOWNLOAD CV
                                </button>
                            </div>
                        </div>
                        <img className='techBackground' src={techBackground} alt="Tech Background" />
                        <img className='headshot' src={headshot} alt="Headshot" />
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
                                <button className="emailButton" onClick={handleEmailClick}>
                                    <div className="iconWrapper">
                                        <img className='emailIcon' src={emailIcon} alt="emailIcon" />
                                    </div>
                                </button>
                                <a href='https://github.com/mertz-taisia' target="_blank" rel="noreferrer noopener">
                                    <button className="githubButton">  
                                        <div className="iconWrapper">
                                            <img className='githubIcon' src={githubIcon} alt="githubIcon" />
                                        </div>
                                    </button>
                                </a>
                                <a href='https://www.linkedin.com/in/taisia-mertz-6a3782224/' target="_blank" rel="noreferrer noopener">
                                    <button className="linkedinButton">
                                        <div className="iconWrapper">
                                            <img className='linkedinIcon' src={linkedinIcon} alt="linkedinIcon" />
                                        </div>
                                    </button>
                                </a>
                                <a href={resume} target="_blank" rel="noreferrer noopener">
                                    <button className="resumeButton">
                                        <div className="iconWrapper">
                                            <img className='resumeIcon' src={resumeIcon} alt="resumeIcon" />                     
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className='gap'></section>
                    <section ref={this.experienceRef} id="experienceSec" className="experienceSec">
                        <div className="timelineLine"></div>
                        <div className='workExperienceLabel'>PROFESSIONAL EXPERIENCE</div>
                        <div className="timeline"></div>
                        <div className='workExperienceContainer'>
                            <div className="cuaJobBox job">
                                <img className='cuaIcon jobIcon' src={cuaIcon}></img>
                                <label className="jobDate">2019</label>
                                <label className="jobLabel">CUA</label>
                                <label className="roleDescription">Mechanical Engineer</label>
                            </div>
                            <div className="ecoFarmsJobBox job">
                                <img className='ecofarmsIcon jobIcon' src={ecoFarmsIcon}></img>
                                <label className="jobDate">2020-2021</label>
                                <label className="jobLabel">1000ecofarms</label>
                                <label className="roleDescription">Web Developer</label>
                            </div>
                            <div className="uscMakersJobBox job">
                                <img className='uscMakersJobIcon jobIcon' src={uscMakersJobIcon}></img>
                                <label className="jobDate">2019-Present</label>
                                <label className="jobLabel">USC Makers</label>
                                <label className="roleDescription">Project Manager</label>            
                            </div>
                            <div className="bahJobBox job">
                                <img className='bahIcon jobIcon' src={bahIcon}></img>
                                <label className="jobDate">2023</label>
                                <label className="jobLabel">Booz Allen Hamilton</label>
                                <label className="roleDescription">Software Engineer</label>
                            </div>
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
                    <div className='contactContent'>
                        <a href='https://www.linkedin.com/in/taisia-mertz-6a3782224/' target="_blank" rel="noreferrer noopener" className='linkedinBox'>
                            <img src={linkedinIcon} className='linkedinIconContact'></img>
                            <div className='linkedinInfo'>
                                <label className='linkedinLabel'>LINKEDIN</label>
                                <label className='linkedinTag'>@taisia-mertz</label>
                            </div>
                        </a>
                        <div className='emailBox'  onClick={handleEmailClick}>
                            <img src={emailIcon} className='emailIconContact'></img>
                            <div className='emailInfo'>
                                <label className='emailLabel'>EMAIL</label>
                                <label className='emailTag'>tmertz@usc.edu</label>
                            </div>
                        </div>
                        <a href='https://github.com/mertz-taisia' target="_blank" rel="noreferrer noopener" className='githubBox'>
                            <img src={githubIcon} className='githubIconContact' alt='GitHub Icon'></img>
                            <div className='githubInfo'>
                                <label className='githubLabel'>GITHUB</label>
                                <label className='githubTag'>@mertz-taisia</label>
                            </div>
                        </a>

                    </div>
                </section>
            </main>
        </div>
    )
    }
}

export default MainPage