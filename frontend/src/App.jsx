import React from 'react';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Quotes from './components/Quotes';
import Books from './components/Books';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <Slider />
      <Quotes />
      <Books />
      <h1 className="text-red-600 font-semibold ml-7 mb-1"> GET IN TOUCH </h1>
      <div className="text-blue font-bold ml-7 text-blue-500">Mr. Diwakar Kushwaha </div>
      <a href="tel:+91958488" className="text-blue-600  font-bold mx-auto pb-5 underline hover:text-blue-800">
       📞 Call Now: +91 958488XXXX
      </a>

    </div>
  );
}
