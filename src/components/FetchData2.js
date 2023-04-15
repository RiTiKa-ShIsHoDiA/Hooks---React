import axios from "axios";
import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [data,setData] = useState({});
    const [idInput,setIdinput] = useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idInput}`).then((response)=>{
           console.log(response);
           setData(response.data);
           console.log(idInput);
        }).catch((error)=>{
            console.log(error);
            alert(error);
        })
    },[idInput])
  return (
    <div>
        <input type = "text" value = {idInput} onChange={(e)=>setIdinput(e.target.value)}/>
        <br/>
          {data.title}
    </div>
  )
}
