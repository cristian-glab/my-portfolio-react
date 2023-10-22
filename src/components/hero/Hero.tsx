import React, { Component } from 'react'
import './Hero.scss'
import FrontendMentor from '../../images/Frontendmentor.svg'
import Github from '../../images/Github.svg'
import LinkedIn from '../../images/LinkedIn.svg'
import Twitter from '../../images/Twitter.svg'
import MyPhoto from '../../images/my-photo.png'

export default class Hero extends Component {
  render() {
	return (
	  <section className='hero'>
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
				<button>
					Contact me
				</button>
			</div>
			</div>
			<div className="image">
				<img src={MyPhoto} alt="profile" />
			</div>
			
		</div>
	  </section>
	)
  }
}
