import React, { useEffect, useState } from 'react';

function Register() {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);
  const [stateBtn, setStateBtn] = useState(true);

  const verifyValues = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const nameMin = 11;
    const numberMin = 5;
    const validateEmail = state.email.match(emailRegex);
    const validatePassword = state.password.length > numberMin;
    const validateName = state.name.length > nameMin;
    if (validateEmail && validatePassword && validateName) return setStateBtn(false);
    return setStateBtn(true);
  };

  const onChangeForms = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => verifyValues());

  return (
    <>
      <h1>Cadastro</h1>
      <label htmlFor="name">
        Nome:
        <input
          data-testid="common_register__input-name"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={ onChangeForms }
        />
      </label>
      <br />
      <label htmlFor="email">
        E-mail:
        <input
          data-testid="common_register__input-email"
          type="email"
          name="email"
          placeholder="Digite seu email"
          onChange={ onChangeForms }
        />
      </label>
      <br />
      <label htmlFor="password">
        Senha:
        <input
          data-testid="common_register__input-password"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={ onChangeForms }
        />
      </label>
      <br />
      <button
        data-testid="common_register__button-register"
        type="button"
        disabled={ stateBtn }
      >
        Cadastre-se
      </button>
      <h3
        data-testid="common_register__element-invalid_register"
      >
        Tá errado isso aí
      </h3>
    </>
  );
}

export default Register;
