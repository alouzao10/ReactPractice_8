import React from 'react';

import MovieList from './MovieList';

function Movie(props) {
  return (
    <div>
      <h3>
        {props.name}, {props.price}
      </h3>
    </div>
  );
}

export default Movie;
