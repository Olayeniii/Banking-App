import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/if.jpeg';


const FooterSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 40px 0;
  text-align: center;
`;

const FooterContainer = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`;

const FooterLogo = styled.div`
  flex: 1;
  img {
    height: 60px; 
    width: auto;
  }
`;

const ContactInfo = styled.div`
  flex: 2;
  font-family: 'Orbitron', sans-serif;
  font-weight: normal;
  text-align: left;
  p {
    margin: 5px 0;
    color: ${(props) => props.theme.colors.secondary};
  }
  .info-label {
    font-weight: bold;
    margin-right: 5px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: 'Orbitron', sans-serif;
  font-weight: normal;
  padding: 20px 0;
  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  
  return (
    <FooterSection>
      <FooterContainer>
        <FooterTop>
          <FooterLogo>
            <Link to="/">
            <img src={logo} alt="Bank Logo" />
            </Link>
          </FooterLogo>
          
          <ContactInfo>
            <p><span className="info-label">Phone:</span> (+234) 81-7895-7890</p>
            <p><span className="info-label">Email:</span> support@tresdilbank.com</p>
            <p><span className="info-label">Address:</span> 123 Ire Street, Surftres, Nigeria</p>
          </ContactInfo>
        </FooterTop>

        <FooterLinks>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </FooterLinks>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
