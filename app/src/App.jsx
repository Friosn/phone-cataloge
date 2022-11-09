import './App.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <header></header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
