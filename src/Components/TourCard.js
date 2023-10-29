import React from 'react';
import '../Style/style.css'
import { Link } from 'react-router-dom';
const TourCard = ({tour}) => {
  return (
    <div className='cardTour'>
      <img src={tour.image} alt={tour.name} />
    <div className='tourContent'>
      <h2>{tour.name}</h2>
      <p>{tour.description}</p>
      <Link to={`/tour/${tour.id}`} ><button id='showBtn'>Show Plan</button></Link>
      </div>
    </div>
  );
};

export default TourCard;
