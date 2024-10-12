// Index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Card from './Cart';
import Details from './Details';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />} /> {/* Independent */}
      <Route path="/card" element={<Card />} /> {/* Independent */}
      <Route path="/details" element={<Details />} /> {/* Independent */}
    </Routes>
  );
};

export default Index;
