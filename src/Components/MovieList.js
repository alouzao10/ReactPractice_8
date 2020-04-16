import React, { useState, useContext } from 'react';

import Movie from './Movie';

import { AppContext } from '../Context/StateConext';

function MovieList() {
  const [movies, serMovies] = useContext(AppContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
