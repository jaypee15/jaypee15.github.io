import React, { useEffect, useState } from "react";
import Resume from "../assets/Resume.pdf";
import {
  TwitterIcon,
  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon,
} from "./svgs";

// Helper to keep text clean
const formatTitle = (text) => text;

const titles = [
  "SOFTWARE_ENGINEER",
  "AI_ENGINEER",
  "BACKEND_ENGINEER",
  "FULLSTACK_ENGINEER",
];

const Hero = () => {
  const [title, setTitle] = useState(titles[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setTitle((prev) => {
        const idx = titles.indexOf(prev);
        return titles[(idx + 1) % titles.length];
      });
    }, 2500);
    return () => clearInterval(id);
  }, []);


  return (
    <div className="hero-section">
      {/* Decorative technical labels */}
      <div style={{position: 'absolute', top: '10px', left: '10px', fontSize: '10px', color: '#64ffda', opacity: 0.7}}>
        ID: USER_JP_01
      </div>
      <div style={{position: 'absolute', top: '10px', right: '10px', fontSize: '10px', color: '#00ff00', opacity: 0.7}}>
        SYS_STATUS: ONLINE
      </div>

      <div className="hero-sub-1">
        <div className="hero-sub-container">
          <p className="hero-sub-1-intro" style={{fontFamily: 'Fira Code'}}>
            {'>'} initialize_sequence(Johnpaul_Okoye)
          </p>
          <div className="hero-sub-1-titles">
            <h1 className="hero-title">
              {formatTitle(title)}<span className="blinking-cursor">_</span>
            </h1>
          </div>
          <p className="hero-sub-1-desc type5">
            {'// SUMMARY' } <br/>
            Specialized in robust server-side logic, API architecture, and database optimization. 
            Designing scalable systems where security and efficiency are hard-coded requirements.
          </p>
        </div>

        <div className="hero-sub-1-buttons">
          <a href={Resume} download>
             DOWNLOAD_LOGS (Resume)
          </a>
          <button onClick={() => window.location.href = "mailto:okoyejohnpaul15@gmail.com"}>
             ESTABLISH_CONNECTION
          </button>
        </div>
        
        {/* All Icons rendered here as "Ports" */}
        <div className="hero-sub-1-icons" style={{marginTop: '30px', borderTop: '1px dashed #233554', paddingTop: '15px'}}>
            <p style={{fontSize: '10px', color: '#8892b0', marginBottom: '10px'}}>{'// EXT_CONNECTIVITY:'}</p>
            <div style={{display: 'flex', gap: '15px'}}>
              <a href="http://twitter.com/johnofpaul" target="_blank" rel="noreferrer">
                <TwitterIcon />
              </a>
              <a href="https://github.com/jaypee15" target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
              <a href="mailto:okoyejohnpaul15@gmail.com?" target="_blank" rel="noreferrer">
                <MailIcon />
              </a>
              <a href="https://wa.me/2349050741851" target="_blank" rel="noreferrer">
                <WhatsappIcon />
              </a>
              <a href="https://www.linkedin.com/in/johnpaulokoye" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;