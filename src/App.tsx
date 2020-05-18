import React from 'react';
import { AuthProvider } from './context/AuthContext';
import GlobalStyle from './styles/global';
import ToastContainer from './components/ToastContainer';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer />

      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
