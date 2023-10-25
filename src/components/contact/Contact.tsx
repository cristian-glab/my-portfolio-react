import React, { Component } from 'react'
import './Contact.scss'
import FrontendMentor from '../../images/Frontendmentor.svg'
import Github from '../../images/Github.svg'
import LinkedIn from '../../images/LinkedIn.svg'
import Twitter from '../../images/Twitter.svg'

export default class Contact extends Component {
  render() {
	return (
	  <section className='contact'>
		  <div className="description">
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. 
          Please fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="form">
        form
      </div>
      <div className="footer">
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
		</section>
	)
  }
}


