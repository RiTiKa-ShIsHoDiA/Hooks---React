
import React ,{useContext} from 'react'
import { firstname,lastname } from './CompA';
export default function CompB() {
     const fname = useContext(firstname);
     const lname = useContext(lastname);
     console.log(typeof(fname));
    console.log("compB");
   
      if(fname.name !==  "ramu"){
       fname.setName("ramu");
        
      }
  return (
    <div>
      <h1>my name is {fname.name} {lname}</h1>
    </div>
  )
}
