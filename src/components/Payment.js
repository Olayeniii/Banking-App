import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Payment = () => {
  const [paymentData, setPaymentData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h2>Make a Payment</h2>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="recipient" placeholder="Recipient" onChange={handleChange} />
        <input type="number" name="amount" placeholder="Amount" onChange={handleChange} />
        <Button type="submit">Send Payment</Button>
      </Form>
    </Container>
  );
};

export default Payment;
