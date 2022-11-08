import './App.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
