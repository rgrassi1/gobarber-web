import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Background, Container, Profile, SignOut } from './styles';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Background>
      <Container>
        <img src={logo} alt="GoBarber" />

        <Profile>
          <img
            src="https://avatars2.githubusercontent.com/u/29978669?s=460&u=2154777fd9f76fc5cbdc2a275276d2bd830de78e&v=4"
            // src={user.avatar_url}
            alt={user.name}
          />
          <div>
            <span>Bem vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>
        <SignOut>
          <button onClick={signOut} type="button">
            <FiPower />
          </button>
        </SignOut>
      </Container>
    </Background>
  );
};

export default Header;
