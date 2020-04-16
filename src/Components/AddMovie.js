import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/StateConext';

function AddMovie() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [movies, setMovies] = useContext(AppContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((currList) => [...currList, { name: name, price: '$' + price }]);
  };

  return (
    <div>
      <form>
        <input
          placeholder='Name'
          type='text'
          name='name'
          value={name}
          onChange={updateName}
        />
        <input
          placeholder='Price ($)'
          type='text'
          name='price'
          value={price}
          onChange={updatePrice}
        />
        <button onClick={addMovie}>Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;
