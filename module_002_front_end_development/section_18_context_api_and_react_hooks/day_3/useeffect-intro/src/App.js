import React, { useEffect, useState } from 'react';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  const [randNumber, setRandNumber] = useState(1);
  const [multiple, setMultiple] = useState(false);
  
  useEffect(() => {
    let count = 0;
    const randIntSetInterval = setInterval(() => {
      count += 1;
      if (count === 10) {
        setRandNumber(getRandomIntInclusive(1, 100));
        count = 0;
      }
    }, 1000);

    return () => clearInterval(randIntSetInterval);
  }, [])

  useEffect(() => {
    if (randNumber % 3 === 0 || randNumber % 5 === 0) {
      setMultiple(true)
      setTimeout(() => {
        setMultiple(false);
      }, 4000);
    }
  }, [randNumber]);

  return (
    <>
      <p>{randNumber}</p>
      {multiple && <p>Acerto</p>}
    </>
  );
}

export default App;
