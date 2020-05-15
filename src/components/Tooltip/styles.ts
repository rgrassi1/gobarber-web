import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background: #ff9000;
    color: #312e38;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 0.5s, opacity 0.5s;

    position: absolute;
    width: 160px;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
  }

  span::before {
    content: '';
    border-style: solid;
    border-color: #ff9090 transparent;
    border-width: 6px 6px 0 6px;

    top: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover > span {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 0.5s;
  }
`;
