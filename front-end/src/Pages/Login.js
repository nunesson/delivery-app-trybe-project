import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { setLocalStorage, getLocalStorage } from '../LocalStorage/localStorage';
import { genericRoutes } from '../Axios/AxiosRoutes';

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

  const [errorState, setErrorState] = useState(false);

  const [redirectState, setredirectState] = useState(false);

  const onClickLogin = () => {
    const statusHTTP = 200;
    axios.post('http://localhost:3001/login', { ...state }).then((res) => {
      if (res.status === statusHTTP) setredirectState(true);
      const { name, email, role, token } = res.data;
      setLocalStorage('user', { name, email, role, token });
    }).catch((error) => {
      setErrorState(true);
      console.error(error.message);
    });
  };

  const verifyLogin = async () => {
    const user = getLocalStorage('user');

    if (user) {
      const { data } = await genericRoutes(
        'login',
        'post',
        user,
        { headers: { Authorization: user.token } },
      );

      setredirectState(true);

      return data;
    }
  };

  const onClickRegister = () => {
    window.location.replace('http://localhost:3000/register');
  };

  useEffect(() => {
    verifyValues();
    verifyLogin();
  });

  return (
    <div className="login">
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
        onClick={ onClickLogin }
      >
        Login
      </button>
      <br />
      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ onClickRegister }
      >
        Cadastre-se
      </button>
      { errorState && (
        <h3
          data-testid="common_login__element-invalid-email"
        >
          Tá errado isso aí
        </h3>)}
      { redirectState && <Redirect to="/customer/products" /> }
    </div>
  );
}

export default Login;
