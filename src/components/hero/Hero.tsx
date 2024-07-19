import React, { useRef, useEffect } from 'react';
import $ from "jquery";
import './Hero.scss';
import FrontendMentor from '../../images/Frontendmentor.svg';
import FrontendMentorGreen from '../../images/FrontendmentorGreen.svg';
import Github from '../../images/Github.svg';
import GithubGreen from '../../images/GithubGreen.svg';
import LinkedIn from '../../images/LinkedIn.svg';
import LinkedInGreen from '../../images/LinkedInGreen.svg';
import X from '../../images/x-social-media-black-icon.svg';
import XGreen from '../../images/x-social-media-green-icon.svg';
import MyPhoto from '../../images/My-photo.jpeg';
import Rings from '../../images/rings.svg';

const Hero: React.FC = () => {
  const scrollButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {

    const handleButtonClick = () => {
      if (scrollButtonRef.current) {
        $("html, body").animate(
          {
            scrollTop: $("#contact").offset()?.top,
          },
          1000
        ); 
      }
    };

    let buttonRef = scrollButtonRef.current;

    if (buttonRef) {
      $(buttonRef).on("click", handleButtonClick);
    }

    return () => {
      if (buttonRef) {
        $(buttonRef).off("click", handleButtonClick);
      }
    };
  }, []);

	return (
		<section className='hero'>
      <img className="rings" src={Rings} alt="Rings" />
      <div className="container">
        <div className="navbar">
          <div className="nickname">
            <h3>faykris</h3>
          </div>
          <div className="social-media">
            <a href="https://github.com/faykris">
              <img src={Github} alt="Github logo" />
              <img src={GithubGreen} alt="Github logo" />
            </a>
            <a href="https://www.frontendmentor.io/profile/faykris">
              <img src={FrontendMentor} alt="Frontend Mentor logo" />
              <img src={FrontendMentorGreen} alt="Frontend Mentor logo" />
            </a>
            <a href="https://www.linkedin.com/in/cristian-pinzon28/">
              <img src={LinkedIn} alt="LinkedIn logo" />
              <img src={LinkedInGreen} alt="LinkedIn logo" />
            </a>
            <a href="https://x.com/faykris">
              <img src={X} alt="Twitter logo" />
              <img src={XGreen} alt="X logo" />
            </a>
          </div>
        </div>
        <div className="me">
          <div className="present">
            <h1>Nice to meet you! I'm <span>Cristian Pinzón</span></h1>
            <p>
              Based in Colombia, I'm a full stack developer passionate about 
              building accessible web apps that users love.
            </p>
            <div className="contact-me">
              <button ref={scrollButtonRef}>
                Contact me
              </button>
            </div>
          </div>
          <div className="image">
            <img src={MyPhoto} alt="profile" />
          </div>
        </div>
      </div>	
		</section>
	);
  
}

export default Hero;
