import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// import {useState} from "react"

const Details = () => {

    const { id } = useParams();


    const [Details, setDetails] = useState('');

    const fetchdata = async () => {
        const res = await fetch(`http://localhost:5000/api/getsinglengoinfo/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        // console.log(data);
        if (res.status !== 201) {
            console.log('no data available');
        } else {
            console.log('getdata');
            setDetails(data);
        }
    };

    useEffect(() => {

        fetchdata();
    }, []);

    return (
        <>
            {
                Details && Object.keys(Details).length && <div>
                    <div class="container-fluid bg-light p-5">
                        <h1 class="display-4">MISSION</h1>
                        <p class="lead">{Details.anotherdata[0].plans}</p>
                        <hr class="my-4" />
                    </div>
                    <div class="container-fluid bg-light p-5">
                        <h1 class="display-4">HISTORY</h1>
                        <p class="lead">{Details.anotherdata[0].previouswork}</p>
                        <hr class="my-4" />
                    </div>
                    <div class="container-fluid bg-light p-5">
                        <h1 class="display-4">IMPACT</h1>
                        <p class="lead">{Details.anotherdata[0].endgoal}</p>
                        {/* <hr class="my-4" /> */}
                    </div>
                </div>
            }

        </>
    )
}

export default Details