import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import LoginRegister from './components/LoginRegister';
import IdentityVerification from './components/IdentityVerification';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import Payment from './components/Payment';
import Header from './components/Header';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyles />
      <Header />
      <AppContainer>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/identity-verification" element={<IdentityVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionList />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </AppContainer>
    </Router>
  </ThemeProvider>
);

export default App;
