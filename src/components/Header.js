import React from 'react';
import styled from 'styled-components';
import logo from '../images/Tredils.jpg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
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
`;

const Header = () => (
  <HeaderContainer>
    <Logo src={logo} alt="Tresdil Bank Logo" />
    <BankName>Tresdil Bank</BankName>
  </HeaderContainer>
);

export default Header;
