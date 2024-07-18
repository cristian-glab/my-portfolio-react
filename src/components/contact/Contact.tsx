import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import className from 'classnames';
import Modal from 'react-modal';
import './Contact.scss'
import FrontendMentor from '../../images/Frontendmentor.svg'
import FrontendMentorGreen from '../../images/FrontendmentorGreen.svg'
import Github from '../../images/Github.svg'
import GithubGreen from '../../images/GithubGreen.svg'
import LinkedIn from '../../images/LinkedIn.svg'
import LinkedInGreen from '../../images/LinkedInGreen.svg'
import X from '../../images/x-social-media-black-icon.svg';
import XGreen from '../../images/x-social-media-green-icon.svg';
import Rings from '../../images/rings.svg'

interface contactState {
  name: string;
  email: string;
  message: string;
}

Modal.setAppElement('#root');

const Contact: React.FC = () => {
  const [contact, setContact] = useState<contactState>({
    name: '',
    email: '',
    message: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
    const userID = process.env.REACT_APP_EMAILJS_USER_ID || '';
    const templateParams = {
      from_name: contact.name,
      to_name: process.env.REACT_APP_EMAILJS_USER_NAME || '',
      message: contact.message,
      reply_to: contact.email
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log(response);
        setIsSuccess(true);
        setModalContent('Email sent successfully!');
        
      })
      .catch((error) => {
        setIsSuccess(false);
        setModalContent(`Email failed to send: ${error}`);
      })
      .finally(() => {
        setIsModalOpen(true);
        setIsLoading(false);
      });
  };

  return (
    <section className='contact' id="contact">
      <img className="rings" src={Rings} alt="Rings" />
      <div className="description">
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. 
          Please fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="form movement">
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
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
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
					<a href="https://x.com/faykris">
            <img src={X} alt="X logo" />
            <img src={XGreen} alt="X logo" />
          </a>
        </div>
      </div>
      <Modal
        overlayClassName="ModalOverlay"
        className={
          className(isSuccess ? 'Modal modal-success': 'Modal modal-error')
        } isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <h2>Message</h2>
        <p>{modalContent}</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </section>
  );

}

export default Contact;


