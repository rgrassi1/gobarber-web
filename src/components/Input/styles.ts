import styled from 'styled-components';

export const Container = styled.div`
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

  input::placeholder {
    color: #666360;
  }

  input + input {
    margin-top: 8px;
  }
`;
