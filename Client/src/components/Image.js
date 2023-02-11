import React,{useState} from 'react'
import { useEffect } from 'react';

const Image = () => {

    const [imd,setImd]  = useState({});
    const data = async () =>{
        const img = await fetch('/img',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data1 = await img.json();
        setImd(data1);
    };
    
     
    useEffect(()=>{
        data();
    },[])
  return (
    <div>
        <img src={imd.img}></img>
    </div>
  )
}

export default Image