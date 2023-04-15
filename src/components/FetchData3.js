import axios from "axios";
import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [data,setData] = useState({});
    const [idInput,setIdinput] = useState(1);
    const [idbutton,setIdButton] = useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idbutton}`).then((response)=>{
            console.log(response);
           setData(response.data);
           console.log(idInput);
        }).catch((error)=>{
            console.log(error);
            alert(error);
        })
    },[idbutton]);
    function handleClick(){
        setIdButton(idInput)
    }
  return (
    <div>
        <input type = "text" value = {idInput} onChange = {(e)=>setIdinput(e.target.value)}/>
        <button type = "text" onClick = {handleClick}>fetch data</button>
        <br/>
          {data.title}
    </div>
  )
}
