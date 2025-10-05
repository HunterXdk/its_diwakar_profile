import { useEffect, useState } from 'react';

const quotes = [
  "The truth cannot be understood from books, but from inner silence. – Acharya Prashant",
  "Do not seek comfort, seek clarity. – Acharya Prashant",
  "Real spirituality is not an escape but a confrontation. – Acharya Prashant",
];

export default function Quotes() {
  const [index, setIndex] = useState(0);

  function nextQuote(){
     setIndex(prev => (prev + 1) % quotes.length);
  }

  useEffect(() => {
      const interval = setInterval(() => {
        nextQuote() ;
      }, 3000);
      return () => clearInterval(interval);
    }, []);

  return (
    <section className="bg-white p-6 text-center shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Quotes</h2>
      <p className="italic text-lg mb-4 text-orange-600">"{quotes[index]}"</p>
      <button
        onClick={nextQuote}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Next Quote
      </button>
    </section>
  );
}
