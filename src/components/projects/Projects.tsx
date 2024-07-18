import React, { useRef, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { CSSTransition } from 'react-transition-group';
import 'react-tabs/style/react-tabs.css';
import $ from "jquery";
import './Projects.scss'
import eCommerce from '../../images/projects/e-commerce-page.png';
import ipAdress from '../../images/projects/ip-address-tracker-page.png';
import jobListing from '../../images/projects/job-listing-page.png';
import makeRemote from '../../images/projects/make-remote-page.png';
import multiStepForm from '../../images/projects/multi-step-form-page.png';
import newsHomepage from '../../images/projects/news-homepage-page.png';
import wmBackend from '../../images/projects/wm-backend.png';
import wmFrontend from '../../images/projects/wm-frontend.png';
import greenrunApi from '../../images/projects/greenrun-api.png';
import linkedInScraper from '../../images/projects/linkedin-scraper.png';
import caretalk from '../../images/projects/caretalk-mobile.png';
import mySocialMedia from '../../images/projects/my-social-media.jpeg';
import currencyChatBot from '../../images/projects/currency-chatbot.jpeg';

interface TabContentProps {
  label: string;
  content: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ label, content }) => (
  <div>
    <h2>{label}</h2>
    {content}
  </div>
);

const Projects: React.FC = () =>  {
  const scrollButtonRef = useRef<HTMLButtonElement | null>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

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
      <Tabs selectedIndex={selectedTabIndex} onSelect={(index) => setSelectedTabIndex(index)}>
        <TabList>
          <Tab>Frontend</Tab>
          <Tab>Backend</Tab>
          <Tab>Mobile</Tab>
        </TabList>
        <TabPanel>
          <TabContent label="Websites using JavaScript frameworks" content={
            <div className="list">
              <div className="element movement">
                <div className="image">
                  <div className="buttons">
                    <div className="row">
                      <a href="https://main.d2bgzhtjb4yy1t.amplifyapp.com/" target="_blank" rel="noreferrer">
                        <button>
                          View Project
                        </button>
                      </a>
                    </div>
                    <div className="row">
                      <a href="https://github.com/faykris/currency-converter-chat-front" target="_blank" rel="noreferrer">
                        <button>
                          View Code
                        </button>
                      </a>
                    </div>
                  </div>
                  <img src={currencyChatBot} alt="Currency Chatbot" />
                </div>
                <h2>Currency ChatBot</h2>
                <p>
                  <span>HTML</span> <span>CSS</span> <span>REACT</span> <span>TYPESCRIPT</span> <span>JWT</span>
                </p>
                <div className="mobile-buttons">
                  <a href='https://main.d2bgzhtjb4yy1t.amplifyapp.com/' target="_blank" rel="noreferrer">
                    <button>
                      View Project
                    </button>
                  </a>
                  <a href="https://github.com/faykris/currency-converter-chat-front" target="_blank" rel="noreferrer">
                    <button>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="element movement">
                <div className="image">
                  <div className="buttons">
                    <div className="row">
                      <a href="https://main.d1kpywnbqyxeuw.amplifyapp.com" target="_blank" rel="noreferrer">
                        <button>
                          View Project
                        </button>
                      </a>
                    </div>
                    <div className="row">
                      <a href="https://github.com/faykris/my-social-media-front" target="_blank" rel="noreferrer">
                        <button>
                          View Code
                        </button>
                      </a>
                    </div>
                  </div>
                  <img src={mySocialMedia} alt="My Social Media" />
                </div>
                <h2>My Social Media</h2>
                <p>
                  <span>HTML</span> <span>CSS</span> <span>REACT</span> <span>TYPESCRIPT</span> <span>TAILWIND</span> <span>JWT</span> <span>REDIS</span> <span>RABBITMQ</span>
                </p>
                <div className="mobile-buttons">
                  <a href='https://main.d1kpywnbqyxeuw.amplifyapp.com' target="_blank" rel="noreferrer">
                    <button>
                      View Project
                    </button>
                  </a>
                  <a href="https://github.com/faykris/my-social-media-front" target="_blank" rel="noreferrer">
                    <button>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="element movement">
                <div className="image">
                  <div className="buttons">
                    <div className="row">
                      <a href="https://weather-monitoring-front.netlify.app/" target="_blank" rel="noreferrer">
                        <button>
                          View Project
                        </button>
                      </a>
                    </div>
                    <div className="row">
                      <a href="https://github.com/faykris/weather-monitoring-front" target="_blank" rel="noreferrer">
                        <button>
                          View Code
                        </button>
                      </a>  
                    </div>
                  </div>
                  <img src={wmFrontend} alt="Weather Monitoring Frontend" />
                </div>
                <h2>Weather Monitoring website</h2>
                <p>
                  <span>HTML</span> <span>CSS</span> <span>ANGULAR</span> <span>SOCKET</span>
                </p>
                <div className="mobile-buttons">
                  <a href='https://weather-monitoring-front.netlify.app/' target="_blank" rel="noreferrer">
                    <button>
                      View Project
                    </button>
                  </a>
                  <a href="https://github.com/faykris/weather-monitoring-front" target="_blank" rel="noreferrer">
                    <button>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="element movement">
                <div className="image">
                  <div className="buttons">
                    <div className="row">
                      <a href="https://sneakers-faykris.netlify.app/" target="_blank" rel="noreferrer">
                        <button>
                          View Project
                        </button>
                      </a>
                    </div>
                    <div className="row">
                      <a href="https://github.com/faykris/ecommerce-product-page-main" target="_blank" rel="noreferrer">
                        <button>
                          View Code
                        </button>
                      </a>  
                    </div>
                  </div>
                  <img src={eCommerce} alt="e-commerce page" />
                </div>
                <h2>E-commerce Product Page</h2>
                <p>
                  <span>HTML</span> <span>CSS</span> <span>ANGULAR</span>
                </p>
                <div className="mobile-buttons">
                  <a href='https://sneakers-faykris.netlify.app/' target="_blank" rel="noreferrer">
                    <button>
                      View Project
                    </button>
                  </a>
                  <a href="https://github.com/faykris/ecommerce-product-page-main" target="_blank" rel="noreferrer">
                    <button>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="element movement">
                <div className="image">
                  <div className="buttons">
                    <div className="row">
                      <a href="https://multi-step-form-faykris.netlify.app/" target="_blank" rel="noreferrer">
                        <button>
                          View Project
                        </button>
                      </a>
                    </div>
                    <div className="row">
                      <a href="https://github.com/faykris/multi-step-form" target="_blank" rel="noreferrer">
                        <button>
                          View Code
                        </button>
                      </a>
                    </div>
                  </div>
                  <img src={multiStepForm} alt="multi step form page" />
                </div>
                <h2>Multi Step Form</h2>
                <p>
                  <span>HTML</span> <span>CSS</span> <span>ANGULAR</span>
                </p>
                <div className="mobile-buttons">
                  <a href="https://multi-step-form-faykris.netlify.app/" target="_blank" rel="noreferrer">
                    <button>
                      View Project
                    </button>
                  </a>
                  <a href="https://github.com/faykris/multi-step-form" target="_blank" rel="noreferrer">
                    <button>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="element movement">
                <div className="image">
                  <div className="buttons">
                    <div className="row">
                      <a href="https://news-homepage-faykris.netlify.app/#/" target="_blank" rel="noreferrer">
                        <button>
                          View Project
                        </button>
                      </a>
                    </div>
                    <div className="row">
                      <a href="https://github.com/faykris/news-homepage" target="_blank" rel="noreferrer">
                        <button>
                          View Code
                        </button>
                      </a>
                    </div>
                  </div>
                  <img src={newsHomepage} alt="news homepage" />
                </div>
                <h2>News Homepage</h2>
                <p>
                  <span>HTML</span> <span>CSS</span> <span>VUE</span>
                </p>
                <div className="mobile-buttons">
                  <a href="https://news-homepage-faykris.netlify.app/#/" target="_blank" rel="noreferrer">
                    <button>
                      View Project
                    </button>
                  </a>
                  <a href="https://github.com/faykris/news-homepage" target="_blank" rel="noreferrer">
                    <button>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="element movement">
                <div className="image">
                  <div className="buttons">
                    <div className="row">
                      <a href="https://ip-address-tracker-master-nu.vercel.app/" target="_blank" rel="noreferrer">
                        <button>
                          View Project
                        </button>
                      </a>
                    </div>
                    <div className="row">
                      <a href="https://github.com/faykris/ip-address-tracker-master" target="_blank" rel="noreferrer">
                        <button>
                          View Code
                        </button>
                      </a>
                    </div>
                  </div>
                  <img src={ipAdress} alt="ip address page" />
                </div>
                <h2>IP Address Tracker</h2>
                <p>
                  <span>HTML</span> <span>CSS</span> <span>REACT</span>
                </p>
                <div className="mobile-buttons">
                  <a href="https://ip-address-tracker-master-nu.vercel.app/" target="_blank" rel="noreferrer">
                    <button>
                      View Project
                    </button>
                  </a>
                  <a href="https://github.com/faykris/ip-address-tracker-master" target="_blank" rel="noreferrer">
                    <button>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="element movement">
                <div className="image">
                  <div className="buttons">
                    <div className="row">
                      <a href="https://snap-faykris.netlify.app/home" target="_blank" rel="noreferrer">
                        <button>
                          View Project
                        </button>
                      </a>
                    </div>
                    <div className="row">
                      <a href="https://github.com/faykris/make-remote-work" target="_blank" rel="noreferrer">
                      <button>
                        View Code
                      </button>
                      </a>
                    </div>
                  </div>
                  <img src={makeRemote} alt="make remote page" />
                </div>
                <h2>Make Remote Work</h2>
                <p>
                  <span>HTML</span> <span>CSS</span> <span>ANGULAR</span>
                </p>
                <div className="mobile-buttons">
                  <a href="https://snap-faykris.netlify.app/home" target="_blank" rel="noreferrer">
                    <button>
                      View Project
                    </button>
                  </a>
                  <a href="https://github.com/faykris/make-remote-work" target="_blank" rel="noreferrer">
                    <button>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="element movement">
                <div className="image">
                  <div className="buttons">
                    <div className="row">
                      <a href="https://static-job-listings-master-ruby.vercel.app/" target="_blank" rel="noreferrer">
                        <button>
                          View Project
                        </button>
                      </a>
                    </div>
                    <div className="row">
                      <a href="https://github.com/faykris/static-job-listings-master" target="_blank" rel="noreferrer">
                        <button>
                          View Code
                        </button>
                      </a>
                    </div>
                  </div>
                  <img src={jobListing} alt="job listing page" />
                </div>
                <h2>Static Job Listings</h2>
                <p>
                  <span>HTML</span> <span>CSS</span> <span>REACT</span>
                </p>
                <div className="mobile-buttons">
                  <a href="https://static-job-listings-master-ruby.vercel.app/" target="_blank" rel="noreferrer">
                    <button>
                      View Project
                    </button>
                  </a>
                  <a href="https://github.com/faykris/static-job-listings-master" target="_blank" rel="noreferrer">
                    <button>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          } />
        </TabPanel>
        <TabPanel>
        <TabContent label="REST APIs, microservices and scrapers" content={
          <div className="list">
            <div className="element movement">
              <div className="image">
                <div className="buttons">
                  <div className="row">
                    <a href="https://weather-monitoring-back.vercel.app/">
                      <button>
                        View Project
                      </button>
                    </a>
                  </div>
                  <div className="row">
                    <a href="https://github.com/faykris/weather-monitoring-back">
                      <button>
                        View Code
                      </button>
                    </a>  
                  </div>
                </div>
                <img src={wmBackend} alt="Weather Monitoring Backend" />
              </div>
              <h2>Weather Monitoring Microservice</h2>
              <p>
                <span>NEST</span> <span>MONGODB</span> <span>CRONJOB</span>
              </p>
              <div className="mobile-buttons">
                <a href='https://weather-monitoring-back.vercel.app/' target='_blank' rel="noreferrer">
                  <button>
                    View Project
                  </button>
                </a>
                <a href="https://github.com/faykris/weather-monitoring-back" target='_blank' rel="noreferrer">
                  <button>
                    View Code
                  </button>
                </a>
              </div>
            </div>
            <div className="element movement">
              <div className="image">
                <div className="buttons">
                  <div className="row">
                    <a href="https://grenrun-sports.herokuapp.com/">
                      <button>
                        View Project
                      </button>
                    </a>
                  </div>
                  <div className="row">
                    <a href="https://github.com/faykris/GreenRun-Sports">
                      <button>
                        View Code
                      </button>
                    </a>  
                  </div>
                </div>
                <img src={greenrunApi} alt="GreenRun Api" />
              </div>
              <h2>GreenRun betting API</h2>
              <p>
                <span>NODE</span> <span>HAPI</span> <span>MYSQL</span> <span>KNEX</span>
              </p>
              <div className="mobile-buttons">
                <a href='https://grenrun-sports.herokuapp.com/' target='_blank' rel="noreferrer">
                  <button>
                    View Project
                  </button>
                </a>
                <a href="https://github.com/faykris/GreenRun-Sports" target='_blank' rel="noreferrer">
                  <button>
                    View Code
                  </button>
                </a>
              </div>
            </div>
            <div className="element movement">
              <div className="image">
                <div className="buttons">
                  {/* <div className="row">
                    <a href="https://grenrun-sports.herokuapp.com/">
                      <button>
                        View Project
                      </button>
                    </a>
                  </div> */}
                  <div className="row">
                    <a href="https://github.com/faykris/founder_scout">
                      <button>
                        View Code
                      </button>
                    </a>  
                  </div>
                </div>
                <img src={linkedInScraper} alt="GreenRun Api" />
              </div>
              <h2>LinkedIn profiles scraper</h2>
              <p>
                <span>NODE</span> <span>MONGODB</span> <span>AIRTABLE</span> <span>PM2</span>
              </p>
              <div className="mobile-buttons">
                {/* <a href='https://grenrun-sports.herokuapp.com/' target='_blank'>
                  <button>
                    View Project
                  </button>
                </a> */}
                <a href="https://github.com/faykris/founder_scout" target='_blank' rel="noreferrer">
                  <button>
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          } />
        </TabPanel>
        <TabPanel>
          <TabContent label="Mobile Applications" content={
          <div className="list">
            <div className="element movement">
              <div className="image">
                <div className="buttons">
                  {/* <div className="row">
                    <a href="#">
                      <button>
                        View Project
                      </button>
                    </a>
                  </div> */}
                  <div className="row">
                    <a href="https://github.com/faykris/CareTalk" target='_blank' rel="noreferrer">
                      <button>
                        View Code
                      </button>
                    </a>  
                  </div>
                </div>
                <img src={caretalk} alt="Caretalk Telemedicine App" />
              </div>
              <h2>Caretalk Telemedicine App</h2>
              <p>
                <span>FLUTTER</span> <span>FIREBASE</span> <span>SQLITE</span>
              </p>
              <div className="mobile-buttons">
                {/* <a href='#' target='_blank'>
                  <button>
                    View Project
                  </button>
                </a> */}
                <a href="https://github.com/faykris/CareTalk" target='_blank' rel="noreferrer">
                  <button>
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          } />
        </TabPanel>
      </Tabs>
    </section>
  );
  
}

export default Projects;