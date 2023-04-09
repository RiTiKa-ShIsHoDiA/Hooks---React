import React from 'react'
import { useState } from 'react';
export default function Counter() {
   // console.log(useState(0));
   const [count,setCount] = useState(0);
   console.log("chala");
  return (
    <div>
      <button onClick = {()=>setCount(count+1)}>+1</button>
      <p>count is {count}</p>
    </div>
  )
}
