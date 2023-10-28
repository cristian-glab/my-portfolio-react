import React, { useState } from 'react'
import './Contact.scss'
import FrontendMentor from '../../images/Frontendmentor.svg'
import FrontendMentorGreen from '../../images/FrontendmentorGreen.svg'
import Github from '../../images/Github.svg'
import GithubGreen from '../../images/GithubGreen.svg'
import LinkedIn from '../../images/LinkedIn.svg'
import LinkedInGreen from '../../images/LinkedInGreen.svg'
import Twitter from '../../images/Twitter.svg'
import TwitterGreen from '../../images/TwitterGreen.svg'

interface contactState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [contact, setContact] = useState<contactState>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar los datos del formulario, por ejemplo, enviarlos a un servidor
    console.log(contact);
  };

  return (
    <section className='contact' id="contact">
      <div className="description">
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. 
          Please fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={contact.name}
              placeholder="name"
              onChange={handleChange}          
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={contact.email}
              placeholder="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={contact.message}
              placeholder="Message"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-submit">
            <button type="submit">Send Message</button>
          </div>  
        </form>
      </div>
      <div className="footer">
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
					<a href="https://twitter.com/faykris">
            <img src={Twitter} alt="Twitter logo" />
            <img src={TwitterGreen} alt="Twitter logo" />
          </a>
        </div>
      </div>
    </section>
  );

}

export default Contact;


