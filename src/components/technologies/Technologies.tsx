import React from 'react';
import './Technologies.scss';
import RingsRight from '../../images/rings-right.svg'

const Technologies: React.FC = () => {

  return (
    <section className='technologies'>
      <img className="rings" src={RingsRight} alt="Rings" />
      <div className='element'>
        <h1>HTML</h1>
        <p>4 Years Experience</p>
      </div>
      <div className='element'>
        <h1>CSS</h1>
        <p>4 Years Experience</p>
      </div>
      <div className='element'>
        <h1>Javascript</h1>
        <p>3 Years Experience</p>
      </div>
      <div className='element'>
        <h1>Angular</h1>
        <p>2 Year Experience</p>
      </div>
      <div className='element'>
        <h1>React</h1>
        <p>2 Year Experience</p>
      </div>
      <div className='element'>
        <h1>SQL</h1>
        <p>4 Years Experience</p>
      </div>
    </section>
  );
  
}

export default Technologies;