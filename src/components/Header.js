import React from 'react';
import styled from 'styled-components';
import logo from '../images/Tredils.jpg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px; 
  position: relative; 
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 20px;
`;

const BankName = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
  color: ${(props) => props.theme.colors.secondary}; 
`;

const Header = () => (
  <HeaderContainer>
    <Logo src={logo} alt="Tresdil Bank Logo" />
    <BankName>Tresdils</BankName>
  </HeaderContainer>
);

export default Header;
