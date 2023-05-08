import React from 'react'
import { useReducer } from 'react'
const intialState = {
    firstCounter:0,
    secondCounter:5,
}
function reducer(state,action){
    
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + action.value };
      case "decrement":
        return { ...state, firstCounter: state.firstCounter - action.value };
      case "increment2":
        return { ...state, secondCounter: state.secondCounter + action.value };
      case "decrement2":
        return { ...state, secondCounter: state.secondCounter - action.value };

      case "reset":
        return intialState;
      default:
        return state;
    }
}
function Reducer2() { 
    const [Count,dispatch] = useReducer(reducer,intialState);
  return (
    <div>
        <h1>count : {Count.firstCounter}</h1>
       <button onClick={()=>dispatch({type:"increment",value:1})}>increment</button>
       <button onClick={()=>dispatch({type:"decrement",value:1})}>decrement</button>
       <button onClick={()=>dispatch({type:"reset"})}>reset</button>
       <div>
       <h1>count : {Count.secondCounter}</h1>
       <button onClick={()=>dispatch({type:"increment2",value:5})}>increment 5</button>
       <button onClick={()=>dispatch({type:"decrement2",value:5})}>decrement 5</button>
       </div>
    </div>
  )
}

export default Reducer2;
