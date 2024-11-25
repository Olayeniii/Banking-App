import React from 'react';
import styled from 'styled-components';
import logo from '../images/Tredils.jpg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.alignCenter ? 'center' : 'flex-start')};
  padding: 20px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 50px;
  margin-right: ${(props) => (props.showName ? '20px' : '0')};
`;

const BankName = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
  display: ${(props) => (props.showName ? 'block' : 'none')};
  color: ${(props) => props.theme.colors.secondary};
`;

const Header = ({ showLogo = true, showName = true, alignCenter = false, fullWidth = false }) => (
  <HeaderContainer alignCenter={alignCenter} fullWidth={fullWidth}>
    {showLogo && <Logo src={logo} alt="Tresdils Bank Logo" showName={showName} />}
    {showName && <BankName>Tresdils</BankName>}
  </HeaderContainer>
);

export default Header;
