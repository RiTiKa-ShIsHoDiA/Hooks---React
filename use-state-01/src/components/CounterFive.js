import React, { useState } from 'react'

export default function CounterFive() {
    const [ count,setCount] = useState(0);
    function incrementFive(){
        for (let index = 0; index < 5 ; index++) {
          console.log("update done")
          setCount((prev)=> prev+1);       
        }
    }
  return (
    <div>
        <button onClick = {incrementFive}>
            +5
        </button>
        <p>count is {count}</p>
      
    </div>
  )
}
