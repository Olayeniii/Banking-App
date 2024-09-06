import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  FaEye, FaEyeSlash } from 'react-icons/fa';
import { Container, Form, Input, ButtonContainer, Button, StyledList, StyledListItem, Inpu} from '../styles/FormStyles';
import {LockIcon, EmailIcon, PhoneIcon, DateIcon, AddressIcon, CityIcon, StateIcon, ZipcodeIcon, FirstNameIcon, LastNameIcon, PasswordInfo, InputContainer, ToggleButton} from '../styles/FormStyles';



const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    dateofbirth: '',
    email: '',
    password: '',
    address: '',
    city: '',
    stateoforigin: '',
    zipcode: '',
    accountnumber: '',
    accounttype: ''
  });

  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const endpoint = isLogin ? 'http://localhost:5000/login' : 'http://localhost:5000/register';

    try {
      const response = await axios.post(endpoint, formData);
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      navigate(isLogin ? '/dashboard' : '/create-account');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
// Check if password meets criteria
const hasLowerCase = /[a-z]/.test(formData.password);
const hasUpperCase = /[A-Z]/.test(formData.password);
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
const hasNumber = /\d/.test(formData.password);
const isMinLength = formData.password.length >= 8;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {!isLogin && (
          <div>
          <InputContainer>
            <FirstNameIcon />
            <Input type="text" placeholder="First Name" name="firstname" value={formData.firstname} onChange={handleChange} required />
          </InputContainer>
          <InputContainer>
            <LastNameIcon />
            <Input type="text" placeholder="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} required />
          </InputContainer>
          <InputContainer>
            <PhoneIcon />
            <Input type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </InputContainer>
          <InputContainer>
            <DateIcon />
            <Input type="date" placeholder="Date of Birth" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
          </InputContainer>
          <InputContainer>
            <AddressIcon />
            <Input type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} required />
          </InputContainer>
          <InputContainer>
            <CityIcon />
            <Input type="text" placeholder="City" name="city" value={formData.city} onChange={handleChange} required />
          </InputContainer>
          <InputContainer>
            <StateIcon />
            <Input type="text" placeholder="State of Origin" name="stateoforigin" value={formData.stateoforigin} onChange={handleChange} required />
          </InputContainer>
          <InputContainer>
            <ZipcodeIcon />
            <Input type="number" placeholder="Zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} required />
          </InputContainer>
        </div>
        )}
        <InputContainer>
        <EmailIcon/>
      <Input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required/>
      </InputContainer>
        <InputContainer>
      <LockIcon />
      <Inpu
        type={passwordVisible ? 'text' : 'password'} placeholder="Password" name="password" value={formData.password} onChange={handleChange} required/>
      <ToggleButton type="button" onClick={togglePasswordVisibility}> {passwordVisible ? <FaEye /> : <FaEyeSlash />}</ToggleButton> 
      </InputContainer> 
        
        {!isLogin && (
          <PasswordInfo>
          Password must contain:
          <StyledList>
            <StyledListItem valid={hasLowerCase}>1 lowercase</StyledListItem>
            <StyledListItem valid={hasUpperCase}>1 uppercase</StyledListItem>
            <StyledListItem valid={hasSpecialChar}>1 special characters</StyledListItem>
            <StyledListItem valid={isMinLength}>8 characters min</StyledListItem>
            <StyledListItem valid={hasNumber}>1 number</StyledListItem>
          </StyledList>
        </PasswordInfo>
        )}
        
        <ButtonContainer>
          <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
          <Button type="button" onClick={toggleLoginRegister}>
            {isLogin ? 'Create an account' : 'Back to login'}
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default LoginRegister;
