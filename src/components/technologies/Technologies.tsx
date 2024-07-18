import React from 'react';
import './Technologies.scss';
import RingsRight from '../../images/rings-right.svg'

const Technologies: React.FC = () => {

  return (
    <section className='technologies'>
      <img className="rings" src={RingsRight} alt="Rings" />
      <div className='element movement'>
        <h1>HTML</h1>
        <p>4 Years Experience</p>
      </div>
      <div className='element movement'>
        <h1>CSS</h1>
        <p>4 Years Experience</p>
      </div>
      <div className='element movement'>
        <h1>Node</h1>
        <p>3 Years Experience</p>
      </div>
      <div className='element movement'>
        <h1>Angular</h1>
        <p>2 Years Experience</p>
      </div>
      <div className='element movement'>
        <h1>React</h1>
        <p>2 Years Experience</p>
      </div>
      <div className='element movement'>
        <h1>SQL</h1>
        <p>5 Years Experience</p>
      </div>
      <div className='element movement'>
        <h1>NO SQL</h1>
        <p>1 Year Experience</p>
      </div>
      <div className='element movement'>
        <h1>Flutter</h1>
        <p>6 Months Experience</p>
      </div>
      <div className='element movement'>
        <h1>Nest</h1>
        <p>1 Year Experience</p>
      </div>
    </section>
  );
  
}

export default Technologies;