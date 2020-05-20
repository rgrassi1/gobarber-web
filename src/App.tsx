import React from 'react';
import { AppProvider } from './hooks';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
