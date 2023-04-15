import { useEffect, useState } from "react";
import React  from 'react'

function UseEffectcounter() {
  console.log("chala");
    const [Count,setCount] = useState(0);
    var [name,setName] = useState("");
    useEffect(()=>{
        console.log("useeffect chala");
        
      document.title = `clicked ${Count}`;
    },[name,Count]);   //conditionally run effect
  return (
    <div>
      <input type = "text" onChange={(e) => setName(name = e.target.value)}/>
        <button onClick = {()=>setCount(Count+1)}>clicked </button>
         <p>{Count}{name}</p>
    </div>
  )
}
export default UseEffectcounter;
