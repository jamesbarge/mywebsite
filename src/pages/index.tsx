import React from 'react';

const Home = () => {
  return (
    <div
      className="flex flex-col items-end justify-center h-screen px-10 bg-white text-gray-900"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <h1 className="text-4xl font-bold mb-4">Hi, I'm James Barge</h1>
      <p className="text-lg mb-6">
        I'm a product manager in London. I help make great products at{' '}
        <a href="#" className="text-blue-600 hover:text-blue-800">
          Keebo
        </a>
        . Before that, I worked at{' '}
        <a href="#" className="text-blue-600 hover:text-blue-800">
          Herd
        </a>
        ,{' '}
        <a href="#" className="text-blue-600 hover:text-blue-800">
          Public Health England
        </a>
        , and{' '}
        <a href="#" className="text-blue-600 hover:text-blue-800">
          LoveHomeSwap
        </a>
        .
      </p>
      <div className="flex space-x-4 mb-4">
        <a
          href="https://twitter.com/jamesbrge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com/ivlcense"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          Instagram
        </a>
        <a
          href="mailto:jdwbarge@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Home;
