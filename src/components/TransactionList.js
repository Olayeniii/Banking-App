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

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/transactions').then((response) => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <Container>
      <h2>Transactions</h2>
      {transactions.map((transaction) => (
        <Card key={transaction.id}>
          <CardContent>
            <p>Date: {transaction.date}</p>
            <p>Description: {transaction.description}</p>
            <p>Amount: ${transaction.amount.toLocaleString()}</p>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default TransactionList;
