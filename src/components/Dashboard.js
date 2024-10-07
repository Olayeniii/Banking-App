import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// components styling
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  padding: 40px;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 2px solid #ddd;
`;

const WelcomeMessage = styled.h2`
  font-family: 'Orbitron', sans-serif;
  color: ${(props) => props.theme.colors.primary};
  font-size: 28px;
`;

const AccountDetails = styled.div`
  font-family: 'Orbitron', sans-serif;
  color: #666;
  text-align: right;
`;

const AccountInfo = styled.p`
  margin: 5px 0;
`;

const BalanceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const BalanceLabel = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

const BookBalance = styled.span`
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
  color: #333;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  flex: 1;
  margin: 0 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const ShortcutsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
`;

const ShortcutButton = styled(Button)`
  background-color: #e0e0e0;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 14px;
  text-align: center;
  padding: 20px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

// Dashboard Component
const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAccountNumber, setSelectedAccountNumber] = useState(null); 
  const [fundAmount, setFundAmount] = useState('');
  const navigate = useNavigate();

  const fetchDashboardData = useCallback(async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/'); 
        return;
      }
      const response = await axios.get('http://localhost:5000/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBalance(response.data.totalBalance || 0);
      setAccounts(response.data.accounts || []);
      setFirstName(response.data.firstName || ''); 
    } catch (error) {
      console.error('Error fetching dashboard data:', error.response || error.message);
      if (error.response && error.response.status === 401) {
        navigate('/');
      }
    }
  }, [navigate]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const openFundAccountModal = (accountNumber) => {
    setSelectedAccountNumber(accountNumber);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAccountNumber(null);
    setFundAmount('');
  };

  const handleFundAccount = async () => {
    if (!fundAmount || isNaN(fundAmount) || fundAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    try {
      const token = localStorage.getItem("authToken");
      await axios.post(
        'http://localhost:5000/fund-account', 
        { accountNumber: selectedAccountNumber, amount: parseFloat(fundAmount) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Account funded successfully!');
      fetchDashboardData();  
      closeModal();  
    } catch (error) {
      console.error('Error funding account:', error.response || error.message);
      alert('Failed to fund the account. Please try again.');
    }
  };

  return (
    <DashboardContainer>
      <Header>
        <WelcomeMessage>Hello, {firstName}!</WelcomeMessage>
        {accounts.length > 0 ? (
          <AccountDetails>
            <AccountInfo>Account Type: {accounts[0].accountType}</AccountInfo>
            <AccountInfo>Account Number: {accounts[0].accountNumber}</AccountInfo>
          </AccountDetails>
        ) : (
          <AccountDetails>Loading account details...</AccountDetails>
        )}
      </Header>

      <BalanceSection>
        <BalanceLabel>Book Balance:</BalanceLabel>
        <BookBalance>${balance.toLocaleString()}</BookBalance>
      </BalanceSection>

      <ActionButtons>
        <Button onClick={() => openFundAccountModal(accounts.length > 0 ? accounts[0].account_id : null)}>
          Fund Account
        </Button>
        <Button onClick={() => navigate('/transfer')}>Transfer</Button>
        <Button onClick={() => navigate('/fx-sales')}>FX Sales</Button>
      </ActionButtons>

      <ShortcutsSection>
        <ShortcutButton onClick={() => navigate('/transactions')}>Transactions</ShortcutButton>
        <ShortcutButton>Buy airtime</ShortcutButton>
        <ShortcutButton>Buy data</ShortcutButton>
      </ShortcutsSection>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Fund Account</h2>
            <input type="number" placeholder="Enter amount" value={fundAmount} onChange={(e) => setFundAmount(e.target.value)} />
            <Button onClick={handleFundAccount}>Submit</Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
