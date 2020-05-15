import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isWithError: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 16px;
  background: #212329;
  border-radius: 10px;
  border: 2px solid #212329;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isWithError &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  svg {
    margin-right: 16px;
  }

  input {
    background: transparent;
    color: #f4ede8;
    border: 0;
    font-size: 1.3rem;
    flex: 1;
  }

  input:focus {
    background: none;
  }

  input::placeholder {
    color: #666360;
  }

  input + input {
    margin-top: 8px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
  }

  span::before {
    border-color: #c53030 transparent;
  }
`;
