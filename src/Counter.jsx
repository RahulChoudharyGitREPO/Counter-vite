import React, { useState } from 'react';

export function MyCounter() { 
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
    <div className="counter">
      <h2>Count: {count}</h2>
     
    </div>
     <div className="buttons">
     <button onClick={increment}  className='p-3 m-10 bg-red-300 rounded-md'>Increase</button>
     <button onClick={decrement} className='p-3 m-10 bg-green-300 rounded-md'>Decrease</button>
   </div>
   </>
  );
}
