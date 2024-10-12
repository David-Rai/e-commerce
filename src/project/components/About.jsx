import React from 'react';
import Nav from './Nav';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <Nav />
      <h1 className="text-4xl font-bold text-center text-green-700 mb-4">About Us</h1>
      
      <p className="text-lg text-gray-700 max-w-2xl text-center px-4">
        Welcome to our e-commerce website! We are dedicated to providing you with the best online shopping experience.
        Our mission is to offer a wide range of high-quality products at competitive prices. 
        Our team works tirelessly to ensure that you find exactly what you're looking for, and we are committed to exceptional customer service.
      </p>
      <p className="text-lg text-gray-700 max-w-2xl text-center px-4 mt-4">
        Whether you're searching for the latest trends or everyday essentials, we have something for everyone.
        Thank you for choosing us for your shopping needs. We look forward to serving you!
      </p>
    </div>
  );
};

export default About;
