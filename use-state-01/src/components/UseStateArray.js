import React, { useState } from 'react'

 function UseStateArray() {
    const [obj ,setObj] = useState([]);
   function handle(){
    setObj([...obj,{id:obj.length,value:Math.floor(Math.random()*10)}]);
   }
  return (
    <div>
        <button onClick = {handle}>change</button>
        <p>{JSON.stringify(obj)}</p>
    </div>
  )
}
export default UseStateArray;
