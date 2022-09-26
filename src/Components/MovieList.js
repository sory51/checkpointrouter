import React, { useState } from 'react';
import Films from './Data'
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = () => {
	const [search, setSearch] = useState('');
	let dataSearch = Films.filter(item => {
		return Object.keys(item).some(key =>
			item[key].toString().toLowerCase().includes(search.toString().toLocaleLowerCase()))
	});
	return (
		<div>
			<div className='row'>
				<div className='col-12 mb-5'>
					<div className='mb-3 col-4 mx-auto text-center'>
						<label className='form-label h5 mx-2'>Search</label>
						<input
							type='text'
							className='from-control'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</div>
				{dataSearch.map((item, index) => {
					return (
						<MovieCard
							key={index}
							title={item.title}
							description={item.description}
							posterUrl={item.posterUrl}
							rating={item.rating}
						/>
					)
				})}
			</div>
		</div>
	)
};

export default MovieList;