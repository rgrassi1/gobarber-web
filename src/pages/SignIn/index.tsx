import React from 'react';
import Logo from '../../assets/logo.svg';
import { Background, FormContainer, BackgroundImage } from './styles';

const SignIn: React.FC = () => (
  <Background>
    <FormContainer>
      <img src={Logo} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="forgot">Criar conta</a>
    </FormContainer>
    <BackgroundImage />
  </Background>
);

export default SignIn;
