import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

import LandingPage from './components/landingPage/LandingPage';


import './App.css';
import './general.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
