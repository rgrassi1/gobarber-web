import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface IToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: number;
}

const typeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<IToastProps>`
  width: 320px;

  position: relative;
  padding: 16px 32px 16px 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

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

  ${(props) => typeVariations[props.type || 'info']}

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
