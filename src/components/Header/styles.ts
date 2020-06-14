import styled from 'styled-components';

export const Background = styled.div`
  background: #28262e;
  padding: 16px 0;
`;

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  > img {
    height: 64px;
    float: left;
    margin-right: 80px;
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  &::before {
    content: '';
    display: table;
    clear: both;
  }
`;

export const Profile = styled.div`
  float: left;
  height: 64px;
  padding: 8px 0 0 0;

  > img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
  }

  > div {
    float: right;
    height: 56px;
    padding: 12px 0 0 16px;
  }

  > div > span {
    display: block;
    color: #64ede8;
    font-size: 1.25em;
  }

  > div > strong {
    color: #ff9000;
    font-size: 1.25em;
  }
`;

export const SignOut = styled.div`
  float: right;
  padding: 16px;

  > button {
    background: transparent;
    padding: 8px;
    border: 0;
  }

  > button > svg {
    color: #999591;
  }
`;
