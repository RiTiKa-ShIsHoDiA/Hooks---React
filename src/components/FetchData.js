import axios from "axios";
import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response);
           setData(response.data);

        }).catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <div>
       {data.length !== 0 && data.map((value)=><p key = {value.id}>{value.title}</p>)}
    </div>
  )
}
