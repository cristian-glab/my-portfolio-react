import React, { Component } from 'react'
import './Projects.scss'
import eCommerce from '../../images/projects/e-commerce-page.png'
import ipAdress from '../../images/projects/ip-address-tracker-page.png'
import jobListing from '../../images/projects/job-listing-page.png'
import makeRemote from '../../images/projects/make-remote-page.png'
import multiStepForm from '../../images/projects/multi-step-form-page.png'
import newsHomepage from '../../images/projects/news-homepage-page.png'

export default class Projects extends Component {
  render() {
	return (
	  <section className='projects'>
		  <div className="title">
        <h1>Projects</h1>
        <button>
					Contact me
				</button>
      </div>
      <div className="list">
        <div className="element">
          <img src={eCommerce} alt="e-commerce page" />
          <h2>E-commerce Product Page</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>ANGULAR</span>
          </p>
        </div>
        <div className="element">
          <img src={multiStepForm} alt="multi step form page" />
          <h2>Multi Step Form</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>ANGULAR</span>
          </p>
        </div>
        <div className="element">
          <img src={newsHomepage} alt="news homepage" />
          <h2>News Homepage</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>VUE</span>
          </p>
        </div>
        <div className="element">
          <img src={ipAdress} alt="ip address page" />
          <h2>IP Address Tracker</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>REACT</span>
          </p>
        </div>
        <div className="element">
          <img src={makeRemote} alt="make remote page" />
          <h2>Make Remote Work</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>ANGULAR</span>
          </p>
        </div>
        <div className="element">
          <img src={jobListing} alt="job listing page" />
          <h2>Static Job Listings</h2>
          <p>
            <span>HTML</span> <span>CSS</span> <span>REACT</span>
          </p>
        </div>
      </div>
		</section>
	)
  }
}
