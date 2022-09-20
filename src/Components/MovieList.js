import React from 'react';
import Films from './Data'
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = () => {
   
    return (
		<div>
           
                
               
				{Films.map(({ title, description, posterUrl, rating }) => (
					<MovieCard
						title={title}
						description={description}
						posterUrl={posterUrl}
						rating={rating}
					/>
				))}
		

             
           

          
			
			
		</div>
	)
};

export default MovieList;