import React, { useEffect, useState } from 'react'

export default function HooksInterval() {
    const [count,setCount] = useState(0);
    const  tick = ()=>{
        console.log("tick");
       
        setCount(count+1);
   

    }
    useEffect(()=>{
        console.log("useeffect");
     const interval = setInterval(tick,1000)
     return ()=>{
        console.log("unmount");
        clearInterval(interval);
     }
    },[count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}
