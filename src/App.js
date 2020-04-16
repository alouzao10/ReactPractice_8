import React from 'react';
import './App.css';

import { AppProvider } from './Context/StateConext';

import Nav from './Components/Nav';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';

function App() {
  return (
    <AppProvider>
      <div className='App'>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </AppProvider>
  );
}

export default App;
