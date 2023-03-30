import React from 'react';

function Register() {
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
        />
      </label>
      <br />
      <button
        data-testid="common_register__button-register"
        type="button"
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
