import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [light, setLight] = useState('green');

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (light) {
        case 'red':
          setLight('yellow');
          setTimeout(() => setLight('green'), 500);
          break;
        case 'yellow':
          setLight('green');
          setTimeout(() => setLight('red'), 3000);
          break;
        case 'green':
          setLight('red');
          setTimeout(() => setLight('yellow'), 4000);
          break;
        default:
          setLight('red');
      }
    }, getTimerDuration(light));

    return () => clearTimeout(timer);
  }, [light]);

  const getTimerDuration = (currentLight) => {
    switch (currentLight) {
      case 'red':
        return 4000;
      case 'yellow':
        return 500;
      case 'green':
        return 3000;
      default:
        return 0;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className={`w-20 h-20 rounded-full m-4 transition duration-300 ${light === 'red' ? 'bg-red-500' : 'bg-red-200'}`}></div>
      <div className={`w-20 h-20 rounded-full m-4 transition duration-300 ${light === 'yellow' ? 'bg-yellow-500' : 'bg-yellow-200'}`}></div>
      <div className={`w-20 h-20 rounded-full m-4 transition duration-300 ${light === 'green' ? 'bg-green-500' : 'bg-green-200'}`}></div>
    </div>
  );
};

export default TrafficLight;
