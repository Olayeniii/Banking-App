import styled from 'styled-components';
import { FaLock, FaEnvelope, FaPhone, FaUser, FaUserAlt, FaCalendarAlt, FaHome, FaCity, FaMapPin, FaKey } from 'react-icons/fa';




export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120vh;
  background: ${(props) => props.theme.colors.background};
  padding: 20px;
  margin-top: 20px; 
  box-sizing: border-box; 
`;

export const Form = styled.form`
  background: ${(props) => props.theme.colors.card};
  padding: 30px; 
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px; 
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 100%; 
    padding: 20px; 
  }
`;


export const Input = styled.input`
  margin-bottom: 15px;  
 padding: 10px 45px 10px 40px;
 border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 13px;  
`;

export const Button = styled.button`
  padding: 12px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};  
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;  
`;

export const PasswordInfo = styled.div`
  margin-top: 10px;
  font-size: 0.7rem;
  color: #666; 
  font-weight: bold;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-top: 5px;
`;

export const StyledListItem = styled.li`
  padding: 8px 12px;
  margin: 5px;
  border-radius: 25px;
  font-size: 0.6rem;
  color: #333;
  border: 1px solid #ddd;
  font-weight: normal;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease;
  background-color: ${(props) => (props.valid ? '#ffe7d9' : '#e0e0e0')};
  color: ${(props) => (props.valid ? '#ff5722' : '#888')};
  box-shadow: ${(props) => (props.valid ? '2px 2px 5px rgba(0, 0, 0, 0.1)' : 'none')};
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;


export const Inpu = styled.input`
  padding: 10px 45px 10px 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  font-size: 12px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const LockIcon = styled(FaLock)`
  position: absolute;
  left: 10px;
  top: 35%;
  transform: translateY(-50%);
  color: #a0a0a0;
  font-size: 20px;
`;

const IconStyle = `
  position: absolute;
  left: 10px;
  top: 35%;
  transform: translateY(-50%);
  color: #a0a0a0;
  font-size: 20px;
`;

export const EmailIcon = styled(FaEnvelope)`
  ${IconStyle}
`;

export const PhoneIcon = styled(FaPhone)`
  ${IconStyle}
`;

export const DateIcon = styled(FaCalendarAlt)`
  ${IconStyle}
`;

export const AddressIcon = styled(FaHome)`
  ${IconStyle}
`;

export const CityIcon = styled(FaCity)`
  ${IconStyle}
`;

export const StateIcon = styled(FaMapPin)`
  ${IconStyle}
`;

export const ZipcodeIcon = styled(FaKey)`
  ${IconStyle}
`;

export const FirstNameIcon = styled(FaUser)`
  ${IconStyle}
`;

export const LastNameIcon = styled(FaUserAlt)`
  ${IconStyle}
`;

//password visibility
export const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #a0a0a0;

  &:focus {
    outline: none;
  }
`;
