import styled from 'styled-components';

export const Background = styled.div`
  background: #312e38;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 48px auto;
`;

export const Schedule = styled.div`
  > h1 {
    font-size: 2em;
  }

  > p {
    margin-top: 8px;
    color: #ff9000;
    font-weight: 500;
  }

  > p > span + span::before {
    content: '';
    display: inline-block;
    height: 8px;
    margin: 0 8px;
    border-left: 1px solid #ff9000;
  }
`;

export const NextAppointment = styled.div`
  margin-top: 32px;

  > strong {
    color: #999591;
    font-size: 1.25em;
    font-weight: 400;
  }

  > div {
    background: #3e3b47;
    margin-top: 16px;
    padding: 16px 24px;
    border-radius: 8px;
    position: relative;
  }

  > div::before {
    position: absolute;
    left: 0;
    top: 10%;
    height: 80%;
    width: 2px;
    background: #ff9000;
    content: '';
  }

  > div > img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  > div > div {
    display: inline-block;
    margin-left: 16px;
    position: absolute;
    top: calc(50% - 12px);
    line-height: 24px;
    width: calc(100% - 128px);
    /* width: calc(100% - 48px - 64px - 16px); */
  }

  > div > div > strong {
    display: inline-block;
    width: 50%;
    font-size: 1.225em;
  }

  > div > div > span {
    display: inline-block;
    width: 50%;
    text-align: end;
    color: #999591;
    font-size: 1.225em;
  }

  > div > div > span > svg {
    vertical-align: middle;
    color: #ff9000;
  }
`;

export const Shift = styled.div`
  margin-top: 48px;

  > strong {
    display: block;
    color: #999591;
    font-size: 1.5em;
    line-height: 16px;
    border-bottom: 1px solid #3e3b47;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }
`;
