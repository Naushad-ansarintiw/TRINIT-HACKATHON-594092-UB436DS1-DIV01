import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components"

const Dashboard = () => {
    const {id} = useParams();
    const history = useHistory();

    const [card, setcard] = useState([]);

    const fetchdata = async () => {
        const res = await fetch("http://localhost:5000/api/allngosdata", {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            console.log("error to fetch all data in p desboard");
        }
        else {
            setcard(data);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);



    return (
        <>
            <Container>
                <Main>        {card &&
                    card.map((ngo) => {
                        return (
                            <Card
                                key={ngo._id}
                                id={id}
                                idngo={ngo._id}
                                typeOfNgo={ngo.anotherdata[0].typeofngo}
                                location={ngo.anotherdata[0].location}
                                plans={ngo.anotherdata[0].plans}
                                imageURL={ngo.anotherdata[0].imageUrl}
                            />
                        )
                    })}
                </Main>
            </Container>

        </>
    )
}


const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;
  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }
  /* Tablets */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Dashboard;