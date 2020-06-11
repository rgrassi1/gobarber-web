import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../helpers/getValidationErrors';
import { Background, AnimationFormContainer, ImageContainer } from './styles';
import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface IFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Informe um email válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setLoading(true);

        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de verificação enviado',
          description:
            'Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação senha',
          description: 'Ocorreu um erro ao recuperar a senha, tente novamente',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Background>
      <AnimationFormContainer>
        <img src={Logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar senha</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Button loading={loading} type="submit">
            Recuperar
          </Button>
        </Form>
        <Link to="/">
          <FiLogIn />
          Voltar para o logon
        </Link>
      </AnimationFormContainer>
      <ImageContainer />
    </Background>
  );
};

export default ForgotPassword;
