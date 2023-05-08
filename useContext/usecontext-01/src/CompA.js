import React, { createContext, useCallback, useState } from 'react'
import CompB from './CompB'
const firstname = createContext();
const lastname = createContext();

 function CompA() {
    const [name , setName] = useState("ritika");
    console.log("compA");
  return (
    <div>
        <firstname.Provider value = {{name:name,setName:setName}} >
            <lastname.Provider value = {"shishodia"}>
                <CompB />
            </lastname.Provider>
           
        </firstname.Provider>
    
    </div>
  )
}
export default CompA;
export {firstname,lastname};
