import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import tabFilm from './Data';


function Desc() {
  let navigate = useNavigate();
  let { title } = useParams();

  return (
    <div>
      {tabFilm.map((item, index) => {
        if (item.title === title) {
          return (
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={item.title}>
              <div className='card p-0 overflow-hidden h-100 shadow'>
                <img src={item.posterUrl} className="card-img-top img-fluid" alt={`${item.posterUrl}`} />
                <div className='card-body'>
                  <h5 className='card-title' >{item.title}</h5>
                  <p className='card-text'>{item.description}</p>
                  <Rating ratingValue={item.rating} />
                </div>
              </div>
            </div>
          )
        } else {
          return null;
        }
      }
      )}

      <button onClick={() => {
        navigate("/");
      }}>
        Accueil
      </button>
    </div>
  )
}

export default Desc