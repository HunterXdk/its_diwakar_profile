import { useState, useEffect } from 'react';

const images = [
  'https://tse3.mm.bing.net/th/id/OIP.99xHSduU_AMnkUrpTHxvCwHaHa?cb=12&w=558&h=558&rs=1&pid=ImgDetMain&o=7&rm=3',
  'https://cdn.acharyaprashant.org/user-media/86887ba8-8615-44bc-909e-c3ae763ab73c.jpeg' ,
  'https://cdn.acharyaprashant.org/user-media/817bcc0e-cc16-470b-9be1-d6638925f5e9.jpeg'
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <img src={images[index]} alt="Slider" className="w-full h-[400px] object-cover" />
    </div>
  );
}
