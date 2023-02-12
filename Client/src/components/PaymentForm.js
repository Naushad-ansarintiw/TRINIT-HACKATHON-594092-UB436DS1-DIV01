import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setamount] = useState(1);

  const elements = useElements();
  const stripe = useStripe();

  const handleInputs=(e)=>{
    console.log(e.target.value)
    setamount(e.target.value)
  }

  const history = useHistory();
  const fetchClientSecret = async () => {
      console.log(amount)
    const data = await axios.post("http://localhost:5000/api/payment/create", {
      amount: amount
    });

    setClientSecret(data.data.clientSecret);
  };
  useEffect(() => {

    fetchClientSecret();
    console.log("clientSecret is >>>>", clientSecret);
  }, []);

  const confirmPayment = async (e) => {
    e.preventDefault();

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
          alert('payment successfull')

        history.push("/home");
      })
      .catch((err) => console.warn(err));
  };

  return (
    <Container>

      <Main>

      <div className="form-floating">
              <input type="number" name="amount" className="form-control top"
                value={amount}
                onChange={handleInputs}
                placeholder="Amount" />
              <label for="floatingInput">FUNDING AMOUNT</label>
            </div>

          <PaymentContainer>
            <h5>Payment Method</h5>

            <div>
              <p>Card Details</p>
              <CardElement />
            </div>
          </PaymentContainer>


          <button onClick={confirmPayment } >Place Order</button>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%; 

  max-width: 1400px;
  background-color: rgb(234, 237, 237);
`;

const Main = styled.div`
  padding: 15px;
  display: flex;
  flex-direction:column;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;



const PaymentContainer = styled.div`
  margin-top: 15px;

  div {
    margin-top: 15px;
    margin-left: 15px;

    p {
      font-size: 14px;
    }
  }
`;


export default Payment;