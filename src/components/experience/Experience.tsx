import React, { useState } from 'react';
import voluntarios from '../../images/experience/voluntarios.jpeg';
import donaciones from '../../images/experience/donaciones.jpeg';
import conecxion12 from '../../images/experience/conexion-12.jpeg';
import g12Eventos from '../../images/experience/g12-eventos.jpeg';
import './Experience.scss';

const images = [
  conecxion12, donaciones, g12Eventos, voluntarios
];
const Experience: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className='experience' id="experience">
      <div className="title">
        <h1>Last Experience</h1>
      </div>
      <p>
        New characteristics and modules in every website were created
        as are administration, events payment, donations and
        subscription of volunteers.
      </p>
      <div className="slider-container movement">
        <div className="slider">
          <div
            className="slides"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="slide"
              />
            ))}
          </div>
        </div>
        <button className="slider-btn prev" onClick={prevSlide}>
        </button>
        <button className=" slider-btn next" onClick={nextSlide}>
        </button>
      </div>
      <h3>
        Company: <span>G Lab</span>
      </h3>
      <ul className="techs">
        <li>Angular</li>
        <li>Material</li>
        <li>Nest</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Bootstrap</li>
      </ul>
    </section>
  );
}

export default Experience;

