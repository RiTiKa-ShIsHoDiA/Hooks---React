import React from 'react'
import { firstname,lastname } from './CompA';
function CompC() {
    console.log("compC");
  return (
    <div>
        <firstname.Consumer> 
            {
                (fname)=>{
                    return (
                        <lastname.Consumer>
                            {
                                (lname)=>{
                                    return <h1>my name is {fname} {lname = lname + "2"}</h1>
                                }
                            }
                        </lastname.Consumer>
                    )
                }
            }
          
            
        </firstname.Consumer>
      
    </div>
  )
}

export default CompC
