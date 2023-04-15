import React from 'react'
import { useEffect,useState } from 'react'
function UseEffectuseOnce() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

  const pointOfmouse = (e)=>{
    console.log("mouse Event Handler");
    setX(e.clientX);
    setY(e.clientY);
  }
  
  useEffect(()=>{
    console.log("useeffect called");
    window.addEventListener('mousemove',pointOfmouse);
    return ()=>{ // ye unmount m chalega 
        console.log("cleanup");
        window.removeEventListener("mousemove",pointOfmouse)
    }
  },[]); //props have also a dependency in use effect in what case 
  /**
   * you assign props  = state in parent  
   * on each render props will change and pass to child 
  */

  return (
    <div>
        
       Hooks X-{x} Y-{y}
    </div>
  )
}

export default UseEffectuseOnce;
