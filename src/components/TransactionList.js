import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styling
const TransactionListContainer = styled.div`
  padding: 20px;
  background: #f7f7f7;
  min-height: 100vh;

  h2 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin-bottom: 10px;
      background: white;
    }
  }
`;

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch all transactions
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/all-transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <TransactionListContainer>
      <h2>All Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.description}</span>
            <span>${transaction.amount.toFixed(2)}</span>
            <span>{transaction.date}</span>
          </li>
        ))}
      </ul>
    </TransactionListContainer>
  );
};

export default TransactionList;
