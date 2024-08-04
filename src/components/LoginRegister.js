import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  padding: 20px;
`;

const Form = styled.form`
  background: ${(props) => props.theme.colors.card};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container>
      <Form>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {!isLogin && (
  <div>
    <Input type="text" placeholder="First Name" />
    <Input type="text" placeholder="Last Name" />
    <Input type="date" placeholder="Date of Birth" />
    <Input type="text" placeholder="Address" />
  </div>
)}
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
        <Button type="button" onClick={toggleLoginRegister}>
          {isLogin ? 'Create an account' : 'Back to login'}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginRegister;
