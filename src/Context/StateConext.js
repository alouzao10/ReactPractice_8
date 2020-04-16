import React, { useState, createContext } from 'react';

// Use the Context to use the state from the Provider in the Component
export const AppContext = createContext();

// Provides the state to the different components by wrapping all components within
export const AppProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 1,
    },
    {
      name: 'Top Gun',
      price: '$45',
      id: 2,
    },
    {
      name: 'Star Wars',
      price: '$55',
      id: 3,
    },
  ]);

  return (
    // Renders the components to accept the global state
    <AppContext.Provider value={[movies, setMovies]}>
      {props.children}
    </AppContext.Provider>
  );
};
