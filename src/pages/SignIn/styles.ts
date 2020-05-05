import styled from 'styled-components';
import { shade } from 'polished';
import image from '../../assets/sign-in-background.png';

export const Background = styled.div`
  background-color: #312e38;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 64px 0;
    width: 340px;
  }

  form > h1 {
    text-align: center;
    margin-bottom: 24px;
    color: #fff;
    font-size: 2.5rem;
  }

  form > input {
    background: #212329;
    color: #f4ede8;
    border-radius: 10px;
    border: 2px solid #212329;
    padding: 16px;
    width: 100%;
    font-size: 1.3rem;
  }

  form > input::placeholder {
    color: #666360;
  }

  form > input + input {
    margin-top: 8px;
  }

  form > button {
    background: #ff9000;
    color: #312e38;
    font-weight: 500;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    margin-top: 16px;
    font-size: 1.3rem;

    transition: background-color 0.2s;
  }

  form > button:hover {
    background: ${shade(0.2, '#ff9000')};
  }

  form > a {
    color: #f4ede8;
    display: block;
    text-align: center;
    margin-top: 24px;
    text-decoration: none;
    font-size: 1.3rem;

    transition: color 0.2s;
  }

  form > a:hover {
    color: ${shade(0.2, '#f4ede8')};
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    font-size: 1.3rem;

    display: flex;
    align-items: center;
    text-align: center;

    svg {
      margin-right: 16px;
    }

    transition: color 0.2s;
  }

  > a:hover {
    color: ${shade(0.2, '#ff9000')};
  }
`;

export const BackgroundImage = styled.div`
  flex: 1;
  background: url(${image}) no-repeat center;
  background-size: cover;
`;
