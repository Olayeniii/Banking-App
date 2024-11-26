import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import LoginRegister from './components/LoginRegister';
import IdentityVerification from './components/IdentityVerification';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import Payment from './components/Payment';
import Header from './components/Header';
import AccountForm from './components/AccountForm';
import Footer from './components/Footer';
import FxSales from './components/FxSales';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// Wrapper component for conditional rendering
const Layout = ({ children }) => {
  const location = useLocation();
  const noHeaderFooterPaths = ['/dashboard'];
  const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      {children}
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Layout>
          <AppContainer>
            <Routes>
              <Route path="/" element={<LoginRegister />} />
              <Route path="/create-account" element={<AccountForm />} />
              <Route path="/identity-verification" element={<IdentityVerification />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<TransactionList />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/fx-sales" element={<FxSales />} />
            </Routes>
          </AppContainer>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
