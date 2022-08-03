import React, { useState, useRef,  useEffect } from "react";

//A ref is similar to state in that it persits between render of components, ref does not cause a component to reupdate after it renders or gets changed

//ref is similar to state and u can store a previous value in it


export function UseRefHook() {
    const [name, setName] = useState('');
    const prevName = useRef('');
 
//    function focus() {
//       inputRef.current.focus()
//    }

   useEffect(() => {
    prevName.current = name 
   }, [name])

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
     {/* <button onClick={focus}>Focus</button> */}
    </>
  );
}
