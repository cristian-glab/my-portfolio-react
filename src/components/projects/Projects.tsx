import React, { useRef, useEffect } from 'react';
import $ from "jquery";
import './Projects.scss'
import eCommerce from '../../images/projects/e-commerce-page.png';
import ipAdress from '../../images/projects/ip-address-tracker-page.png';
import jobListing from '../../images/projects/job-listing-page.png';
import makeRemote from '../../images/projects/make-remote-page.png';
import multiStepForm from '../../images/projects/multi-step-form-page.png';
import newsHomepage from '../../images/projects/news-homepage-page.png';


const Projects: React.FC = () =>  {
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
    <section className='projects'>
      <div className="title">
        <h1>Projects</h1>
        <button ref={scrollButtonRef}>
          Contact me
        </button>  
      </div>
      <div className="list">
        <div className="element">
          <div className="image">
            <div className="buttons">
              <div className="row">
                <button>
                  View Project
                </button>
              </div>
              <div className="row">
                <button>
                  View Code
                </button>
              </div>
            </div>
            <img src={eCommerce} alt="e-commerce page" />
          </div>
          <h2>E-commerce Product Page</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>ANGULAR</span>
          </p>
          <div className="mobile-buttons">
            <button>
              View Project
            </button>
            <button>
              View Code
            </button>
          </div>
        </div>
        <div className="element">
          <div className="image">
            <div className="buttons">
              <div className="row">
                <button>
                  View Project
                </button>
              </div>
              <div className="row">
                <button>
                  View Code
                </button>
              </div>
            </div>
            <img src={multiStepForm} alt="multi step form page" />
          </div>
          <h2>Multi Step Form</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>ANGULAR</span>
          </p>
          <div className="mobile-buttons">
            <button>
              View Project
            </button>
            <button>
              View Code
            </button>
          </div>
        </div>
        <div className="element">
          <div className="image">
            <div className="buttons">
              <div className="row">
                <button>
                  View Project
                </button>
              </div>
              <div className="row">
                <button>
                  View Code
                </button>
              </div>
            </div>
            <img src={newsHomepage} alt="news homepage" />
          </div>
          <h2>News Homepage</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>VUE</span>
          </p>
          <div className="mobile-buttons">
            <button>
              View Project
            </button>
            <button>
              View Code
            </button>
          </div>
        </div>
        <div className="element">
          <div className="image">
            <div className="buttons">
              <div className="row">
                <button>
                  View Project
                </button>
              </div>
              <div className="row">
                <button>
                  View Code
                </button>
              </div>
            </div>
            <img src={ipAdress} alt="ip address page" />
          </div>
          <h2>IP Address Tracker</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>REACT</span>
          </p>
          <div className="mobile-buttons">
            <button>
              View Project
            </button>
            <button>
              View Code
            </button>
          </div>
        </div>
        <div className="element">
          <div className="image">
            <div className="buttons">
              <div className="row">
                <button>
                  View Project
                </button>
              </div>
              <div className="row">
                <button>
                  View Code
                </button>
              </div>
            </div>
            <img src={makeRemote} alt="make remote page" />
          </div>
          <h2>Make Remote Work</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>ANGULAR</span>
          </p>
          <div className="mobile-buttons">
            <button>
              View Project
            </button>
            <button>
              View Code
            </button>
          </div>
        </div>
        <div className="element">
          <div className="image">
            <div className="buttons">
              <div className="row">
                <button>
                  View Project
                </button>
              </div>
              <div className="row">
                <button>
                  View Code
                </button>
              </div>
            </div>
            <img src={jobListing} alt="job listing page" />
          </div>
          <h2>Static Job Listings</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>REACT</span>
          </p>
          <div className="mobile-buttons">
            <button>
              View Project
            </button>
            <button>
              View Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Projects;