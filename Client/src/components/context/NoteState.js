import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const host = 'http://localhost:5000';

    const productInitial = [];
    const [products,setProducts] = useState(productInitial);


    // Get ALl Note 
    const getNotes = async()=>{
        // API CALL
        const res = await fetch(`${host}/api/allngosdata`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(products)

        const data = await res.json();
        setProducts(data);
    }

    return (
        <NoteContext.Provider value={{products,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}


export default NoteState;
