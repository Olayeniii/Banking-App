import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Card = styled.div`
  background: ${(props) => props.theme.colors.card};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const CardContent = styled.div`
  flex: 1;
  min-width: 200px;
  margin-right: 10px;
`;

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/accounts').then((response) => {
      setAccounts(response.data.accounts);
      setBalance(response.data.totalBalance);
    });
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
      <Card>
        <CardContent>
          <h2>Total Balance</h2>
          <p>${balance.toLocaleString()}</p>
        </CardContent>
      </Card>
      {accounts.map((account) => (
        <Card key={account.id}>
          <CardContent>
            <h3>{account.name}</h3>
            <p>Balance: ${account.balance.toLocaleString()}</p>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Dashboard;
