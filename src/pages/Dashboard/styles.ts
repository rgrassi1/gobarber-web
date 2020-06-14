import styled from 'styled-components';

export const Background = styled.div`
  background: #312e38;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 24px auto;
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
  margin-top: 24px;

  > strong {
    color: #999591;
    font-size: 1.25em;
    font-weight: 400;
  }

  > div {
    background: #3e3b47;
    margin-top: 8px;
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
    height: 48px;
    width: 48px;
    border-radius: 50%;
    vertical-align: middle;
  }

  > div > div {
    display: inline-block;
    margin-left: 16px;
    line-height: 16px;
    width: calc(100% - 48px - 16px);
    vertical-align: middle;
  }

  > div > div > strong {
    display: inline-block;
    width: 50%;
    font-size: 1.125em;
  }

  > div > div > span {
    display: inline-block;
    width: 50%;
    text-align: end;
    color: #999591;
    font-size: 1.125em;
  }

  > div > div > span > svg {
    vertical-align: middle;
    color: #ff9000;
  }
`;

export const Shift = styled.div`
  margin-top: 32px;

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

export const Appointment = styled.div`
  > span {
    display: inline-block;
    width: 10%;
    color: #f4ede8;
  }

  > span > svg {
    vertical-align: middle;
    color: #ff9000;
  }

  > div {
    display: inline-block;
    padding: 8px 16px;
    background: #3e3b47;
    border-radius: 8px;
    width: 90%;
  }

  & + div {
    margin-top: 8px;
  }

  > div > img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    vertical-align: middle;
  }

  > div > strong {
    margin-left: 16px;
    vertical-align: middle;
  }
`;
