import React, { useState } from 'react'

export default function UseStateObject() {
    const [name,setName] = useState({firstName : "",lastName : ""});
  return (
    <div>
      <input type = "text" value = {name.firstName} onChange={(e)=>setName({ ...name,firstName : e.target.value})} />
      <input type = "text" value = {name.lastName} onChange={(e)=>setName({ ...name,lastName : e.target.value})}/>
     <h1>firstName :-{name.firstName}</h1>
     <h1>lastName :-{name.lastName}</h1>
     <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}
