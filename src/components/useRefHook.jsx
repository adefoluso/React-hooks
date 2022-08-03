import React, { useState } from "react";

export function UseRefHook() {
  const [name, setname] = useState("");

  return (
    <>
      <input value={name} onChange={(e) => setname(e.target.value)} />
      <div>My name is {name}</div>
    </>
  );
}
