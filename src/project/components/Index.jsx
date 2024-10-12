// Index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Card from './Card';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="product" element={<Products />} /> {/* Nested under Home */}
      </Route>
      <Route path="/about" element={<About />} /> {/* Independent */}
      <Route path="/card" element={<Card />} /> {/* Independent */}
    </Routes>
  );
};

export default Index;
