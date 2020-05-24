import React from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';

import { useTheme } from '~/ThemeConfig';

import { Container, Left, Right, Overlay, Form } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const onSubmit = data => {
    dispatch(signInRequest(data.username, data.password));
  };

  const { logo } = useTheme();

  return (
    <Container>
      <Helmet title="Login | RedeOK" />
      <Left>
        <Overlay className="over" />
      </Left>
      <Right>
        <img src={logo} alt="logo" width="190px" />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <input
              type="text"
              name="username"
              autoComplete="off"
              required
              ref={register}
            />
            <hr />
            <p>Email, CPF, Usuário ou Código Cliente</p>
          </fieldset>
          <fieldset>
            <input type="password" name="password" required ref={register} />
            <hr />
            <p>Senha</p>
          </fieldset>
          <button type="submit">Entrar</button>
        </Form>
        <Link to="/forgot">Esqueceu a senha?</Link>
        <small>Copyright &copy; RedeOk - {new Date().getFullYear()}</small>
      </Right>
    </Container>
  );
}
