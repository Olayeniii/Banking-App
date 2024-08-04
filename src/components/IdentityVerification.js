import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Instructions = styled.p`
  margin: 20px 0;
  text-align: center;
`;

const Button = styled.button`
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

const IdentityVerification = () => {
  return (
    <Container>
      <h2>Identity Verification</h2>
      <Instructions>
        Please position your face within the circle and press RECORD to verify your identity.
      </Instructions>
      <Button>Start Recording</Button>
    </Container>
  );
};

export default IdentityVerification;
