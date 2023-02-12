import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import styled from "styled-components";
import './details.css';

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
            <Parent>
                <Child>
                    <NavLink className='child' to={`/messenger/${id}`}><Image><WhatsAppIcon className='image' /></Image></NavLink>
                </Child>
                <Child1>
                    <NavLink className='child1' to={`/payment`}><Image><CurrencyRupeeIcon className='image' /></Image></NavLink>
                </Child1>
            </Parent>

        </>
    )
}
const Parent = styled.div`
    position: relative;
`;
const Child = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 45px;
    width: 45px;
    margin-right: 80px;
    margin-bottom: 40px;
`;
const Child1 = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 45px;
    width: 45px;
    margin-right: 190px;
    margin-bottom: 32px;
`;
const Image = styled.div`
    height: 90px;
    width: 90px;
`;

export default Details