import React, { useState } from 'react'
import UseEffectuseOnce from './UseEffectuseOnce';

function CleanUp() {
    const [display , setDisplay]  =useState(true);
  return (
    <div>
         <button onClick = {()=>{setDisplay(!display)}}>toggle</button>
         {display && <UseEffectuseOnce/>}
    </div>
  )
}

export default CleanUp
