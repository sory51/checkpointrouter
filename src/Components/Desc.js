import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import tabFilm from './Data';


function Desc() {
  let navigate = useNavigate();
  let {description}=useParams();
  let detailMovie=tabFilm.filter(item=>item.title===description);
  return (
    <div>
     
      <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={detailMovie.title}>
             <div className='card p-0 overflow-hidden h-100 shadow'>
                   <img src={detailMovie.posterUrl} className="card-img-top img-fluid" alt='tetdtt'/>
                   <div className='card-body'>

                     <h5 className='card-title' >{detailMovie.title}</h5>
                      <p className='card-text'>{detailMovie.description}</p>
                    <Rating ratingValue={detailMovie.rating} />
                   </div>
                  
                   </div>
             </div>  
    
    <button onClick={()=>{
      navigate("/");
    }}>
     Accueil
    </button>
    </div>
  )
}

export default Desc