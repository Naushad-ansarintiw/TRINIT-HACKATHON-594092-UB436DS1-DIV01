import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import Rating from "@material-ui/lab/Rating";
// import { useStateValue } from '../StateProvider.js';

const Card = ({ idngo,id,imageURL, typeOfNgo, location, plans }) => {

    const history = useHistory();

    // const getNgoProfile = async()=>{
    //     const particularNgoinfo = await fetch(`http://localhost:5000/api/getsinglengoinfo/${id}`,{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });


    // }

    const READMORE = (e) => {

        history.push(`/details/${idngo}`);
    }

    return (
        <Container>
            <Image>
                <img src={imageURL} alt="" />
            </Image>
            <Description>
                <h5>{typeOfNgo}</h5>
                <p>
                    {location}
                </p>
                <p>{plans}</p>
               
               <NavLink to={`/messenger/${id}`}> Chat US </NavLink>
                <button onClick={READMORE}>READ MORE</button>
            </Description>
        </Container>
    )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;