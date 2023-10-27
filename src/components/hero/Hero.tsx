import React, { useRef, useEffect } from 'react';
import $ from "jquery";
import './Hero.scss';
import FrontendMentor from '../../images/Frontendmentor.svg';
import Github from '../../images/Github.svg';
import LinkedIn from '../../images/LinkedIn.svg';
import Twitter from '../../images/Twitter.svg';
import MyPhoto from '../../images/my-photo.png';

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
		<div className="container">
			<div className="navbar">
				<div className="nickname">
					<h3>faykris</h3>
				</div>
				<div className="social-media">
					<img src={Github} alt="Github logo" />
					<img src={FrontendMentor} alt="Frontend Mentor logo" />
					<img src={LinkedIn} alt="LinkedIn logo" />
					<img src={Twitter} alt="Twitter logo" />
				</div>
			</div>
			<div className="me">
				<div className="present">
					<h1>Nice to meet you! I'm <span>Cristian Pinzón</span>.</h1>
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
