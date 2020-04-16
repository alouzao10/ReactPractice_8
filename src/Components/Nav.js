import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/StateConext';

function Nav() {
  const [movies, serMovies] = useContext(AppContext);

  return (
    <div>
      <h1>My Movie List</h1>
      <p>Number of Movies: {movies.length}</p>
    </div>
  );
}

export default Nav;
