import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const AccountForm = () => {
  const [accountType, setAccountType] = useState('');
  //const location = useLocation(); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post('http://localhost:5000/create-account', 
        { accountType }, 
        { headers: { 'Authorization': `Bearer ${token}` } } 
      );
      console.log('Account created successfully:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <select name="accountType" onChange={handleChange}>
        <option value="">Select Account Type</option>
        <option value="savings">Savings</option>
        <option value="checking">Current</option>
        
      </select>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default AccountForm;
