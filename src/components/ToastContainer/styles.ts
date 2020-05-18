import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 24px;
  overflow: hidden;
`;

export const Toast = styled.div`
  width: 320px;

  position: relative;
  padding: 16px 32px 16px 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  background: #ebf8ff;
  color: #3172b7;

  > svg {
    margin: 4px 12px 0 0;
  }

  > div {
    flex: 1;
  }

  > div > p {
    margin-top: 4px;
    font-size: 0.85rem;
    opacity: 0.8;
    line-height: 20px;
  }

  > button {
    position: absolute;
    right: 16px;
    top: 20px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
