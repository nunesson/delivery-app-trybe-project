import React from 'react';

function Login() {
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
        />
      </label>
      <br />
      <button
        data-testid="common_login__button-login"
        type="button"
      >
        Login
      </button>
      <br />
      <button
        data-testid="common_login__button-register"
        type="button"
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
