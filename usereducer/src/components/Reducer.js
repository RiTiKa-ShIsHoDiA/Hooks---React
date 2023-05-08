import React from 'react'
import { useReducer } from 'react'
const intialState = 0
function reducer(state,action){
    switch(action){
        case "increment":
           return state + 1;
        case "decrement":
            return state - 1; 
        case "reset":
            return intialState;
        default :
           return state;          
    }
}
function Reducer() { 
    const [Count,dispatch] = useReducer(reducer,intialState);
  return (
    <div>
        <h1>count : {Count}</h1>
       <button onClick={()=>dispatch("increment")}>increment</button>
       <button onClick={()=>dispatch("decrement")}>decrement</button>
       <button onClick={()=>dispatch("reset")}>reset</button>

    </div>
  )
}

export default Reducer;
