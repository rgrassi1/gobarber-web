import React, { ButtonHTMLAttributes } from 'react';
import { BounceLoader } from 'react-spinners';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <BounceLoader
        size={24}
        color="#312e38"
        loading={loading}
        css="margin: 0 auto"
      />
    ) : (
      children
    )}
  </Container>
);

export default Button;
