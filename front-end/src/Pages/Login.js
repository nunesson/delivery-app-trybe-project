import React, { useEffect, useState } from 'react';

function Login() {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);
  const [stateBtn, setStateBtn] = useState(true);

  const verifyValues = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const number = 5;
    const validateEmail = state.email.match(emailRegex);
    const validatePassword = state.password.length > number;
    console.log(state);
    if (validateEmail && validatePassword) {
      return setStateBtn(false);
    }
    return setStateBtn(true);
  };

  const onChange = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const onClickBtn = () => {
    window.location.replace('http://localhost:3000/register');
  };

  useEffect(() => verifyValues());

  return (
    <>
      <h1>Bar da Dona Tereza</h1>
      <label htmlFor="email">
        E-mail:
        <input
          data-testid="common_login__input-email"
          type="email"
          name="email"
          placeholder="Digite seu email"
          onChange={ onChange }
        />
      </label>
      <br />
      <label htmlFor="password">
        Senha:
        <input
          data-testid="common_login__input-password"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={ onChange }
        />
      </label>
      <br />
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ stateBtn }
      >
        Login
      </button>
      <br />
      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ onClickBtn }
      >
        Cadastre-se
      </button>
      <h3
        data-testid="common_login__element-invalid-email "
      >
        Tá errado isso aí
      </h3>
    </>
  );
}

export default Login;
