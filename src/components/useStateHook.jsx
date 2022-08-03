import React, { useState } from 'react';

function UseStateHook() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')
  // const theme = state.theme
 

 function decrementCount() {
  setCount(prevCount => prevCount - 1)
  setTheme('red')
 }

 function incrementCount() {
   setCount(prevCount => prevCount + 1)
 }
 
  
 return (
  <>
   <button onClick={decrementCount}>-</button>
   <span>{count}</span>
   <span>{theme}</span>
   <button onClick={incrementCount}>+</button>
  </>
);
}

export default UseStateHook