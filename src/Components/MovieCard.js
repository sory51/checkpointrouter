import React from 'react';

import '../styles/MovieCard.css';
import Rating from './Rating';
import { useNavigate } from "react-router-dom";


const MovieCard = ({ title, description, posterUrl, rating }) => {
  let navigate = useNavigate();

  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={title}>
      <div className='card p-0 overflow-hidden h-100 shadow'>
        <img src={posterUrl} className="card-img-top img-fluid" alt='tetdtt' />
        <div className='card-body'>
          <h5 className='card-title' >{title}</h5>
          <p className='card-text'>{description}</p>
          <Rating ratingValue={rating} />
          <button
            onClick={() => { navigate(`/title/${title}`) }}
          >
            Description
          </button>
        </div>
      </div>
    </div>
  )
};

export default MovieCard;
