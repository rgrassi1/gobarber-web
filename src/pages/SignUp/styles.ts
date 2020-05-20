import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import image from '../../assets/sign-up-background.png';

export const Background = styled.div`
  background-color: #312e38;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  animation: ${appearFromRight} 1s;

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

    transition: color 0.2s;
  }

  > a > svg {
    margin-right: 16px;
  }

  > a:hover {
    color: ${shade(0.2, '#ff9000')};
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  background: url(${image}) no-repeat center;
  background-size: cover;
`;
